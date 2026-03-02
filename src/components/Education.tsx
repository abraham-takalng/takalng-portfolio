import { motion } from 'framer-motion';
import { GraduationCap, MapPin, CheckCircle2 } from 'lucide-react';

const educationData = [
  {
    title: "Bachelor of Science in Geographic Information Systems (GIS)",
    institution: "Madda Walabu University",
    location: "Ethiopia",
    focus: [
      "Raster & Vector Spatial Analysis",
      "DEM & Terrain Modeling",
      "Environmental Vulnerability Mapping",
      "Land Suitability Modeling",
      "Cartographic Visualization",
      "GPS-Based Field Data Collection",
      "Spatial Database Design",
      "Web GIS Foundations"
    ]
  },
  {
    title: "Bachelor of Arts in Management",
    institution: "Madda Walabu University",
    location: "Ethiopia",
    focus: [
      "Strategic Planning",
      "Project Management",
      "Leadership & Organizational Behavior",
      "Business Communication",
      "Financial Fundamentals",
      "Ethics & Governance"
    ]
  }
];

export function Education() {
  return (
    <section id="education" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold dark:text-white mb-4">Education</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            My dual-degree path allows me to analyze spatial systems and manage their implementation effectively within organizations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {educationData.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)" }}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 rounded-2xl transition-all"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl text-blue-600 dark:text-blue-400">
                  <GraduationCap className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold dark:text-white mb-1">{edu.title}</h3>
                  <div className="flex items-center text-slate-500 dark:text-slate-400 text-sm gap-2">
                    <span className="font-semibold">{edu.institution}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {edu.location}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <p className="font-bold text-sm text-slate-400 uppercase tracking-wider mb-2">Core Focus Areas:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {edu.focus.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}