// import { RevealOnScroll } from "../RevealOnScroll";

// export const About = () => {
//   const frontendSkills = ["React", "Bootstrap", "TailwindCSS", "WordPress"];
//   const backendSkills = ["Node.js", "Python", "Express.js"];
//   const lang = ["Python", "JavaScript", "Java", "DSA (Intermediate)"];
//   const db = ["MongoDB", "MySQL"];
//   const tools = ["Git", "GitHub", "WordPress", "Microsoft Excel", "Docker"];

//   const skillStyle =
//     "bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition";

//   return (
//     <section
//       id="about"
//       className="min-h-screen flex items-center justify-center py-20"
//     >
//       <RevealOnScroll>
//         <div className="max-w-4xl mx-auto px-4">
          
//           <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
//             About Me
//           </h2>

//           <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
//             <p className="text-gray-300 mb-6 text-center">
//               Passionate developer with expertise in building scalable web
//               applications and creating innovative solutions.
//             </p>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

//               {/* Frontend */}
//               <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
//                 <h3 className="text-xl font-bold mb-4">Frontend</h3>
//                 <div className="flex flex-wrap gap-2">
//                   {frontendSkills.map((tech, key) => (
//                     <span key={key} className={skillStyle}>
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//               </div>

//               {/* Backend */}
//               <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
//                 <h3 className="text-xl font-bold mb-4">Backend</h3>
//                 <div className="flex flex-wrap gap-2">
//                   {backendSkills.map((tech, key) => (
//                     <span key={key} className={skillStyle}>
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//               </div>

//               {/* Languages */}
//               <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
//                 <h3 className="text-xl font-bold mb-4">Languages</h3>
//                 <div className="flex flex-wrap gap-2">
//                   {lang.map((tech, key) => (
//                     <span key={key} className={skillStyle}>
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//               </div>

//               {/* Database */}
//               <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
//                 <h3 className="text-xl font-bold mb-4">Database</h3>
//                 <div className="flex flex-wrap gap-2">
//                   {db.map((tech, key) => (
//                     <span key={key} className={skillStyle}>
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//               </div>

//               {/* Tools */}
//               <div className="rounded-xl p-6 hover:-translate-y-1 transition-all md:col-span-2">
//                 <h3 className="text-xl font-bold mb-4">Tools</h3>
//                 <div className="flex flex-wrap gap-2">
//                   {tools.map((tech, key) => (
//                     <span key={key} className={skillStyle}>
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//               </div>

//             </div>
//           </div>

//           {/* Education & Experience */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">

//             {/* Education */}
//             <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
//               <h3 className="text-xl font-bold mb-4">🏫 Education</h3>
//               <ul className="list-disc list-inside text-gray-300 space-y-2">
//                 <li>
//                   <strong>10<sup>th</sup></strong> – Narayana Group of Schools
//                 </li>
//                 <li>
//                   <strong>Intermediate</strong> – Vedantha Group of Institutes
//                 </li>
//                 <li>
//                   <strong>B.Tech</strong> – MVGR College of Engineering
//                 </li>
//               </ul>
//             </div>

//             {/* Work Experience */}
//             <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
//               <h3 className="text-xl font-bold mb-4">💼 Work Experience</h3>
//               <div className="text-gray-300 space-y-3">
//                 <h4 className="font-semibold">
//                   WordPress Development Intern
//                 </h4>

//                 <p className="text-sm">
//                   <strong>Gao Tech</strong> | March 2025 – June 2025
//                 </p>

//                 <p className="text-sm">
//                   Designed and customized websites using WordPress and Elementor,
//                   created responsive layouts, improved SEO and performance, integrated
//                   plugins and forms, and added custom CSS and jQuery for interactive
//                   features while collaborating with the development team.
//                 </p>
//               </div>
//             </div>

//           </div>

//         </div>
//       </RevealOnScroll>
//     </section>
//   );
// };


import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = ["React", "Bootstrap", "TailwindCSS", "WordPress"];
  const backendSkills = ["Node.js", "Python", "Express.js"];
  const lang = ["Python", "JavaScript", "Java", "DSA (Intermediate)"];
  const db = ["MongoDB", "MySQL"];
  const tools = ["Git", "GitHub", "WordPress", "Microsoft Excel", "Docker"];

  const skillStyle =
    "bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition";

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto px-4">
          
          {/* Title */}
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          {/* About Card */}
          <div className="rounded-xl p-6 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-4 text-center">
              Passionate developer with expertise in building scalable web
              applications and creating innovative solutions.
            </p>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">

              {/* Frontend */}
              <div className="rounded-xl p-4 hover:-translate-y-1 transition-all">
                <h3 className="text-lg font-bold mb-3">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span key={key} className={skillStyle}>{tech}</span>
                  ))}
                </div>
              </div>

              {/* Backend */}
              <div className="rounded-xl p-4 hover:-translate-y-1 transition-all">
                <h3 className="text-lg font-bold mb-3">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span key={key} className={skillStyle}>{tech}</span>
                  ))}
                </div>
              </div>

              {/* Languages */}
              <div className="rounded-xl p-4 hover:-translate-y-1 transition-all">
                <h3 className="text-lg font-bold mb-3">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {lang.map((tech, key) => (
                    <span key={key} className={skillStyle}>{tech}</span>
                  ))}
                </div>
              </div>

              {/* Database */}
              <div className="rounded-xl p-4 hover:-translate-y-1 transition-all">
                <h3 className="text-lg font-bold mb-3">Database</h3>
                <div className="flex flex-wrap gap-2">
                  {db.map((tech, key) => (
                    <span key={key} className={skillStyle}>{tech}</span>
                  ))}
                </div>
              </div>

              {/* Tools */}
              <div className="rounded-xl p-4 hover:-translate-y-1 transition-all md:col-span-2">
                <h3 className="text-lg font-bold mb-3">Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {tools.map((tech, key) => (
                    <span key={key} className={skillStyle}>{tech}</span>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Education & Experience */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">

            {/* Education */}
            <div className="p-4 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-lg font-bold mb-3">🏫 Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>
                  <strong>10<sup>th</sup></strong> – Narayana Group of Schools
                </li>
                <li>
                  <strong>Intermediate</strong> – Vedantha Group of Institutes
                </li>
                <li>
                  <strong>B.Tech</strong> – MVGR College of Engineering
                </li>
              </ul>
            </div>

            {/* Work Experience */}
            <div className="p-4 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-lg font-bold mb-3">💼 Work Experience</h3>

              <h4 className="font-semibold text-gray-200">
                WordPress Development Intern
              </h4>

              <p className="text-sm text-gray-400 mb-2">
                Gao Tech | March 2025 – June 2025
              </p>

              <p className="text-sm text-gray-300">
                Designed and customized websites using WordPress and Elementor,
                created responsive layouts, improved SEO and performance,
                integrated plugins and forms, and added custom CSS and jQuery
                for interactive features while collaborating with the
                development team.
              </p>

            </div>

          </div>

        </div>
      </RevealOnScroll>
    </section>
  );
};