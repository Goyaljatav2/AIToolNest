import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-gray-950/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-xl font-black tracking-tight text-white flex items-center gap-2">
            <span className="bg-indigo-600 text-white p-1.5 rounded-lg text-sm">AI</span>
            <span>AIToolNest</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-300">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <Link href="/tools" className="hover:text-white transition-colors">AI Tools</Link>
            <Link href="/categories" className="hover:text-white transition-colors">Categories</Link>
            <Link href="/compare" className="hover:text-white transition-colors">Compare</Link>
            <Link href="/free-tools" className="hover:text-white transition-colors">Free Tools</Link>
            <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
            <Link href="/about" className="hover:text-white transition-colors">About</Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/tools" className="hidden sm:inline-flex px-4 py-2 text-sm font-medium rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white transition-colors shadow-sm">
            Submit Tool
          </Link>
        </div>
      </div>
    </header>
  );
}
