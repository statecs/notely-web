import React from 'react';
import { AlertCircle, XCircle, CheckCircle } from 'lucide-react';

type AlertVariant = 'default' | 'destructive' | 'success';

interface AlertProps {
  children: React.ReactNode;
  variant?: AlertVariant;
  className?: string;
  icon?: React.ReactNode;
  onClose?: () => void;
}

const Alert = ({ 
  children, 
  variant = 'default',
  className = '',
  icon,
  onClose 
}: AlertProps) => {
  const baseStyles = "flex items-center p-4 rounded-lg";
  
  const variantStyles = {
    default: "bg-gray-800 text-gray-200",
    destructive: "bg-red-900/20 text-red-300 border border-red-800",
    success: "bg-green-900/20 text-green-300 border border-green-800"
  };

  const defaultIcons = {
    default: <AlertCircle className="h-5 w-5" />,
    destructive: <XCircle className="h-5 w-5 text-red-400" />,
    success: <CheckCircle className="h-5 w-5 text-green-400" />
  };

  return (
    <div className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      <div className="mr-3">
        {icon || defaultIcons[variant]}
      </div>
      <div className="flex-1">{children}</div>
      {onClose && (
        <button 
          onClick={onClose}
          className="ml-3 hover:opacity-80 transition-opacity"
        >
          <XCircle className="h-5 w-5" />
        </button>
      )}
    </div>
  );
};

export const AlertTitle = ({ 
  children,
  className = '' 
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <h5 className={`font-medium mb-1 ${className}`}>
    {children}
  </h5>
);

export const AlertDescription = ({ 
  children,
  className = '' 
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={`text-sm opacity-90 ${className}`}>
    {children}
  </div>
);

export default Alert;