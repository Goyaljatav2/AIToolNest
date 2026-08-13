import Navbar from '@/components/Navbar';

export default function AffiliateDisclosure() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <Navbar />
      <main className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-black mb-6">Affiliate Disclosure</h1>
        <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
          <p>
            In compliance with FTC guidelines and standard publishing ethics, please note that AIToolNest contains affiliate links. When you click through and sign up or purchase software products via our links, we may earn a small commission at absolutely zero additional cost to you.
          </p>
          <p>
            Our reviews, ratings, and tool comparisons are driven by factual evaluation, capabilities, and features. Sponsored placements or affiliate partnerships never compromise the integrity of our recommendations or directory listings.
          </p>
        </div>
      </main>
    </div>
  );
}
