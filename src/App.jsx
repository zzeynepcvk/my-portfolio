import React, { useState, useEffect } from 'react';
import { ArrowRight, Github, Linkedin, Mail, Heart, Star, Sparkles, Camera, Code2, Palette, Zap, Menu, X } from 'lucide-react';

const Portfolio = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [introComplete, setIntroComplete] = useState(false);
  const [currentSection, setCurrentSection] = useState('home');
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [count, setCount] = useState(0);


  useEffect(() => {
    const timer = setTimeout(() => {
      setIntroComplete(true);
    }, 3000);

    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleEnterPortfolio = () => {
    setShowIntro(false);
  };

  const scrollToSection = (section) => {
    setCurrentSection(section);
    setIsMobileMenuOpen(false);
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  };

  const projects = [
    {
      title: "LanguaZ  ",
      description: "Website that helps users learn the names of everyday objects in different languages",
      image: "📷",
      color: "from-pink-400 to-rose-400",
      repoUrl :"https://github.com/zzeynepcvk/LanguaZ"
    },
    {
      title: "GoldenAura",
      description: "Full-stack product listing app that dynamically updates prices based on real-time gold data using React and Express",
      image: "💰",
      color: "from-rose-400 to-pink-500",
      repoUrl: "https://github.com/zzeynepcvk/GoldTask"
    },
    {
      title: "MuseumArt",
      description: "A Flask-based web application that identifies artworks in images uploaded or captured with a camera using a YOLO model, provides detailed information, and suggests similar artworks",
      image: "🖼️",
      color: "from-pink-500 to-fuchsia-500",
      repoUrl: "https://github.com/zzeynepcvk/MuseumArt"
    },
    {
      title: "tasklyz",
      description: "A basic todo list web application built using React.",
      image: "⏰",
      color: "from-pink-500 to-fuchsia-500",
      repoUrl: "https://github.com/zzeynepcvk/tasklyz"
    },
    {
      title: "MealAPI",
      description: "A simple React app that fetches and displays British meals from the MealDB API with a dynamic 'show more' feature.",
      image: "🍔",
      color: "from-pink-500 to-fuchsia-500",
      repoUrl: "https://github.com/zzeynepcvk/react"
    },
    {
      title: "Rick and Morty API",
      description: "A React-based dashboard that fetches, filters, and displays characters from the Rick and Morty API with customizable pagination and detail views.",
      image: "🧙🏼‍♂️",
      color: "from-pink-500 to-fuchsia-500",
      repoUrl: "https://github.com/zzeynepcvk/rickandmortyapi-trial"
    }
  ];

  const skills = [
    { name: "Web Development", level: 90, icon: Code2, color: "text-pink-500" },
    { name: "Artificial Intelligence", level: 80, icon: Zap, color: "text-violet-500" },
    { name: "Teaching & Mentoring", level: 95, icon: Sparkles, color: "text-rose-500" }
  ];
  

  if (showIntro) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-100 flex items-center justify-center relative overflow-hidden">
        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            >
              {i % 3 === 0 ? (
                <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-pink-300 opacity-150" />
              ) : i % 3 === 1 ? (
                <Star className="w-2 h-2 sm:w-3 sm:h-3 text-rose-300 opacity-150" />
              ) : (
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-fuchsia-300 opacity-150" />
              )}
            </div>
          ))}
        </div>

        {/* Mouse Follower - Hidden on mobile */}
        <div
          className="fixed w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-r from-pink-200/30 to-rose-200/30 rounded-full blur-3xl pointer-events-none z-10 transition-all duration-300 hidden sm:block"
          style={{
            left: mousePos.x - 128,
            top: mousePos.y - 192,
          }}
        />

        {/* Main Content */}
        <div className="text-center z-20 relative px-4 max-w-4xl mx-auto">
          {/* Profile Photo */}
          <div className={`mb-6 sm:mb-8 transition-all duration-2000 ${introComplete ? 'scale-100 opacity-100' : 'scale-150 opacity-0'}`}>
            <div className="relative mx-auto w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 group">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full animate-spin-slow"></div>
              <div className="absolute inset-2 bg-gradient-to-r from-rose-300 to-pink-300 rounded-full animate-pulse"></div>
              <div className="absolute inset-4 bg-white rounded-full flex items-center justify-center shadow-2xl group-hover:scale-105 transition-transform duration-500">
                <img src="/profile.jpeg" className=' rounded-full'/>
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-pink-100/50 to-transparent"></div>
              </div>

              {/* Sparkle effects around photo */}
              <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2">
                <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-pink-400 animate-bounce" style={{ animationDelay: '0.5s' }} />
              </div>
              <div className="absolute -bottom-1 -left-1 sm:-bottom-2 sm:-left-2">
                <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-rose-400 animate-bounce" style={{ animationDelay: '1s' }} />
              </div>
              <div className="absolute top-3 -left-3 sm:top-4 sm:-left-4">
                <Star className="w-4 h-4 sm:w-5 sm:h-5 text-fuchsia-400 animate-bounce" style={{ animationDelay: '1.5s' }} />
              </div>
            </div>
          </div>

          {/* Welcome Text */}
          <div className={`space-y-4 sm:space-y-6 transition-all duration-1500 delay-500 ${introComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-pink-500 via-rose-500 to-fuchsia-500 bg-clip-text text-transparent animate-shimmer">
              Welcome
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 font-light">
            ✨ to my creative world ✨
            </p>
            <div className="text-base sm:text-lg text-gray-500 max-w-lg mx-auto leading-relaxed">
            "I truly enjoy learning new things and turning what I’ve learned into creative projects."


            </div>
          </div>

          {/* Enter Button */}
          {introComplete && (
            <div className="mt-8 sm:mt-12 animate-fade-in-up">
              <button
                onClick={handleEnterPortfolio}
                className="group bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 sm:px-12 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-pink-300/50 flex items-center space-x-3 mx-auto"
              >
                <span>Enter Portfolio</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          )}
        </div>

        <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(180deg); }
          }
          @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes shimmer {
            0% { background-position: -200% center; }
            100% { background-position: 200% center; }
          }
          @keyframes fade-in-up {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-float { animation: float 4s ease-in-out infinite; }
          .animate-spin-slow { animation: spin-slow 8s linear infinite; }
          .animate-shimmer { 
            background-size: 200% auto;
            animation: shimmer 3s linear infinite;
          }
          .animate-fade-in-up { animation: fade-in-up 0.8s ease-out; }
        `}</style>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-white text-gray-800">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-10 sm:top-20 sm:left-20 w-48 h-48 sm:w-72 sm:h-72 bg-pink-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 sm:bottom-20 sm:right-20 w-64 h-64 sm:w-96 sm:h-96 bg-rose-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div
          className="absolute w-32 h-32 sm:w-64 sm:h-64 bg-gradient-to-r from-pink-300/20 to-rose-300/20 rounded-full blur-2xl transition-all duration-700 hidden sm:block"
          style={{
            left: mousePos.x - 64,
            top: mousePos.y - 128,
          }}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-pink-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="flex justify-between items-center py-3 sm:py-4">
            <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
              ✨ zzeynepcvk ✨
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6 lg:space-x-8">
              {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`hover:text-pink-500 transition-all duration-300 relative text-sm lg:text-base ${currentSection === item.toLowerCase() ? 'text-pink-500' : 'text-gray-600'
                    }`}
                >
                  {item}
                  {currentSection === item.toLowerCase() && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full"></div>
                  )}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-pink-500 transition-colors duration-300"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden pb-4 border-t border-pink-100 pt-4">
              <div className="flex flex-col space-y-3">
                {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`text-left py-2 px-3 rounded-lg transition-all duration-300 ${currentSection === item.toLowerCase()
                      ? 'text-pink-500 bg-pink-50'
                      : 'text-gray-600 hover:text-pink-500 hover:bg-pink-50'
                      }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <div className="mb-8 sm:mb-12">
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto mb-6 sm:mb-8 group">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full animate-pulse"></div>
              <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center shadow-xl group-hover:scale-105 transition-transform duration-500">
                <img src="/profile-s.jpg" className=' rounded-full '/>
              </div>

            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-pink-600 via-rose-500 to-fuchsia-600 bg-clip-text text-transparent">
            Zeynep Çevik
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-6 sm:mb-8 font-light">
             Software Engineer & Tutor  👩🏻‍💻
          </p>
          <p className="text-base sm:text-lg text-gray-500 max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed">
           As a software developer and educator, I specialize in web development and AI — turning ideas into practical, smart, and engaging digital solutions.


          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
            <a href="#projects">
            <button className="w-full sm:w-auto bg-gradient-to-r from-pink-500 to-rose-500 text-white px-6 sm:px-8 py-3 rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-pink-300/50">
              View My Work
            </button>
            </a>
            <a href="/ZeynepÇevikResume.pdf" target="_blank" rel="noopener noreferrer">
            <button className="w-full sm:w-auto border-2 border-pink-300 text-pink-600 px-6 sm:px-8 py-3 rounded-full hover:bg-pink-50 hover:scale-105 transition-all duration-300">
              Download CV
            </button>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-20 bg-gradient-to-r from-pink-50 to-rose-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16 bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
            About Me 💕
          </h2>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 order-2 lg:order-1">
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              Hi there! I’m Zeynep, a software developer and educator specializing in web development and artificial intelligence. I enjoy creating user-focused, intelligent digital solutions that combine clean code with thoughtful design.
              </p>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              With experience in both building and teaching software, I’m passionate about making technology more accessible, useful, and inspiring. When I’m not coding or mentoring, you’ll probably find me exploring new AI tools or designing interfaces that bring ideas to life.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
                {skills.map((skill, index) => (
                  <div key={index} className="text-center group">
                    <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                      <skill.icon className={`w-6 h-6 sm:w-8 sm:h-8 ${skill.color} mx-auto mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300`} />
                      <h3 className="font-semibold text-gray-800 mb-2 text-sm sm:text-base">{skill.name}</h3>
                      <div className="w-full bg-pink-100 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-pink-400 to-rose-400 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-500 mt-1">{skill.level}%</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative order-1 lg:order-2">
              <div className="bg-gradient-to-r from-pink-200 to-rose-200 rounded-3xl p-6 sm:p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="bg-white rounded-2xl p-6 sm:p-8 transform -rotate-3">
                  <img src="/profile.jpeg" alt="zeynep3" />
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 sm:mb-16 bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
            Featured Projects 🌟
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 relative overflow-hidden"
              >
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${project.color}`}></div>
                <div className="text-4xl sm:text-5xl lg:text-6xl mb-4 text-center group-hover:scale-110 transition-transform duration-300">
                  {project.image}
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-3 text-gray-800 group-hover:text-pink-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-sm sm:text-base">
                  {project.description}
                </p>
                <a
            href={project.repoUrl} 
            target="_blank"        
            rel="noopener noreferrer" 
            className={`w-full block text-center py-3 rounded-xl bg-gradient-to-r ${project.color} text-white font-semibold hover:scale-105 transition-transform duration-300 shadow-lg text-sm sm:text-base`}
          >
            View Project
          </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-20 bg-gradient-to-r from-pink-50 to-rose-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
            Let's Create Together 💙
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed">
            I'm always excited about new projects and collaborations. <br />
            Let's bring your ideas to life!
          </p>
          <div className="flex justify-center gap-4 sm:gap-6 mb-8 sm:mb-12">
  {/* GitHub */}
  <a
    href="https://github.com/zzeynepcvk"
    target="_blank"
    rel="noopener noreferrer"
    className="group bg-white p-4 sm:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
  >
    <Github className="w-6 h-6 sm:w-8 sm:h-8 text-pink-500 group-hover:text-pink-600 transition-colors duration-300" />
  </a>

  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/in/zeynepcevik21/"
    target="_blank"
    rel="noopener noreferrer"
    className="group bg-white p-4 sm:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
  >
    <Linkedin className="w-6 h-6 sm:w-8 sm:h-8 text-pink-500 group-hover:text-pink-600 transition-colors duration-300" />
  </a>

  {/* Mail */}
  <a
    href="mailto:zeynepcvk21@gmail.com"
    className="group bg-white p-4 sm:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
  >
    <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-pink-500 group-hover:text-pink-600 transition-colors duration-300" />
  </a>
</div>

<button
      onClick={() => setCount(count + 1)}
      className="bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 sm:px-12 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-pink-300/50"
    >
      Say Hello! 👋
    </button>

    

      {/* Footer */}
      <footer className="py-6 sm:py-8 border-t border-pink-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl text-center">
          <p className="text-gray-500 text-sm sm:text-base">Made with 💕 and lots of pink by Zeynep Çevik</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;