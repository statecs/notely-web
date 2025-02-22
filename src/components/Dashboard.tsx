import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';
import Alert, { AlertDescription } from '../components/ui/alert';
import { RefreshCw, AlertCircle, ChevronDown } from 'lucide-react';

interface MetricsData {
  totalRequests: Array<{ total: number }>;
  costByDay: Array<{ date: string; total_cost: number }>;
  requestsByIp: Array<{ ip_address: string; count: number }>;
  requestsByEndpoint: Array<{ endpoint: string; count: number }>;
  avgProcessingTime: Array<{ endpoint: string; avg_time: number }>;
  hourlyStats: Array<{
    hour: number;
    request_count: number;
    total_cost: string;
    avg_processing_time: number;
  }>;
}

interface ChartCardProps {
  title: string;
  id: string;
  children: React.ReactNode;
  className?: string;
}

const Dashboard = () => {
  const [metrics, setMetrics] = useState<MetricsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState(new Date());
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        const response = await fetch('https://api.notely.se/dashboard/metrics');
        if (!response.ok) throw new Error('Failed to fetch metrics');
        const data = await response.json();
        setMetrics(data as MetricsData);
        setLastUpdated(new Date());
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'An error occurred';
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    fetchMetrics();
    const interval = setInterval(fetchMetrics, 300000);
    return () => clearInterval(interval);
  }, []);

  const ChartCard = ({ title, id, children, className = '' }: ChartCardProps) => {
    return (
      <Card className={`bg-gray-800 text-white overflow-hidden ${className}`}>
        <CardHeader 
          className={isMobile ? "cursor-pointer" : ""}
          onClick={() => isMobile && setExpandedCard(expandedCard === id ? null : id)}
        >
          <div className="flex justify-between items-center">
            <CardTitle className="text-lg">{title}</CardTitle>
            {isMobile && (
              <ChevronDown 
                className={`w-5 h-5 transition-transform ${
                  expandedCard === id ? 'transform rotate-180' : ''
                }`}
              />
            )}
          </div>
        </CardHeader>
        <CardContent 
          className={`transition-all duration-300 ${
            isMobile ? (expandedCard === id ? 'max-h-96' : 'max-h-0 overflow-hidden p-0') : ''
          }`}
        >
          {children}
        </CardContent>
      </Card>
    );
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <RefreshCw className="w-6 h-6 animate-spin text-blue-500" />
      </div>
    );
  }

  if (error) {
    return (
      <Alert 
        variant="destructive" 
        className="m-4"
        icon={<AlertCircle className="h-5 w-5" />}
        onClose={() => setError(null)}
      >
        <AlertDescription>Error: {error}</AlertDescription>
      </Alert>
    );
  }

  if (!metrics) return null;

  return (
    <div className="p-4 lg:p-8 bg-gray-900 min-h-screen">
      <div className="flex flex-col lg:flex-row lg:justify-between mb-6">
        <h1 className="text-2xl lg:text-3xl font-bold text-white">Analytics Dashboard</h1>
        <div className="text-sm text-gray-400">
          Last updated: {lastUpdated.toLocaleTimeString()}
        </div>
      </div>
      
      <div className="flex flex-col space-y-4 lg:grid lg:grid-cols-3 lg:gap-6 lg:space-y-0">
        <Card className="bg-gray-800 text-white lg:col-span-3">
          <CardContent className="pt-6">
            <div className="text-3xl font-bold text-blue-400 text-center">
              {metrics.totalRequests[0].total.toLocaleString()}
            </div>
            <div className="text-center mt-2">Total Requests</div>
          </CardContent>
        </Card>

        <ChartCard title="Daily Costs" id="costs" className="lg:col-span-3">
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={metrics.costByDay}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis 
                  dataKey="date" 
                  stroke="#9CA3AF"
                  angle={-45}
                  textAnchor="end"
                  height={60}
                  interval={0}
                  tick={{ fontSize: 12 }}
                />
                <YAxis stroke="#9CA3AF" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1F2937', border: 'none' }}
                  wrapperStyle={{ zIndex: 1000 }}
                />
                <Legend />
                <Line type="monotone" dataKey="total_cost" stroke="#60A5FA" name="Cost ($)" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </ChartCard>

        <ChartCard title="Hourly Statistics" id="hourly" className="lg:col-span-3">
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={metrics.hourlyStats}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis 
                  dataKey="hour" 
                  stroke="#9CA3AF"
                  tick={{ fontSize: 12 }}
                />
                <YAxis yAxisId="left" stroke="#9CA3AF" />
                <YAxis yAxisId="right" orientation="right" stroke="#9CA3AF" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1F2937', border: 'none' }}
                  wrapperStyle={{ zIndex: 1000 }}
                />
                <Legend />
                <Bar yAxisId="left" dataKey="request_count" fill="#60A5FA" name="Requests" />
                <Bar yAxisId="right" dataKey="avg_processing_time" fill="#FBBF24" name="Avg Time (ms)" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </ChartCard>

        <ChartCard title="Top IP Addresses" id="ips" className="lg:col-span-1">
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={metrics.requestsByIp}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis 
                  dataKey="ip_address" 
                  stroke="#9CA3AF"
                  angle={-45}
                  textAnchor="end"
                  height={60}
                  interval={0}
                  tick={{ fontSize: 12 }}
                />
                <YAxis stroke="#9CA3AF" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1F2937', border: 'none' }}
                  wrapperStyle={{ zIndex: 1000 }}
                />
                <Bar dataKey="count" fill="#34D399" name="Requests" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </ChartCard>

        <ChartCard title="Endpoint Usage" id="endpoints" className="lg:col-span-1">
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={metrics.requestsByEndpoint}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis 
                  dataKey="endpoint" 
                  stroke="#9CA3AF"
                  angle={-45}
                  textAnchor="end"
                  height={60}
                  interval={0}
                  tick={{ fontSize: 12 }}
                />
                <YAxis stroke="#9CA3AF" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1F2937', border: 'none' }}
                  wrapperStyle={{ zIndex: 1000 }}
                />
                <Bar dataKey="count" fill="#F472B6" name="Requests" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </ChartCard>

        <ChartCard title="Avg Processing Time" id="processing" className="lg:col-span-1">
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={metrics.requestsByEndpoint}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis 
                  dataKey="endpoint" 
                  stroke="#9CA3AF"
                  angle={-45}
                  textAnchor="end"
                  height={60}
                  interval={0}
                  tick={{ fontSize: 12 }}
                />
                <YAxis stroke="#9CA3AF" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1F2937', border: 'none' }}
                  wrapperStyle={{ zIndex: 1000 }}
                />
                <Bar dataKey="avg_time" fill="#FBBF24" name="Time (ms)" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </ChartCard>
      </div>
    </div>
  );
};

export default Dashboard;