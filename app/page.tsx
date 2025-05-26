import TestComponent from '@/components/TestComponent'

export default function Home() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">Media Query Range Syntax Test</h1>
      <p className="mb-6">
        This page demonstrates the issue with Turbopack in Next.js 15 ignoring 
        the postcss-preset-env media-query-ranges configuration.
      </p>
      <div className="p-4 mb-6 rounded">
        <h2 className="font-bold">How to test:</h2>
        <ol className="list-decimal pl-5">
          <li>Inspect the CSS in DevTools</li>
          <li>Look for media queries related to the md: breakpoint</li>
          <li>With Turbopack, you&apos;ll see: <code>@media (width &gt;= 768px)</code> or <code></code>@media (width &gt;= 48rem)</li>
          <li>Without Turbopack or in production or build: (tailwind v3.17)<code>@media (min-width: 768px)</code> or (tailwind v4)<code>@media (min-width: 48rem)</code></li>
        </ol>
      </div>
      <TestComponent />
    </main>
  )
}