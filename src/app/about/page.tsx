"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="min-h-screen text-gray-100 px-6 py-16 md:px-12 lg:px-24">
      <section className="max-w-3xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold mb-6 text-white"
        >
          About SteamScope
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-lg leading-relaxed text-gray-300 mb-10"
        >
          <strong>SteamScope</strong> is a web application developed by{" "}
          <span className=" font-semibold">Nightcall Studio</span> that helps
          gamers easily discover new and trending Steam titles. It provides
          real-time data on <span className="">discounted</span> and{" "}
          <span className="">free-to-play</span> games — all powered by the{" "}
          <a
            href="https://steamspy.com/api.php"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-blue-300"
          >
            SteamSpy API
          </a>
          .
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="space-y-6 text-left text-gray-300"
        >
          <div>
            <h2 className="text-2xl font-semibold mb-2 text-white">
              💡 What You Can Do
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Browse games currently on sale or available for free</li>
              <li>Sort and filter results by price, popularity, or reviews</li>
              <li>Get quick access to game stats and details</li>
              <li>Discover hidden gems based on real community data</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2 text-white">
              🧑‍💻 About Nightcall Studio
            </h2>
            <p>
              <strong>Nightcall Studio</strong> is an independent creative team
              focused on building sleek, data-driven web applications. We love
              blending <span className="">design</span>,{" "}
              <span className="">functionality</span>, and{" "}
              <span className="">technology</span> to create tools that are
              simple yet powerful.
            </p>
            <p className="mt-4">
              🔗{" "}
              <a
                href="https://github.com/nightcall-studio"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-blue-300"
              >
                Visit Nightcall Studio on GitHub
              </a>
            </p>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
