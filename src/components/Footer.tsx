export function Footer() {
  return (
    <footer className="py-12 border-t border-slate-100 dark:border-slate-900 bg-white dark:bg-slate-950">
      <div className="container mx-auto px-4 text-center">
        <p className="text-slate-500 dark:text-slate-400 mb-2">
          © {new Date().getFullYear()} Abraham Takalng. All rights reserved.
        </p>
        <p className="text-slate-400 dark:text-slate-500 text-sm italic">
          Built with purpose and precision.
        </p>
      </div>
    </footer>
  );
}