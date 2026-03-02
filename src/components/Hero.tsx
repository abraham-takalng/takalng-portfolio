import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* GIS Coordinate Grid Background */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.07]"
        style={{ 
          backgroundImage: `url('https://storage.googleapis.com/dala-prod-public-storage/generated-images/113c96cb-7431-4f16-8604-372d2c56581d/gis-grid-background-2999f99a-1772375273007.webp')`,
          backgroundSize: '800px',
          backgroundRepeat: 'repeat'
        }}
      />
      
      {/* Animated GIS Coordinate Dots */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div 
            key={i}
            animate={{ 
              x: [Math.random() * 100 - 50, Math.random() * 100 - 50], 
              y: [Math.random() * 100 - 50, Math.random() * 100 - 50],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{ 
              duration: 10 + Math.random() * 10, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            style={{
              position: 'absolute',
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: '2px',
              height: '2px',
              backgroundColor: '#3b82f6',
              borderRadius: '50%'
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 dark:text-white tracking-tight">
              Spatial Intelligence. <br />
              <span className="text-blue-600">Strategic Thinking.</span> <br />
              Purpose-Driven Impact.
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-6 font-medium">
              GIS & Management Student | Spatial Data Analyst | AI & Data Enthusiast
            </p>
            <p className="text-lg text-slate-500 dark:text-slate-400 mb-10 max-w-lg">
              I transform geographic data into structured insights that support smarter planning, 
              environmental resilience, and institutional decision-making.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="#projects" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all flex items-center gap-2 shadow-lg shadow-blue-500/20 active:scale-95"
              >
                View Portfolio <ArrowRight className="w-4 h-4" />
              </a>
              <a 
                href="https://storage.googleapis.com/dala-prod-public-storage/attachments/820e4cfb-b67b-4e0d-acfe-8a02a845cd07/1772374979316_Resume_CV__1_.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white px-8 py-3 rounded-full font-semibold transition-all flex items-center gap-2 active:scale-95"
              >
                Download CV <Download className="w-4 h-4" />
              </a>
              <a 
                href="#contact" 
                className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 px-4 py-3 font-semibold transition-all flex items-center gap-2"
              >
                Contact Me <Mail className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="flex justify-center order-1 lg:order-2"
          >
            <div className="relative group">
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="w-56 h-56 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl dark:shadow-blue-500/20 group-hover:scale-[1.02] transition-transform duration-500 relative"
              >
                <img 
                  src="https://storage.googleapis.com/dala-prod-public-storage/attachments/820e4cfb-b67b-4e0d-acfe-8a02a845cd07/1772374969751_my_picture.png" 
                  alt="Abraham Takalng"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </motion.div>
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-full bg-blue-500/10 dark:bg-blue-400/20 blur-3xl -z-10 group-hover:bg-blue-500/30 transition-colors duration-500" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}