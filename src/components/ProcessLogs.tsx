import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import Alert, { AlertDescription } from '../components/ui/alert';
import { RefreshCw, AlertCircle } from 'lucide-react';

interface LogEntry {
    id: number;
    request_id: number;
    request_body: string;
    text: string;
    instruction_text: string;
    chat_history: string | null;
    created_at: string;
    metadata: string;
  }
  
  interface MetadataType {
    headers?: {
      realIp?: string;
      source?: string;
      paidUser?: string;
      userAgent?: string;
    };
    cf?: {
      country?: string | null;
      timezone?: string | null;
      region?: string | null;
      city?: string | null;
    };
  }
interface FilterState {
  startDate: string;
  endDate: string;
  endpoint: string;
  statusCode: string;
  country: string;
  paidUser: string;
  source: string;
}

const ProcessLogs = () => {
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState<FilterState>({
    startDate: '',
    endDate: '',
    endpoint: '',
    statusCode: '',
    country: '',
    paidUser: '',
    source: ''
  });

  useEffect(() => {
    const fetchLogs = async () => {
      setLoading(true);
      try {
        const params = new URLSearchParams({
          page: page.toString(),
          limit: '50',
          ...(filters.startDate && { startDate: filters.startDate }),
          ...(filters.endDate && { endDate: filters.endDate }),
          ...(filters.endpoint && { endpoint: filters.endpoint }),
          ...(filters.statusCode && { statusCode: filters.statusCode }),
          ...(filters.country && { country: filters.country }),
          ...(filters.paidUser && { paidUser: filters.paidUser }),
          ...(filters.source && { source: filters.source })
        });

        const response = await fetch(`https://api.notely.se/dashboard/process-logs?${params}`);
        if (!response.ok) throw new Error('Failed to fetch logs');
        const data = await response.json();
        setLogs(data.logs || []);
      } catch (error) {
        setError(error instanceof Error ? error.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchLogs();
  }, [page, filters]);

  const handleFilterChange = (key: keyof FilterState, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
    setPage(1);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <RefreshCw className="w-6 h-6 animate-spin text-blue-500" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 border border-red-500 bg-red-100 text-red-700 rounded-lg">
        <AlertCircle className="h-4 w-4 inline mr-2" />
        Error: {error}
      </div>
    );
  }

  return (
    <div className="p-4 space-y-4">
      <Card className="bg-gray-800">
        <CardHeader>
          <CardTitle className="text-white">Process Logs</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Start Date
              </label>
              <input
                type="date"
                className="w-full bg-gray-700 text-white rounded-lg p-2 border border-gray-600"
                value={filters.startDate}
                onChange={(e) => handleFilterChange('startDate', e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                End Date
              </label>
              <input
                type="date"
                className="w-full bg-gray-700 text-white rounded-lg p-2 border border-gray-600"
                value={filters.endDate}
                onChange={(e) => handleFilterChange('endDate', e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Endpoint
              </label>
              <input
                type="text"
                className="w-full bg-gray-700 text-white rounded-lg p-2 border border-gray-600"
                placeholder="/process-text"
                value={filters.endpoint}
                onChange={(e) => handleFilterChange('endpoint', e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Status Code
              </label>
              <input
                type="text"
                className="w-full bg-gray-700 text-white rounded-lg p-2 border border-gray-600"
                placeholder="200"
                value={filters.statusCode}
                onChange={(e) => handleFilterChange('statusCode', e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Country
              </label>
              <input
                type="text"
                className="w-full bg-gray-700 text-white rounded-lg p-2 border border-gray-600"
                placeholder="SE"
                value={filters.country}
                onChange={(e) => handleFilterChange('country', e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Paid User
              </label>
              <select
                className="w-full bg-gray-700 text-white rounded-lg p-2 border border-gray-600"
                value={filters.paidUser}
                onChange={(e) => handleFilterChange('paidUser', e.target.value)}
              >
                <option value="">All</option>
                <option value="true">Yes</option>
                <option value="false">No</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Source
              </label>
              <input
                type="text"
                className="w-full bg-gray-700 text-white rounded-lg p-2 border border-gray-600"
                placeholder="Flutter-App"
                value={filters.source}
                onChange={(e) => handleFilterChange('source', e.target.value)}
              />
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
          <table className="w-full text-left text-gray-300">
            <thead className="bg-gray-700 text-gray-200">
            <tr>
                <th className="p-4">Time</th>
                <th className="p-4">Request ID</th>
                <th className="p-4">Text</th>
                <th className="p-4">Source</th>
                <th className="p-4">Paid User</th>
            </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
            {logs.map((log) => {
                let metadata: MetadataType = { headers: {} };
                try {
                    if (log.metadata) {
                    metadata = JSON.parse(log.metadata);
                    }
                } catch (e) {
                    console.error('Failed to parse metadata:', e);
                }

                return (
                    <tr key={log.id} className="hover:bg-gray-700">
                    <td className="p-4">{new Date(log.created_at).toLocaleString()}</td>
                    <td className="p-4">{log.request_id}</td>
                    <td className="p-4">{log.text}</td>
                    <td className="p-4">{metadata?.headers?.source || 'N/A'}</td>
                    <td className="p-4">{metadata?.headers?.paidUser === 'true' ? 'Yes' : 'No'}</td>
                    </tr>
                );
                })}
            </tbody>
        </table>
          </div>

          {/* Pagination */}
          <div className="flex justify-between items-center mt-4">
            <button
              onClick={() => setPage(p => Math.max(1, p - 1))}
              disabled={page === 1}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>
            <span className="text-gray-300">Page {page}</span>
            <button
              onClick={() => setPage(p => p + 1)}
              disabled={logs.length < 50}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProcessLogs;