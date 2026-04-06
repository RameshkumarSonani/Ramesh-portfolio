import { useEffect, useState } from "react";

const carouselProjects = [
{
      id: 1,
      title: "Career Counseling Platform",
      desc: "AI-based career guidance platform with resume parsing.",
      img: "/Projects/careercounselingplatform1.png",
      demo: "https://yourdemo.com/career",
      github: "https://github.com/yourrepo/career",
    },
    {
      id: 2,
      title: "Portfolio Website",
      desc: "Personal portfolio built with React, Tailwind, and Django backend.",
      img: "/Projects/portfolio.png",
      demo: "https://ramesh-portfolio-chi.vercel.app/",
      github: "https://github.com/yourrepo/portfolio",
    },
    {
      id: 3,
      title: "E-Commerce Store",
      desc: "Full-stack e-commerce application with cart and payment integration.",
      img: "/Projects/2.PNG",
      demo: "https://techy-store-beta.vercel.app/",
      github: "https://github.com/RameshkumarSonani/TechyStore",
    },
];

const normalProjects = [
  {
    id: 4,
    title: "Small Project 1",
    description: "Weather App using API",
    image: "/images/project1.png",
    demo: "https://your-demo-link4.com",
    github: "https://github.com/username/project4",
  },
  {
    id: 5,
    title: "Small Project 2",
    description: "To-Do List App",
    image: "/images/project2.png",
    demo: "https://your-demo-link5.com",
    github: "https://github.com/username/project5",
  },
  {
    id: 6,
    title: "Small Project 3",
    description: "Chatbot using Python",
    image: "/images/project3.png",
    demo: "https://your-demo-link6.com",
    github: "https://github.com/username/project6",
  },
];

function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto change every 3 sec
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselProjects.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="px-6 py-10 bg-gray-100">
      {/* 🔄 Carousel Section */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-center mb-8">
          Featured Projects
        </h2>
        <div className="relative w-full max-w-3xl mx-auto h-[420px]">
          {carouselProjects.map((project, index) => (
            <div
              key={project.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                {project.img && (
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-60 object-cover"
                  />
                )}
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-gray-600 mt-2">{project.description}</p>
                  <div className="flex gap-4 mt-4">
                    <a
                      href={project.demo}
                      target="_blank"
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      className="px-4 py-2 bg-gray-800 text-white rounded-lg"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 📦 Small Projects Section
      <div>
        <h2 className="text-3xl font-bold text-center mb-8">Other Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {normalProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 object-cover"
                />
              )}
              <div className="p-4">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="text-gray-600 mt-1">{project.description}</p>
                <div className="flex gap-3 mt-3">
                  <a
                    href={project.demo}
                    target="_blank"
                    className="px-3 py-1 bg-blue-600 text-white rounded-lg text-sm"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    className="px-3 py-1 bg-gray-800 text-white rounded-lg text-sm"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
}

export default Projects;
