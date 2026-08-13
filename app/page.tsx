import Navbar from '@/components/Navbar';
import ToolCard from '@/components/ToolCard';
import AdPlaceholder from '@/components/AdPlaceholder';
import { toolsData, categories } from '@/data/toolsData';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 selection:bg-indigo-500 selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16 lg:pt-32 lg:pb-24 border-b border-gray-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-gray-950/0 to-gray-950 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <span className="inline-block py-1 px-3 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold mb-6">
            Find the Right AI Tool for Every Task
          </span>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white mb-6 leading-tight">
            Discover the Best AI Tools for Your Work
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Compare AI tools, discover free alternatives, and find the right software for writing, studying, coding, design, marketing and productivity.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link href="/tools" className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition-colors shadow-lg shadow-indigo-600/20">
              Explore AI Tools
            </Link>
            <Link href="/free-tools" className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gray-900 hover:bg-gray-800 text-gray-200 border border-gray-800 font-semibold transition-colors">
              Find Free Tools
            </Link>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto bg-gray-900 border border-gray-800 rounded-2xl p-2 flex items-center shadow-2xl">
            <input 
              type="text" 
              placeholder="Search AI tools, software and productivity apps..."
              className="w-full bg-transparent px-4 py-3 text-gray-100 placeholder-gray-500 focus:outline-none text-sm"
            />
            <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-xl font-medium text-sm transition-colors">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Banner Ad Placement */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <AdPlaceholder format="banner" />
      </div>

      {/* Categories Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold tracking-tight text-white">Explore Categories</h2>
          <Link href="/categories" className="text-sm font-semibold text-indigo-400 hover:text-indigo-300">View All →</Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <Link 
              key={cat.slug} 
              href={`/categories/${cat.slug}`}
              className="bg-gray-900/60 border border-gray-800/80 p-5 rounded-2xl hover:border-indigo-500/50 hover:bg-gray-900 transition-all flex items-center gap-4 group"
            >
              <span className="text-2xl p-3 bg-gray-800 rounded-xl group-hover:scale-110 transition-transform">{cat.icon}</span>
              <div>
                <h3 className="font-semibold text-white text-sm">{cat.name}</h3>
                <span className="text-xs text-gray-400">{cat.count} tools</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Trending AI Tools */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-gray-900">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-white">Trending AI Tools</h2>
            <p className="text-sm text-gray-400 mt-1">Most popular verified applications chosen by professionals.</p>
          </div>
          <Link href="/tools" className="text-sm font-semibold text-indigo-400 hover:text-indigo-300">View All →</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {toolsData.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 border-t border-gray-900 py-12 mt-20 text-sm text-gray-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="text-white font-black text-lg mb-3">AIToolNest</div>
            <p className="text-xs text-gray-500">Find the Right AI Tool for Every Task. Professional discovery, directory and comparison platform.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3 text-xs uppercase tracking-wider">Directory</h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/tools" className="hover:text-white">All AI Tools</Link></li>
              <li><Link href="/categories" className="hover:text-white">Categories</Link></li>
              <li><Link href="/free-tools" className="hover:text-white">Free AI Tools</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3 text-xs uppercase tracking-wider">Comparison & Blog</h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/compare" className="hover:text-white">Compare Tools</Link></li>
              <li><Link href="/blog" className="hover:text-white">Guides & Blog</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3 text-xs uppercase tracking-wider">Legal & Disclosure</h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white">Terms of Service</Link></li>
              <li><Link href="/affiliate-disclosure" className="hover:text-white">Affiliate Disclosure</Link></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-gray-900/50 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500">
          <p>© 2026 AIToolNest. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">Affiliate Disclosure: Some links may be affiliate links. We may earn a commission at no extra cost to you.</p>
        </div>
      </footer>
    </div>
  );
}
