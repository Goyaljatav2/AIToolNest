import React from 'react';

interface AffiliateButtonProps {
  officialUrl: string;
  affiliateUrl?: string;
  isSponsored?: boolean;
  className?: string;
}

export default function AffiliateButton({
  officialUrl,
  affiliateUrl,
  isSponsored,
  className = ""
}: AffiliateButtonProps) {
  const targetUrl = affiliateUrl || officialUrl;
  const isAffiliate = Boolean(affiliateUrl);

  return (
    <div className="inline-flex flex-col">
      <a
        href={targetUrl}
        target="_blank"
        rel={isAffiliate ? "nofollow noopener noreferrer" : "noopener noreferrer"}
        className={`inline-flex items-center justify-center px-4 py-2 rounded-lg font-medium transition-colors bg-indigo-600 hover:bg-indigo-500 text-white shadow-sm ${className}`}
      >
        Visit Tool
      </a>
      {isAffiliate && (
        <span className="text-[10px] text-gray-400 mt-1 text-center">
          Affiliate link
        </span>
      )}
      {isSponsored && (
        <span className="text-[10px] text-amber-400 mt-1 text-center font-semibold">
          Sponsored Listing
        </span>
      )}
    </div>
  );
}
