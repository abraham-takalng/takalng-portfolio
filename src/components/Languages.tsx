import { motion } from 'framer-motion';
import { Globe2 } from 'lucide-react';

const languages = [
  { name: "Afaan Oromo", level: "Native", icon: "🌍" },
  { name: "Amharic", level: "Fluent", icon: "🇪🇹" },
  { name: "English", level: "Professional", icon: "🇬🇧" },
];

export function Languages() {
  return (
    <section className="py-12 border-y border-slate-100 dark:border-slate-900">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-3 mb-10">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <Globe2 className="w-8 h-8 text-blue-600" />
          </motion.div>
          <h2 className="text-2xl font-bold dark:text-white">Languages</h2>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {languages.map((lang, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-center gap-4 bg-white dark:bg-slate-900 px-6 py-3 rounded-full border border-slate-200 dark:border-slate-800 shadow-sm"
            >
              <span className="text-2xl">{lang.icon}</span>
              <div>
                <p className="font-bold dark:text-white leading-none">{lang.name}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">{lang.level}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}