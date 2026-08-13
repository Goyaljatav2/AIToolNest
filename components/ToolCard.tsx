import React from 'react';
import { Tool } from '@/types/tool';
import AffiliateButton from './AffiliateButton';
import Link from 'next/link';

interface ToolCardProps {
  tool: Tool;
}

export default function ToolCard({ tool }: ToolCardProps) {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 flex flex-col justify-between hover:border-indigo-500/50 transition-all shadow-xl">
      <div>
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gray-800 flex items-center justify-center text-xl font-bold text-white border border-gray-700">
              {tool.name.charAt(0)}
            </div>
            <div>
              <Link href={`/tools/${tool.slug}`} className="text-lg font-bold text-white hover:text-indigo-400 transition-colors">
                {tool.name}
              </Link>
              <span className="block text-xs text-gray-400">{tool.category}</span>
            </div>
          </div>
          <span className={`px-2.5 py-1 text-xs font-semibold rounded-full ${
            tool.pricing === 'Free' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' :
            tool.pricing === 'Freemium' ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' :
            'bg-purple-500/10 text-purple-400 border border-purple-500/20'
          }`}>
            {tool.pricing}
          </span>
        </div>

        <p className="text-gray-300 text-sm line-clamp-2 mb-4">
          {tool.description}
        </p>

        <div className="text-xs text-gray-400 mb-6 bg-gray-950/50 p-2.5 rounded-lg border border-gray-800/80">
          <strong>Pricing:</strong> {tool.pricingInfo}
        </div>
      </div>

      <div className="flex items-center gap-3 pt-4 border-t border-gray-800">
        <Link 
          href={`/tools/${tool.slug}`}
          className="flex-1 text-center py-2 px-3 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-200 text-sm font-medium transition-colors"
        >
          View Details
        </Link>
        <div className="flex-1">
          <AffiliateButton 
            officialUrl={tool.officialUrl} 
            affiliateUrl={tool.affiliateUrl}
            isSponsored={tool.isSponsored}
            className="w-full text-sm py-2"
          />
        </div>
      </div>
    </div>
  );
}
