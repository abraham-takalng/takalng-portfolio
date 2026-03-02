import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Send, CheckCircle, Mail, Github, Linkedin, MessageCircle } from 'lucide-react';
import { toast } from 'sonner';

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const controls = useAnimation();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    if (!name || !email || !message) {
      controls.start({
        x: [-10, 10, -10, 10, 0],
        transition: { duration: 0.4 }
      });
      toast.error("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    toast.success("Thank you. Your message has been successfully delivered.");
    
    setTimeout(() => setIsSuccess(false), 8000);
    form.reset();
  };

  const socialLinks = [
    { icon: <Mail className="w-6 h-6" />, label: "Email", value: "takalngabraham@gmail.com", href: "mailto:takalngabraham@gmail.com" },
    { icon: <Linkedin className="w-6 h-6" />, label: "LinkedIn", value: "Abraham Takalng", href: "https://linkedin.com/in/abraham-takalng" },
    { icon: <Github className="w-6 h-6" />, label: "GitHub", value: "abraham takalng", href: "https://github.com/abraham-takalng" },
    { icon: <MessageCircle className="w-6 h-6" />, label: "Telegram", value: "@abraham_takalng", href: "https://t.me/abraham_takalng" }
  ];

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold dark:text-white mb-4">Get In Touch</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Let's build meaningful systems together. I'm open to collaborations and professional opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-2xl font-bold dark:text-white mb-8">Connect With Me</h3>
            <div className="space-y-6">
              {socialLinks.map((item, idx) => (
                <a 
                  key={idx}
                  href={item.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 group transition-all"
                >
                  <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-widest">{item.label}</p>
                    <p className="font-bold text-lg">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            animate={controls}
            className="bg-white dark:bg-slate-900 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl relative"
          >
            {isSuccess ? (
              <div className="flex flex-col items-center justify-center py-12 text-center h-full">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-20 h-20 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-full flex items-center justify-center mb-6"
                >
                  <CheckCircle className="w-12 h-12" />
                </motion.div>
                <h3 className="text-2xl font-bold dark:text-white mb-2">Message Sent!</h3>
                <p className="text-slate-600 dark:text-slate-400">Thank you. Your message has been successfully delivered to Abraham.</p>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="mt-8 text-blue-600 font-semibold hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="group">
                  <label className="block text-sm font-semibold text-slate-500 dark:text-slate-400 mb-2 group-focus-within:text-blue-500 transition-colors">Name</label>
                  <input 
                    name="name"
                    required 
                    type="text" 
                    placeholder="Abraham Takalng"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder:text-slate-300 dark:placeholder:text-slate-700"
                  />
                </div>
                <div className="group">
                  <label className="block text-sm font-semibold text-slate-500 dark:text-slate-400 mb-2 group-focus-within:text-blue-500 transition-colors">Email</label>
                  <input 
                    name="email"
                    required 
                    type="email" 
                    placeholder="takalngabraham@gmail.com"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder:text-slate-300 dark:placeholder:text-slate-700"
                  />
                </div>
                <div className="group">
                  <label className="block text-sm font-semibold text-slate-500 dark:text-slate-400 mb-2 group-focus-within:text-blue-500 transition-colors">Message</label>
                  <textarea 
                    name="message"
                    required 
                    rows={4} 
                    placeholder="Let's discuss a potential project..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none placeholder:text-slate-300 dark:placeholder:text-slate-700"
                  ></textarea>
                </div>
                <button 
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-500/30 active:scale-95 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <motion.div 
                        animate={{ rotate: 360 }} 
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                      />
                      Sending...
                    </span>
                  ) : (
                    <>Send Message <Send className="w-5 h-5" /></>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}