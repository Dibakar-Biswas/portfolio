import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaCode,
  FaPalette,
  FaMobileAlt,
  FaSearch,
  FaRocket,
  FaHeadset,
  FaLaptopCode,
  FaChartLine,
  FaHeart,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoPawSharp } from "react-icons/io5";
import { GiArtificialIntelligence } from "react-icons/gi";
import { TbTruckDelivery } from "react-icons/tb";
import Header from "./Header";

function App() {
  const profileRef = useRef(null);
  const pulseRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // GSAP Pulse Animation
      const tl = gsap.timeline({ repeat: -1, yoyo: true });
      tl.to(pulseRef.current, {
        scale: 1.1,
        opacity: 0.7,
        duration: 1.5,
        ease: "power1.inOut",
      });

      // Initial entrance animation with GSAP
      gsap.from(profileRef.current, {
        x: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.2,
      });
    });

    return () => ctx.revert(); // Cleanup
  }, []);

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        type: "spring",
        stiffness: 100,
      },
    }),
  };

  const socialVariants = {
    hover: {
      scale: 1.2,
      rotate: 10,
      transition: { type: "spring", stiffness: 300 },
    },
  };

  return (
    <div className="min-h-screen bg-background-dark text-text-dark font-display overflow-hidden relative">
      {/* Background Gradient Effect */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-background-dark via-background-dark to-[#001a1f] opacity-50 -z-10"></div>

      {/* <header className="flex justify-between items-center py-6 px-4 max-w-7xl mx-auto w-full">
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-primary tracking-wide"
        >
          Dibakar Biswas
        </motion.h1>

        <nav className="hidden md:flex gap-8 items-center">
          {["Home", "About", "Services", "Portfolio", "Contact"].map(
            (item, i) => (
              <motion.a
                key={item}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={navVariants}
                whileHover={{ scale: 1.05, color: "#00eeff" }}
                className={`text-sm font-medium transition-colors cursor-pointer ${
                  item === "Home"
                    ? "text-primary border-b-2 border-primary pb-1"
                    : "text-text-dark hover:text-primary"
                }`}
                href={`#${item.toLowerCase()}`}
              >
                {item}
              </motion.a>
            )
          )}
        </nav>

        <div className="md:hidden text-primary">
          <span className="material-symbols-outlined text-3xl">menu</span>
        </div>
      </header> */}
      <Header></Header>

      <main
        id="home"
        className="flex-grow flex flex-col md:flex-row justify-between items-center px-4 max-w-7xl mx-auto mt-12 md:mt-24 w-full gap-12 mb-32"
      >
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left z-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-xl text-primary font-medium mb-2"
          >
            Hi, Myself
          </motion.p>

          <motion.h2
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.7, type: "spring", stiffness: 200 }}
            className="text-5xl md:text-7xl font-bold mb-4 text-white"
          >
            Dibakar
          </motion.h2>

          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="text-2xl md:text-4xl font-semibold mb-6 text-white"
          >
            And I'm a <span className="text-primary">Frontend Developer</span>
          </motion.h3>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.5 }}
            className="text-base text-text-secondary-dark max-w-lg mx-auto md:mx-0 mb-10 leading-relaxed"
          >
            Passionate about creating beautiful, responsive websites and
            exceptional user experiences. Specialized in modern web technologies
            including React, Node.js, and advanced CSS frameworks.
          </motion.p>

          <div className="flex justify-center md:justify-start space-x-6 mb-12">
            {[
              {
                Icon: FaFacebookF,
                link: "https://www.facebook.com/dibakar.biswas.640187/",
              },
              { Icon: FaXTwitter, link: "https://x.com/Dibakar1806" },
              {
                Icon: FaLinkedinIn,
                link: "https://www.linkedin.com/in/dibakar742/",
              },
              { Icon: FaGithub, link: "https://github.com/Dibakar-Biswas" },
            ].map(({ Icon, link }, index) => (
              <motion.a
                key={index}
                variants={socialVariants}
                whileHover="hover"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-primary text-primary hover:bg-primary hover:text-black transition-all duration-300 shadow-[0_0_10px_rgba(0,238,255,0.3)]"
                href={link}
              >
                <Icon className="text-lg" />
              </motion.a>
            ))}
          </div>

          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 20px rgba(0,238,255,0.6)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              document
                .getElementById("about")
                .scrollIntoView({ behavior: "smooth" })
            }
            className="bg-primary text-white font-bold py-3 px-8 rounded-full shadow-[0_0_15px_rgba(0,238,255,0.4)] transition-all"
          >
            READ MORE
          </motion.button>
        </div>

        {/* Image Content */}
        <div
          className="flex-1 flex justify-center md:justify-end relative"
          ref={profileRef}
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div
              ref={pulseRef}
              className="absolute inset-0 rounded-full border-2 border-primary shadow-primary-glow"
            ></div>
            <img
              alt="Portrait of Dibakar Biswas"
              className="relative w-full h-full object-cover rounded-full border-4 border-transparent p-2"
              src="https://i.ibb.co/JjQZq4Q5/dp.jpg"
            />
          </div>
        </div>
      </main>

      {/* About Section */}
      <section
        id="about"
        className="py-20 px-4 max-w-7xl mx-auto w-full relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
            About{" "}
            <span className="text-primary border-b-4 border-primary pb-2">
              Me
            </span>
          </h2>

          <div className="bg-[#0a0a0a] p-8 md:p-12 rounded-[2rem] border border-gray-800 shadow-2xl relative overflow-hidden">
            {/* Decorative background glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary opacity-5 blur-[100px] rounded-full pointer-events-none"></div>

            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Frontend Developer & UI/UX Designer
            </h3>

            <p className="text-text-secondary-dark text-lg leading-relaxed mb-6">
              With over 1 year of experience in web development, I specialize in
              creating stunning, user-friendly websites that not only look great
              but also provide exceptional user experiences. My expertise spans
              across modern JavaScript frameworks, responsive design, and
              performance optimization.
            </p>

            <p className="text-text-secondary-dark text-lg leading-relaxed mb-12">
              I believe in the power of clean code, beautiful design, and
              seamless functionality. Every project I work on is an opportunity
              to push boundaries and create something extraordinary.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12">
              <div className="flex items-center gap-2">
                <span className="text-white font-bold min-w-[100px]">
                  Name:
                </span>
                <span className="text-text-secondary-dark">Dibakar Biswas</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-white font-bold min-w-[100px]">
                  Email:
                </span>
                <span className="text-text-secondary-dark">
                  dibakarbiswas742@gmail.com
                </span>
              </div>
              {/* <div className="flex items-center gap-2">
                                <span className="text-white font-bold min-w-[100px]">Experience:</span>
                                <span className="text-text-secondary-dark">5+ Years</span>
                            </div> */}
              <div className="flex items-center gap-2">
                <span className="text-white font-bold min-w-[100px]">
                  Phone:
                </span>
                <span className="text-text-secondary-dark">+8801307232483 / +91 7980751604</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-white font-bold min-w-[100px]">
                  Location:
                </span>
                <span className="text-text-secondary-dark">Jashore, Bangladesh / Bhubaneswar, India</span>
              </div>
              {/* <div className="flex items-center gap-2">
                                <span className="text-white font-bold min-w-[100px]">Freelance:</span>
                                <span className="text-text-secondary-dark">Available</span>
                            </div> */}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-20 px-4 max-w-7xl mx-auto w-full relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
            My{" "}
            <span className="text-primary border-b-4 border-primary pb-2">
              Services
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: FaCode,
                title: "Web Development",
                desc: "Creating responsive, fast-loading websites using modern technologies like React, Vue.js, and Node.js.",
              },
              {
                icon: FaPalette,
                title: "UI/UX Design",
                desc: "Designing intuitive user interfaces and exceptional user experiences that engage and convert.",
              },
              {
                icon: FaMobileAlt,
                title: "Mobile First",
                desc: "Building mobile-first responsive designs that work flawlessly across all devices and screen sizes.",
              },
              {
                icon: FaSearch,
                title: "SEO Optimization",
                desc: "Implementing SEO best practices to improve search engine rankings and online visibility.",
              },
              {
                icon: FaRocket,
                title: "Performance",
                desc: "Optimizing website performance for lightning-fast loading times and smooth user interactions.",
              },
              {
                icon: FaHeadset,
                title: "Support",
                desc: "Providing ongoing maintenance and support to ensure your website stays updated and secure.",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10, borderColor: "#00eeff" }}
                className="bg-[#0a0a0a] p-8 rounded-2xl border border-gray-800 shadow-lg hover:shadow-[0_0_20px_rgba(0,238,255,0.15)] transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-gray-900 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                  <service.icon className="text-2xl text-primary group-hover:text-black transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-text-secondary-dark leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Portfolio Section */}
      <section
        id="portfolio"
        className="py-20 px-4 max-w-7xl mx-auto w-full relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
            My{" "}
            <span className="text-primary border-b-4 border-primary pb-2">
              Portfolio
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: IoPawSharp,
                title: "WarmPaws Pet Care",
                desc: "WarmPaws Pet Care is a modern web application designed to connect pet owners with trusted pet care service.",
                link: "https://warmpaws-pet-care-85362.web.app/",
              },
              {
                icon: GiArtificialIntelligence,
                title: "AI Model Inventory Manager",
                desc: "AI Model Inventory Manager is a modern web application designed to help users explore, manage, and keep track of AI/ML models.",
                link: "https://ai-model-inventory-manager.netlify.app/",
              },
              {
                icon: TbTruckDelivery,
                title: "ZapShift Delivery",
                desc: "ZapShift is a fast and reliable delivery service designed to get packages to their destination with lightning speed.",
                link: "https://zap-shift-delivery.netlify.app/",
              },
            ].map((project, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-[#0a0a0a] rounded-2xl overflow-hidden border border-gray-800 shadow-lg hover:shadow-[0_0_20px_rgba(0,238,255,0.15)] transition-all duration-300 group"
              >
                {/* Card Image/Icon Area */}
                <div className="h-48 bg-[#00eeff] flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  <project.icon className="text-6xl text-black" />
                </div>

                {/* Card Content */}
                <div className="p-8">
                  <h3 className="text-xl font-bold text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-text-secondary-dark mb-6 text-sm">
                    {project.desc}
                  </p>
                  <button
                    onClick={() =>
                      window.open(project.link, "_blank", "noopener,noreferrer")
                    }
                    className="px-6 py-2 rounded-full bg-[#00eeff] text-black font-bold text-sm hover:bg-white transition-colors duration-300"
                  >
                    VIEW PROJECT
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 px-4 max-w-3xl mx-auto w-full relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
            Get{" "}
            <span className="text-primary border-b-4 border-primary pb-2">
              In Touch
            </span>
          </h2>

          <div className="bg-[#0a0a0a] p-8 md:p-12 rounded-[2rem] border border-gray-800 shadow-2xl">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full bg-[#111] border border-gray-800 rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full bg-[#111] border border-gray-800 rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                  />
                </div>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full bg-[#111] border border-gray-800 rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                />
              </div>
              <div>
                <textarea
                  rows="5"
                  placeholder="Your Message"
                  className="w-full bg-[#111] border border-gray-800 rounded-lg px-4 py-3 text-white focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors resize-none"
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-primary text-black font-bold py-3 px-10 rounded-full shadow-[0_0_15px_rgba(0,238,255,0.4)] hover:shadow-[0_0_25px_rgba(0,238,255,0.6)] hover:scale-105 transition-all duration-300"
                >
                  SEND MESSAGE
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-[#050505] border-t border-gray-900 text-center relative z-10">
        <p className="text-text-secondary-dark flex items-center justify-center gap-2">
          © 2025 Dibakar Biswas. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
