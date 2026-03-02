import { motion } from 'framer-motion';

const skillCategories = [
  {
    name: "GIS & Spatial Analysis",
    skills: [
      { name: "Raster & Vector Analysis", level: 90 },
      { name: "Terrain Modeling (DEM)", level: 85 },
      { name: "Remote Sensing", level: 80 },
      { name: "Cartography", level: 88 },
    ]
  },
  {
    name: "Programming & Data",
    skills: [
      { name: "Python", level: 75 },
      { name: "SQL & Databases", level: 82 },
      { name: "Data Visualization", level: 85 },
      { name: "Excel (Advanced)", level: 92 },
    ]
  },
  {
    name: "AI & Analytics",
    skills: [
      { name: "AI Ethics & Governance", level: 88 },
      { name: "Spatial Data Science", level: 78 },
      { name: "Google Analytics", level: 85 },
      { name: "Machine Learning (Basics)", level: 65 },
    ]
  },
  {
    name: "Management & Leadership",
    skills: [
      { name: "Strategic Planning", level: 92 },
      { name: "Project Coordination", level: 90 },
      { name: "Organizational Behavior", level: 88 },
      { name: "Leadership", level: 91 },
    ]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-50 dark:bg-slate-950/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold dark:text-white mb-4">Technical & Strategic Skills</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A diverse toolkit bridging technical execution with strategic implementation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {skillCategories.map((category, idx) => (
            <div key={idx}>
              <h3 className="text-xl font-bold dark:text-white mb-6 border-b border-slate-200 dark:border-slate-800 pb-2">{category.name}</h3>
              <div className="space-y-6">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-semibold dark:text-slate-300">{skill.name}</span>
                      <span className="text-sm font-bold text-blue-600 dark:text-blue-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut", delay: sIdx * 0.1 }}
                        className="h-full bg-blue-600 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}