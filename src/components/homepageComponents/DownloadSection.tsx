import { Download } from "lucide-react";

const RELEASE_URL =
  "https://github.com/RishabhRawat2003/db_pulse_website/releases/tag/v1.0.0";

function DownloadSection() {
  const card =
    "group flex w-full sm:w-72 items-center gap-4 rounded-2xl border border-line bg-card px-6 py-5 text-left no-underline transition hover:border-primary/50";

  return (
    <section id="download" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-display text-3xl sm:text-4xl text-dark mb-4">
          Download DBPulse
        </h2>
        <p className="text-muted text-sm sm:text-base max-w-lg mx-auto mb-12">
          Windows, macOS, and Linux. Watch queries, manage connections, and copy your API key.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {[
            ["Windows", ".zip package · 64-bit"],
            ["macOS", ".zip · Apple Silicon + Intel"],
            ["Linux", ".zip package · 64-bit"],
          ].map(([name, detail]) => (
            <a key={name} href={RELEASE_URL} target="_blank" rel="noopener noreferrer" className={card}>
              <div className="rounded-xl bg-primary/15 p-3 text-primary">
                <Download className="h-6 w-6" />
              </div>
              <div>
                <div className="font-semibold text-dark">{name}</div>
                <div className="text-xs text-muted">{detail}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DownloadSection;
