import React from "react";

const Education = () => {
  const educationData = [
    {
      degree: "BTech in Engineering",
      institution: "Your University Name",
      year: "202X - Present",
    },
    {
      degree: "High School Diploma",
      institution: "Your School Name",
      year: "20XX - 20XX",
    },
    {
      degree: "Intermediate Studies",
      institution: "Your College Name",
      year: "20XX - 20XX",
    },
    {
      degree: "Certifications",
      institution: "Online Platforms / Institutes",
      year: "Ongoing",
    },
  ];

  return (
    <section className="p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Education</h2>
      <ul className="space-y-4">
        {educationData.map((edu, index) => (
          <li key={index} className="p-4 bg-white rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-700">{edu.degree}</h3>
            <p className="text-gray-600">{edu.institution}</p>
            <p className="text-gray-500 text-sm">{edu.year}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Education;
