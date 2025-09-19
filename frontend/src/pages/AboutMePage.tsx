// File: pages/AboutMePage.tsx
import { Github, Linkedin, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const AboutMePage = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      {/* Page Header */}
      <div className="flex items-center gap-3">
        <User className="w-6 h-6 text-primary animate-bounce" />
        <h1 className="text-3xl font-bold text-white">About Me</h1>
      </div>

      {/* Introduction Card */}
      <div className="text-3xl font-bold text-white">
        <p className="text-gray-700 mb-4">
          Hii! I’m <strong>Sujay Kumar Mondal</strong>, a passionate Python developer with expertise in building full-stack applications using Django, FastAPI, and React. I enjoy creating clean, scalable, and efficient software solutions.
        </p>
        <p className="text-gray-700">
          I have experience working on modern web applications, REST APIs, authentication systems, and AI-powered chat solutions. I love exploring new technologies, optimizing workflows, and contributing to open-source projects.
        </p>
      </div>

      {/* Skills / Tech Stack */}
      <div className="text-3xl font-bold text-white">
        <h2 className="text-xl font-semibold mb-3">Tech Stack & Skills</h2>
        <div className="flex flex-wrap gap-3">
          <Badge variant="outline" className="hover:bg-primary/10 transition-colors duration-200 cursor-pointer">Python</Badge>
          <Badge variant="outline" className="hover:bg-primary/10 transition-colors duration-200 cursor-pointer">Django</Badge>
          <Badge variant="outline" className="hover:bg-primary/10 transition-colors duration-200 cursor-pointer">FastAPI</Badge>
          <Badge variant="outline" className="hover:bg-primary/10 transition-colors duration-200 cursor-pointer">React</Badge>
          <Badge variant="outline" className="hover:bg-primary/10 transition-colors duration-200 cursor-pointer">JavaScript</Badge>
          <Badge variant="outline" className="hover:bg-primary/10 transition-colors duration-200 cursor-pointer">MySQL</Badge>
          <Badge variant="outline" className="hover:bg-primary/10 transition-colors duration-200 cursor-pointer">PostgreSQL</Badge>
          <Badge variant="outline" className="hover:bg-primary/10 transition-colors duration-200 cursor-pointer">GROQ</Badge>
        </div>
      </div>

      {/* Contact / Links */}
      <div className="text-3xl font-bold text-white">
        <h2 className="text-xl font-semibold mb-3">Connect with me</h2>
        <p className="text-gray-700 mb-3">
          I’m always open to networking, collaboration, and exciting projects. You can find me on:
        </p>
        <div className="flex gap-4">
          <a
            href="https://github.com/SujayKumarMondal"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-700 hover:text-blue-700 transition-colors"
          >
            <Github className="w-5 h-5" />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/sujay-kumar-mondal-a125481b7/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-700 hover:text-blue-700 transition-colors"
          >
            <Linkedin className="w-5 h-5" />
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};
