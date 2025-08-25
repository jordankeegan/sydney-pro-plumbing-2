export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center p-6">
      <img src="/sydneyproplumbing-logo.png" alt="Sydney Pro Plumbing" className="h-24 mb-6" />
      <h1 className="text-4xl font-bold mb-4">Sydney Pro Plumbing</h1>
      <p className="text-lg mb-6">Professional Plumbing Services Across Sydney</p>
      <a href="tel:+61000000000" className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700">
        Call Now - 24/7
      </a>
    </main>
  );
}