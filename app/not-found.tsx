export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-gray-400 mb-8">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <a
          href="/"
          className="px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors"
        >
          Go Home
        </a>
      </div>
    </div>
  );
}
