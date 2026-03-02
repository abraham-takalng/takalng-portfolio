import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Globe, Database, Mountain, Map as MapIcon } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "University Campus GIS System",
    shortDesc: "Designed a structured spatial database mapping university buildings and facilities.",
    icon: <Globe className="w-8 h-8" />,
    problem: "Lack of a centralized spatial database for campus facility management and navigation.",
    tools: ["ArcGIS", "GPS", "QGIS", "Excel"],
    method: "GPS-based field data collection followed by shapefile creation and attribute table structuring.",
    impact: "Created a scalable GIS framework that can evolve into a Web GIS platform for public navigation.",
    image: "https://images.unsplash.com/photo-1592173377099-582a598aee47?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Goba Town Environmental Vulnerability",
    shortDesc: "Conducted spatial risk modeling for environmental planning.",
    icon: <Mountain className="w-8 h-8" />,
    problem: "Environmental hazards in Goba town requiring spatial identification for disaster mitigation.",
    tools: ["ArcGIS Pro", "Digital Elevation Models", "Python"],
    method: "Slope analysis, elevation modeling, and river proximity buffering using weighted raster overlay.",
    impact: "Produced vulnerability maps supporting environmental planning and disaster mitigation strategies.",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2013&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Bale Robe Land Use Optimization",
    shortDesc: "Developed land suitability model using multi-criteria spatial evaluation.",
    icon: <MapIcon className="w-8 h-8" />,
    problem: "Inefficient land allocation in Bale Robe without scientific geographic parameters.",
    tools: ["GIS Raster Analysis", "Suitability Modeler", "Remote Sensing"],
    method: "Raster reclassification and overlay analysis to identify optimal land zones.",
    impact: "Proposed optimized land allocation zones based on environmental and geographic parameters.",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1932&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Student Database System",
    shortDesc: "Designed and structured a database framework for managing 3,000+ records.",
    icon: <Database className="w-8 h-8" />,
    problem: "Inefficient management of large-scale student records leading to data silos.",
    tools: ["SQL", "Data Modeling", "Excel"],
    method: "Logical data organization and structured record storage focusing on scalability.",
    impact: "Strengthened systems thinking and database design ability for large scale data management.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
  }
];

export function Projects() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const selectedProject = projects.find(p => p.id === selectedId);

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold dark:text-white mb-4">Selected Projects</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Practical application of GIS and Management strategy in real-world scenarios.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              layoutId={`card-${project.id}`}
              onClick={() => setSelectedId(project.id)}
              className="cursor-pointer group relative overflow-hidden rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm"
              whileHover={{ scale: 1.02 }}
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-white text-slate-900 px-4 py-2 rounded-full font-bold text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform">View Details</span>
                </div>
              </div>
              <div className="p-6">
                <div className="text-blue-600 mb-4">{project.icon}</div>
                <h3 className="text-xl font-bold dark:text-white mb-2">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm line-clamp-2">{project.shortDesc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedId && selectedProject && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm">
              <motion.div
                layoutId={`card-${selectedId}`}
                className="bg-white dark:bg-slate-900 w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl relative"
              >
                <button 
                  onClick={() => setSelectedId(null)}
                  className="absolute top-4 right-4 z-10 p-2 bg-slate-100 dark:bg-slate-800 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                >
                  <X className="w-6 h-6 dark:text-white" />
                </button>

                <div className="h-64 overflow-hidden">
                  <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
                </div>

                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-blue-600">{selectedProject.icon}</div>
                    <h3 className="text-3xl font-bold dark:text-white">{selectedProject.title}</h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white mb-2 uppercase text-xs tracking-wider">Problem</h4>
                      <p className="text-slate-600 dark:text-slate-400 mb-6">{selectedProject.problem}</p>

                      <h4 className="font-bold text-slate-900 dark:text-white mb-2 uppercase text-xs tracking-wider">Tools</h4>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {selectedProject.tools.map((tool, i) => (
                          <span key={i} className="bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full text-xs font-semibold">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white mb-2 uppercase text-xs tracking-wider">Method</h4>
                      <p className="text-slate-600 dark:text-slate-400 mb-6">{selectedProject.method}</p>

                      <h4 className="font-bold text-slate-900 dark:text-white mb-2 uppercase text-xs tracking-wider">Impact</h4>
                      <p className="text-slate-600 dark:text-slate-400 font-medium text-blue-600 dark:text-blue-400">{selectedProject.impact}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}