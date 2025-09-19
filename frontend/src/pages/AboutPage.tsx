import React from "react";
import { Bot } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const AboutPage = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Page Header */}
      <div className="flex items-center mb-6 gap-3">
        <Bot className="w-6 h-6 text-primary" />
        <h1 className="text-3xl font-bold">About ChatPaat</h1>
      </div>

      {/* Introduction Card */}
      <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
        <p className="text-gray-700 mb-4">
          <strong>ChatPaat</strong> is a next-generation AI-powered chatbot
          designed to make your interactions smarter, faster, and more engaging. 
          Built with a <Badge variant="secondary">Django</Badge> backend and a <Badge variant="secondary">React</Badge> frontend,
          ChatPaat leverages the power of <Badge variant="secondary">GROQ</Badge> to deliver highly accurate, context-aware responses.
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li><strong>Ask anything:</strong> From casual conversation to technical questions, ChatPaat understands and responds intelligently.</li>
          <li><strong>Speed & Reliability:</strong> Django backend ensures efficient processing; React frontend keeps the interface smooth and interactive.</li>
          <li><strong>GROQ-powered Intelligence:</strong> Understands complex queries, context, and delivers meaningful answers.</li>
          <li><strong>Organized Conversations:</strong> Access recent chats, yesterday’s chats, and weekly summaries in a clean sidebar interface.</li>
        </ul>
      </div>

      {/* Why ChatPaat Section */}
      <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
        <h2 className="text-xl font-semibold mb-3">Why ChatPaat?</h2>
        <p className="text-gray-700 mb-3">
          ChatPaat isn’t just a chatbot—it’s your <strong>digital companion</strong>, capable of learning from interactions and adapting to provide more relevant responses over time.
        </p>
        <p className="text-gray-700">
          Whether you’re exploring AI, looking for productivity assistance, or just having fun, ChatPaat is your go-to chat solution.
        </p>
      </div>

      {/* Tech Stack */}
      <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
        <h2 className="text-xl font-semibold mb-3">Tech Stack</h2>
        <ul className="flex gap-4">
          <li>
            <Badge variant="outline">Django</Badge>
          </li>
          <li>
            <Badge variant="outline">React</Badge>
          </li>
          <li>
            <Badge variant="outline">GROQ (Graph-Relational Object Queries)</Badge>
          </li>
        </ul>
      </div>
    </div>
  );
};
