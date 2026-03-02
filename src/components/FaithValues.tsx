import { motion } from 'framer-motion';

export function FaithValues() {
  return (
    <section id="faith" className="py-24 relative overflow-hidden bg-[#fdfcf8] dark:bg-slate-950">
      {/* Subtle Begena Line Art Background */}
      <div 
        className="absolute bottom-0 right-0 w-1/2 h-full opacity-[0.05] dark:opacity-[0.03] pointer-events-none"
        style={{ 
          backgroundImage: `url('https://storage.googleapis.com/dala-prod-public-storage/generated-images/113c96cb-7431-4f16-8604-372d2c56581d/begena-line-art-aaeafaee-1772375272281.webp')`,
          backgroundSize: 'contain',
          backgroundPosition: 'bottom right',
          backgroundRepeat: 'no-repeat'
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold dark:text-white mb-4">Faith & Cultural Foundation</h2>
            <div className="w-20 h-1 bg-amber-200 dark:bg-amber-900/30 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              <p>
                My professional drive is deeply rooted in my identity as an <strong>Ethiopian Orthodox Tewahedo</strong> Christian. This foundation instills in me values of integrity, stewardship, and a commitment to serving humanity through meaningful work.
              </p>
              <p>
                I hold a profound respect for the <strong>Ethiopian Begena</strong> tradition — a meditative, spiritual instrument often called "David's Harp." Its calm and minimal tone reflects my approach to life and work: focused, intentional, and harmonious.
              </p>
              <p>
                These cultural pillars guide my ethics in spatial planning and management, ensuring that every project I undertake respects both the environment and the community it serves.
              </p>
            </div>
            
            <div className="flex justify-center">
              <div className="relative p-8 rounded-2xl bg-white dark:bg-slate-900 border border-amber-100 dark:border-slate-800 shadow-xl max-w-sm">
                <blockquote className="italic text-slate-600 dark:text-slate-400 text-center mb-6">
                  "Wisdom and understanding are the pillars of progress, but integrity is the foundation upon which they stand."
                </blockquote>
                <div className="flex justify-center gap-4 text-amber-500">
                  <span className="w-2 h-2 rounded-full bg-amber-500/30" />
                  <span className="w-2 h-2 rounded-full bg-amber-500/50" />
                  <span className="w-2 h-2 rounded-full bg-amber-500/30" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}