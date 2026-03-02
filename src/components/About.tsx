import { motion } from 'framer-motion';

export function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="py-24 bg-slate-50 dark:bg-slate-950/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-8 dark:text-white border-l-4 border-blue-600 pl-4">
            About Me
          </motion.h2>

          <div className="space-y-6 text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
            <motion.p variants={itemVariants}>
              HI! My name is <strong>Abraham Takalng</strong>. I am a dual-degree university student at Madda Walabu University, pursuing Bachelor’s degrees in <strong>Geographic Information Systems (GIS)</strong> and <strong>Management</strong>.
            </motion.p>

            <motion.p variants={itemVariants}>
              My academic path is intentionally interdisciplinary. GIS trains me to analyze spatial data, model terrain systems, perform environmental assessments, and build structured geospatial databases. Management equips me with strategic planning ability, leadership discipline, project coordination skills, and organizational thinking.
            </motion.p>

            <motion.p variants={itemVariants}>
              I believe GIS is not just about creating maps — it is about enabling better decisions. Spatial data becomes powerful when it is structured, analyzed correctly, and aligned with strategic goals.
            </motion.p>

            <motion.p variants={itemVariants}>
              I am actively developing advanced technical skills in spatial analysis, Python programming, AI awareness, and data analytics to compete in both national and international professional environments. My ambition is to grow into a GIS professional who contributes to sustainable development, environmental planning, and institutional spatial systems.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}