import { Download } from "lucide-react";

const RELEASE_URL =
  "https://github.com/RishabhRawat2003/db_pulse_website/releases/tag/v1.0.0";

function DownloadSection() {
  return (
    <section id="download" className="py-16 sm:py-20 bg-linear-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-dark">
          Download DbPulse Desktop
        </h2>
        <p className="text-gray-500 text-sm sm:text-base max-w-lg mx-auto mb-10 sm:mb-12">
          Available for Windows, macOS, and Linux. Complete dashboard to monitor query insights,
          API keys, and connection management.
        </p>

        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
          {/* Windows button */}
          <a
            href={RELEASE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-dark hover:bg-gray-800 text-white px-6 sm:px-10 py-4 sm:py-5 rounded-2xl flex items-center gap-4 transition-all shadow-lg hover:shadow-xl w-full sm:w-72 justify-start no-underline"
          >
            <div className="bg-primary/20 p-3 rounded-xl group-hover:scale-105 transition">
              <Download className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
            </div>
            <div className="text-left">
              <div className="font-bold text-base sm:text-lg">Windows</div>
              <div className="text-xs text-gray-400">.zip package • 64-bit</div>
            </div>
          </a>

          {/* macOS button */}
          <a
            href={RELEASE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-dark hover:bg-gray-800 text-white px-6 sm:px-10 py-4 sm:py-5 rounded-2xl flex items-center gap-4 transition-all shadow-lg hover:shadow-xl w-full sm:w-72 justify-start no-underline"
          >
            <div className="bg-primary/20 p-3 rounded-xl group-hover:scale-105 transition">
              <Download className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
            </div>
            <div className="text-left">
              <div className="font-bold text-base sm:text-lg">macOS</div>
              <div className="text-xs text-gray-400">.zip • Apple Silicon + Intel</div>
            </div>
          </a>

          {/* Linux button */}
          <a
            href={RELEASE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-dark hover:bg-gray-800 text-white px-6 sm:px-10 py-4 sm:py-5 rounded-2xl flex items-center gap-4 transition-all shadow-lg hover:shadow-xl w-full sm:w-72 justify-start no-underline"
          >
            <div className="bg-primary/20 p-3 rounded-xl group-hover:scale-105 transition">
              <Download className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
            </div>
            <div className="text-left">
              <div className="font-bold text-base sm:text-lg">Linux</div>
              <div className="text-xs text-gray-400">.zip package • 64-bit</div>
            </div>
          </a>
        </div>

        <p className="text-xs text-gray-400 mt-8 max-w-2xl mx-auto">
          Requires Node.js backend integration. Agent supports MongoDB fully; PostgreSQL/MySQL
          coming soon.
        </p>
      </div>
    </section>
  );
}

export default DownloadSection;