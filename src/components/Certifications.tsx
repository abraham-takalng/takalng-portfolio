import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const certifications = [
  { name: "AI & Governance", issuer: "Securiti", desc: "Foundational knowledge in AI ethics and data security." },
  { name: "Advanced Diploma in GIS", issuer: "Alison", desc: "Extensive study on spatial data systems and cartography." },
  { name: "Digital Marketing", issuer: "Gebeya", desc: "Digital outreach and strategic marketing frameworks." },
  { name: "Google Analytics", issuer: "Google", desc: "Data analysis and reporting for digital platforms." },
  { name: "Human Rights & Law", issuer: "The Open University", desc: "Understanding legal frameworks and human rights." },
  { name: "Microsoft Excel", issuer: "Alison", desc: "Advanced data manipulation and visualization." },
  { name: "Python Programming", issuer: "O'Reilly Media", desc: "Coding fundamentals for data science and automation." },
  { name: "AI & Empowerment", issuer: "University of Maryland", desc: "Social impact and accessibility through AI." },
  { name: "Data Science & Analytics", issuer: "HP", desc: "Core concepts of data processing and modeling." },
];

export function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-slate-50 dark:bg-slate-950/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold dark:text-white mb-4">Certifications & Professional Development</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            I actively invest in continuous learning across GIS, AI, governance, and analytics to strengthen my interdisciplinary profile.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Award className="w-6 h-6" />
                </div>
              </div>
              <h3 className="font-bold text-lg dark:text-white mb-1">{cert.name}</h3>
              <p className="text-blue-600 dark:text-blue-400 text-sm font-medium mb-3">{cert.issuer}</p>
              
              <div className="text-slate-500 dark:text-slate-400 text-sm h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-300">
                {cert.desc}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}