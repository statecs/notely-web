import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface ExpandableCellProps {
  content: string;
}

const ExpandableCell = ({ content }: ExpandableCellProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative group">
      <div 
        className={`${isExpanded ? '' : 'max-w-xs truncate'} pr-8`}
      >
        {content}
      </div>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="absolute right-0 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
      >
        {isExpanded ? (
          <ChevronUp className="w-4 h-4 text-gray-400" />
        ) : (
          <ChevronDown className="w-4 h-4 text-gray-400" />
        )}
      </button>
    </div>
  );
};

export default ExpandableCell;