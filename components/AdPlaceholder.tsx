import React from 'react';

interface AdPlaceholderProps {
  format?: 'banner' | 'sidebar' | 'in-content';
  className?: string;
}

export default function AdPlaceholder({ format = 'banner', className = '' }: AdPlaceholderProps) {
  let dimensions = "h-24 w-full"; // Banner
  if (format === 'sidebar') dimensions = "h-96 w-full";
  if (format === 'in-content') dimensions = "h-40 w-full";

  return (
    <div className={`border border-dashed border-gray-700 bg-gray-900/50 rounded-xl flex items-center justify-center text-gray-50赏 text-xs uppercase tracking-wider ${dimensions} ${className}`}>
      <span>Advertisement Area (AdSense / Sponsor)</span>
    </div>
  );
}
