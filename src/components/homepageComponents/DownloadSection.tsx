"use client";
import JSZip from "jszip";
import {
  Download
} from "lucide-react";

// Helper: generate & download zip file on client
async function downloadPlatformZip(platform: "windows" | "mac") {
  const zip = new JSZip();
  const readmeContent = `# DbPulse Desktop App (${platform.toUpperCase()})

Thanks for downloading DbPulse!

Version: 1.0.0-beta
Release Date: ${new Date().toLocaleDateString()}

## Quick Start
1. Extract this zip archive
2. Run DbPulse Setup (Windows: DbPulse-Setup.exe / Mac: DbPulse.dmg)
3. Launch the desktop application
4. Sign up / Login and add your database connection string (MongoDB, soon PostgreSQL/MySQL)
5. Obtain API Key + Connection ID
6. Install dbpulse-agent in your backend: npm install dbpulse-agent
7. Initialize agent with your credentials

## Documentation
Full docs: https://docs.dbpulse.dev

For issues, reach out: support@dbpulse.dev

Happy monitoring! 🚀
`;
  zip.file("README_FIRST.txt", readmeContent);

  // add a placeholder executable info (just dummy)
  zip.file("INSTALLATION.txt", `To install DbPulse on ${platform}, please follow the guide above. The actual installer will be available in production. This beta zip includes setup instructions.\n\nDbPulse Team`);

  const blob = await zip.generateAsync({ type: "blob" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `DbPulse-${platform === "windows" ? "Windows" : "macOS"}-v1.0.0.zip`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}


function DownloadSection() {
  return (
     <section id="download" className="py-20 bg-linear-to-b from-white to-gray-50">
          <div className="container-custom text-center">
            <h2 className="text-4xl font-bold mb-4">Download DbPulse Desktop</h2>
            <p className="text-gray-500 max-w-lg mx-auto mb-12">Available for Windows and macOS. Complete dashboard to monitor query insights, API keys, and connection management.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button
                onClick={() => downloadPlatformZip("windows")}
                className="group bg-dark hover:bg-gray-800 text-white px-10 py-5 rounded-2xl flex items-center gap-4 transition-all shadow-lg hover:shadow-xl w-72 justify-start"
              >
                <div className="bg-primary/20 p-3 rounded-xl group-hover:scale-105 transition">
                  <Download className="w-7 h-7 text-primary" />
                </div>
                <div className="text-left">
                  <div className="font-bold text-lg">Windows</div>
                  <div className="text-xs text-gray-400">.zip package • 64-bit</div>
                </div>
              </button>
              <button
                onClick={() => downloadPlatformZip("mac")}
                className="group bg-dark hover:bg-gray-800 text-white px-10 py-5 rounded-2xl flex items-center gap-4 transition-all shadow-lg hover:shadow-xl w-72 justify-start"
              >
                <div className="bg-primary/20 p-3 rounded-xl group-hover:scale-105 transition">
                  <Download className="w-7 h-7 text-primary" />
                </div>
                <div className="text-left">
                  <div className="font-bold text-lg">macOS</div>
                  <div className="text-xs text-gray-400">Apple Silicon + Intel • .zip</div>
                </div>
              </button>
            </div>
            <p className="text-xs text-gray-400 mt-8">Requires Node.js backend integration. Agent supports MongoDB fully; PostgreSQL/MySQL coming soon.</p>
          </div>
        </section>
  )
}

export default DownloadSection