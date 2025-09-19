// File: pages/AboutMePage.tsx
import { Github, Linkedin, User, Code2, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export const AboutMePage = () => {
  return (
    <div className="p-8 max-w-5xl mx-auto space-y-10">
      {/* Page Header */}
      <motion.div
        className="flex items-center gap-3"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <User className="w-8 h-8 text-pink-600 animate-bounce" />
        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
          About Me
        </h1>
      </motion.div>

      {/* Introduction Card */}
      <motion.div
        className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 border border-purple-200 rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-gray-800 mb-6 text-lg leading-relaxed">
          Hii! I’m{" "}
          <strong className="text-purple-700">Sujay Kumar Mondal</strong>, a
          passionate{" "}
          <span className="text-pink-600 font-semibold">Python Developer</span>{" "}
          with expertise in building full-stack applications using Django,
          FastAPI, and React. I enjoy creating clean, scalable, and efficient
          software solutions.
        </p>
        <p className="text-gray-800 text-lg leading-relaxed">
          I have experience working on{" "}
          <span className="font-semibold text-blue-600">modern web apps</span>,
          REST APIs, authentication systems, and AI-powered chat solutions. I
          love exploring new technologies, optimizing workflows, and
          contributing to open-source projects.
        </p>
      </motion.div>

      {/* Skills / Tech Stack */}
      <motion.div
        className="bg-white border border-pink-200 rounded-2xl shadow-md p-8 hover:shadow-xl transition-all duration-300"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex items-center gap-2 mb-5">
          <Code2 className="w-6 h-6 text-purple-600" />
          <h2 className="text-2xl font-bold text-pink-600">
            Tech Stack & Skills
          </h2>
        </div>
        <div className="flex flex-wrap gap-3">
          <Badge className="bg-yellow-200 text-yellow-900 px-4 py-2 rounded-full shadow">
            Python
          </Badge>
          <Badge className="bg-green-200 text-green-900 px-4 py-2 rounded-full shadow">
            Django
          </Badge>
          <Badge className="bg-indigo-200 text-indigo-900 px-4 py-2 rounded-full shadow">
            FastAPI
          </Badge>
          <Badge className="bg-blue-200 text-blue-900 px-4 py-2 rounded-full shadow">
            React
          </Badge>
          <Badge className="bg-purple-200 text-purple-900 px-4 py-2 rounded-full shadow">
            JavaScript
          </Badge>
          <Badge className="bg-orange-200 text-orange-900 px-4 py-2 rounded-full shadow">
            MySQL
          </Badge>
          <Badge className="bg-cyan-200 text-cyan-900 px-4 py-2 rounded-full shadow">
            PostgreSQL
          </Badge>
          <Badge className="bg-pink-200 text-pink-900 px-4 py-2 rounded-full shadow">
            GROQ
          </Badge>
        </div>
      </motion.div>

      {/* Contact / Links */}
      <motion.div
        className="bg-gradient-to-r from-purple-50 via-pink-50 to-blue-50 border border-blue-200 rounded-2xl shadow-md p-8 hover:shadow-2xl transition-all duration-300"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex items-center gap-2 mb-5">
          <Zap className="w-6 h-6 text-blue-600" />
          <h2 className="text-2xl font-bold text-blue-600">Connect with Me</h2>
        </div>
        <p className="text-gray-700 mb-5 text-lg">
          I’m always open to{" "}
          <span className="font-semibold text-purple-600">
            networking, collaboration
          </span>
          , and exciting projects. You can find me on:
        </p>
        <div className="flex gap-6">
          <a
            href="https://github.com/SujayKumarMondal"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-700 hover:text-pink-600 transition-colors text-lg font-medium"
          >
            <Github className="w-6 h-6" />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/sujay-kumar-mondal-a125481b7/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors text-lg font-medium"
          >
            <Linkedin className="w-6 h-6" />
            LinkedIn
          </a>
        </div>
      </motion.div>
    </div>
  );
};
