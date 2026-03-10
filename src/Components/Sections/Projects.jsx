import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Airbnb Clone */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">Property Listing Platform</h3>
              <p className="text-gray-400 mb-4">
                🔐 Authentication & Authorization
 • Secure login/signup/logout with Passport.js
 • Only logged-in users can manage their listings
📝 CRUD Operations
 • Users can create, update, and delete hotel listings
 • Each user manages only their own listings
 • Data validation handled with Joi
🔍 Search Functionality
 • Filter listings easily using a dynamic search bar
💬 User Reviews
 • Logged-in users can post ratings & comments
 • Builds trust and interaction across the platform ⭐
📐 MVC Architecture
 • Clean structure for easy scaling and code maintenance
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Node.js", "MongoDB", "Express.js"].map((tech, key) => (
                  <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                  View Project →
                </a>
              </div>
            </div>

            {/* Zerodha Clone */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">Mini gpt</h3>
              <p className="text-gray-400 mb-4">
                Your mini GPT project is a MERN stack-based chatbot integrated with Gemini API, featuring secure user authentication via Clerk and support for voice recognition. It also allows users to save, view, and delete chat histories, with conversations stored in MongoDB.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["MERN Stack", "JWT", "WebSockets", "Chart.js"].map((tech, key) => (
                  <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                  View Project →
                </a>
              </div>
            </div>

            {/* AI Chatbot (Python) */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">WEB Chatbot</h3>
              <p className="text-gray-400 mb-4">
                The chatbot is trained to answer user queries related to the Apple website 🍎, fetching accurate and context-aware information directly from it.
 🧠 Built using LangChain for LLM orchestration and Ollama for model execution, it delivers seamless and efficient responses — like chatting with the website itself!
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Python", "Langcchain", "ollama", "streamlit"].map((tech, key) => (
                  <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                  View Project →
                </a>
              </div>
            </div>

            {/* Weather App */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">Weather App</h3>
              <p className="text-gray-400 mb-4">
                A weather forecasting app with real-time API integration and a user-friendly interface.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "OpenWeather API", "TailwindCSS"].map((tech, key) => (
                  <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                  View Project →
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
