'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50">
      
      {/* Hero Section */}
      <section className="flex min-h-screen flex-col items-center justify-center px-6">
        
        {/* Haupttitel mit Slide-Up Animation */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-6xl md:text-8xl font-bold text-gray-900 mb-8 text-center"
        >
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Motion.dev
          </span>
          <span className="block text-4xl md:text-5xl mt-2">🎬</span>
        </motion.h1>

        {/* Untertitel mit Delay */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="text-xl md:text-2xl text-gray-600 mb-12 text-center max-w-3xl"
        >
          Lerne Text-Animationen, Stagger-Effekte und Scroll-Animationen
          <br />
          <span className="text-lg text-gray-500 mt-2 block">
            Praktisch, Copy-Ready, Production-optimiert
          </span>
        </motion.p>

        {/* Feature Cards mit Stagger */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {[
            { title: "Text-Animationen", emoji: "✨", color: "from-purple-400 to-pink-400", desc: "Character-by-Character Reveals" },
            { title: "Stagger-Effekte", emoji: "🌊", color: "from-blue-400 to-cyan-400", desc: "Versetzte Element-Animationen" },
            { title: "Scroll-Magic", emoji: "🎢", color: "from-green-400 to-emerald-400", desc: "OnScroll getriggerte Effekte" }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className={`bg-gradient-to-r ${item.color} p-6 rounded-xl shadow-lg cursor-pointer text-white text-center min-h-[200px] flex flex-col justify-center`}
            >
              <div className="text-4xl mb-3">{item.emoji}</div>
              <h3 className="font-bold text-xl mb-2">{item.title}</h3>
              <p className="text-sm opacity-90">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Quick Start Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg"
          >
            🚀 Kurs starten
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold hover:border-gray-400"
          >
            📖 Dokumentation
          </motion.button>
        </motion.div>

        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="mt-8 flex items-center gap-2 text-sm text-gray-500"
        >
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span>Ready to use • 5 Lektionen • TypeScript • Copy-Ready</span>
        </motion.div>
      </section>

      {/* Demo Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-gray-900 mb-12"
          >
            Live Demo - Scroll-getriggerte Animation
          </motion.h2>

          <div className="space-y-8">
            {[
              "Scrolle nach unten um die Animation zu sehen",
              "Jedes Element erscheint einzeln mit perfektem Timing",
              "Optimiert für Performance und Accessibility",
              "Ready für Production!"
            ].map((text, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="bg-white p-6 rounded-lg shadow-md mx-auto max-w-2xl"
              >
                <p className="text-lg text-gray-700">{text}</p>
              </motion.div>
            ))}
          </div>

          {/* Character Animation Demo */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1, duration: 0.5 }}
            className="mt-16 p-8 bg-gradient-to-r from-gray-900 to-black rounded-xl text-white"
          >
            <h3 className="text-2xl font-bold mb-6">Character-by-Character Animation:</h3>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.05, delayChildren: 0.2 }}
              className="text-3xl font-bold"
            >
              {"Willkommen zum Motion.dev Kurs!".split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 100, damping: 12 }}
                  className="inline-block"
                  style={{ display: char === " " ? "inline" : "inline-block" }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Quick Start Instructions */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center text-gray-900 mb-12"
          >
            Sofort loslegen
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-gray-900 text-green-400 p-6 rounded-lg font-mono text-sm overflow-x-auto"
          >
            <div className="mb-2 text-gray-500"># Repository klonen und starten:</div>
            <div>git clone https://github.com/heikodietze/motion-kurs.git</div>
            <div>cd motion-kurs</div>
            <div>npm install</div>
            <div>npm run dev</div>
            <div className="mt-4 text-gray-500"># Öffne http://localhost:3000</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-8 text-center"
          >
            <p className="text-gray-600">
              In 2 Minuten setup-bereit • Alle Komponenten copy-ready • TypeScript included
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}