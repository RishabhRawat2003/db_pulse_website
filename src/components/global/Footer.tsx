function Footer() {
  return (
    <footer className="border-t border-line bg-canvas py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-3">
          <span className="font-display text-lg text-dark">DBPulse</span>
          <span className="text-muted text-sm">© 2026</span>
        </div>
        <p className="text-center text-xs text-muted mt-6 max-w-2xl mx-auto leading-relaxed">
          Track queries from MongoDB and PostgreSQL. Desktop app plus agents for Node, Python, and Java.
          MySQL is on the way.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
