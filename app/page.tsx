"use client"

import { SmileyFace } from "@/components/smiley-face"
import { HandDrawnBorder } from "@/components/hand-drawn-border"
import { CustomIcon } from "@/components/custom-icons"
import { HandDrawnSmiley } from "@/components/hand-drawn-smiley"
import { Instagram, Phone, Cloud, Database, Brain, Github } from "lucide-react"
import { CornerDoodle } from "@/components/corner-doodle"
import { Doodle } from "@/components/doodle"
import { ContactForm } from "@/components/contact-form"
import { HandDrawnArrow } from "@/components/hand-drawn-arrow"
import { HeaderIcons } from "@/components/header-icons"
import { PortfolioCard } from "@/components/portfolio-card"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFF8E7] dark:bg-[#121212] text-black dark:text-white">
      {/* Navigation */}
      <nav className="border-[3px] border-black dark:border-white mx-auto mt-4 max-w-3xl">
        <div className="flex items-center justify-center flex-wrap">
          <div className="flex items-center p-4 border-r-[3px] border-black dark:border-white">
            <CustomIcon type="star" color="black" className="mr-2" />
            <span className="font-bold text-xl" style={{ fontFamily: "Courier New, monospace", fontWeight: 700 }}>
              kuoki
            </span>
          </div>
          <a
            href="#about"
            className="p-4 border-r-[3px] border-t-[3px] border-b-[3px] border-black dark:border-white bg-[#90E9FF] font-bold transition-all duration-300 hover:bg-[#61bcff] hover:translate-y-[-2px]"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
            }}
          >
            About
          </a>
          <a
            href="#portfolio"
            className="p-4 border-r-[3px] border-t-[3px] border-b-[3px] border-black dark:border-white font-bold bg-[#FFC900] transition-all duration-300 hover:bg-[#e5c141] hover:translate-y-[-2px]"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })
            }}
          >
            Portfolio
          </a>
          <a
            href="#contact"
            className="p-4 bg-[#FF90E8] font-bold border-r-[3px] border-t-[3px] border-b-[3px] border-black dark:border-white transition-all duration-300 hover:bg-[#f072cd] hover:translate-y-[-2px]"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }}
          >
            Hire Me
          </a>
          <div className="p-4 flex items-center justify-between w-40">
            <HeaderIcons />
          </div>
        </div>
      </nav>

      {/* Social Links */}
      <div className="flex justify-center mt-4 space-x-4 flex-wrap px-4">
        <a
          href="https://instagram.com/_kuoki/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center neu-button px-3 py-2 bg-[#FF90E8] m-1"
        >
          <Instagram className="w-4 h-4 mr-2" />
          <span className="text-sm">_kuoki</span>
        </a>
        <a href="tel:+917318876896" className="flex items-center neu-button px-3 py-2 bg-[#90E9FF] m-1">
          <Phone className="w-4 h-4 mr-2" />
          <span className="text-sm">+91 7318876896</span>
        </a>
        <a
          href="https://github.com/kuokiii"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center neu-button px-3 py-2 bg-[#FFC900] m-1"
        >
          <Github className="w-4 h-4 mr-2" />
          <span className="text-sm">kuokiii</span>
        </a>
      </div>

      {/* Hero Section */}
      <section id="about" className="relative px-6 py-16 max-w-6xl mx-auto">
        {/* Decorative elements at the borders */}
        <Doodle type="star" color="#FF90E8" className="absolute top-5 right-5" />
        <Doodle type="circle" color="#90E9FF" className="absolute bottom-5 left-5" />

        {/* Nirupam with arrow - positioned away from header */}
        <div className="absolute top-[20px] left-[80px] z-10">
          <div className="relative flex items-start">
            <div className="flex items-center">
              <span className="handwritten-name">Nirupam</span>
            </div>
            <HandDrawnArrow className="absolute top-[15px] left-[120px]" />
          </div>
        </div>

        <div className="relative mx-auto max-w-xl">
          <HandDrawnBorder className="p-8 bg-gray-200">
            <div className="absolute top-[-20px] left-[-20px] z-10">
              <div className="w-12 h-12 rounded-full bg-[#FFC900] flex items-center justify-center border-2 border-black">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M9.66347 17H14.3365M12 3V4M18.364 5.63604L17.6569 6.34315M21 12H20M4 12H3M6.34309 6.34315L5.63599 5.63604M12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18Z"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            <div className="absolute bottom-[-15px] right-[-15px] z-10">
              <CustomIcon type="burst" color="#FF5757" />
            </div>

            <div className="flex flex-col items-center justify-center min-h-[200px]">
              <HandDrawnSmiley className="w-24 h-24" />
            </div>
          </HandDrawnBorder>
        </div>

        <div className="max-w-2xl mt-16 relative">
          <CornerDoodle position="top-left" type="star" color="#FF90E8" />
          <CornerDoodle position="bottom-right" type="circle" color="#90E9FF" />

          <h1 className="text-4xl md:text-5xl font-bold mb-4 relative">
            I design and develop <span className="pink-highlight">top</span> notch{" "}
            <span className="yellow-highlight">softwares</span> and <span className="blue-highlight">web apps</span>
          </h1>
          <p className="text-lg mb-6">
            Hi, I'm Nirupam Thapa, a <span className="blue-highlight">passionate</span> Full Stack Developer
            specializing in creating <span className="pink-highlight">beautiful</span>,{" "}
            <span className="yellow-highlight">functional</span> websites that drive{" "}
            <span className="green-highlight">results</span>. I also work with{" "}
            <span className="purple-highlight">machine learning</span> models,
            <span className="yellow-highlight">DevOps</span> solutions, and{" "}
            <span className="pink-highlight">data engineering</span> pipelines.
          </p>

          <div className="mt-8 flex items-center flex-wrap">
            <a
              href="#contact"
              className="neu-button bg-[#FFC900] dark:bg-[#FFC900] dark:text-black px-6 py-2 rounded-full text-sm font-medium m-2 transition-all duration-300 hover:bg-[#e5c141]"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Get in touch
            </a>
            <SmileyFace className="m-2" />
            <Doodle type="squiggle" color="black" className="m-2" />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="px-6 py-12 max-w-6xl mx-auto relative">
        <Doodle type="star" color="#FF5757" className="absolute top-5 right-5" />
        <Doodle type="circle" color="#c5a1ff" className="absolute bottom-5 left-5" />

        <div className="neu-border p-6 rounded-lg mb-8 bg-white dark:bg-[#1A1A1A]">
          <div className="flex items-center mb-4">
            <h2 className="text-xl font-bold">
              My <span className="yellow-highlight">Skills</span> & <span className="blue-highlight">Technologies</span>
            </h2>
            <div className="ml-2 bg-[#FF90E8] p-1 rotate-12">
              <CustomIcon type="sun" color="#FF90E8" />
            </div>
            <Doodle type="star" color="#FFC900" className="ml-2" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="neu-border p-4 rounded-lg bg-[#FF90E8] dark:bg-[#FF90E8] dark:text-black">
              <h3 className="font-bold mb-2">Frontend</h3>
              <ul className="space-y-1 text-sm">
                <li>• React & Next.js</li>
                <li>• TypeScript</li>
                <li>• Tailwind CSS</li>
                <li>• HTML5 & CSS3</li>
                <li>• JavaScript</li>
              </ul>
            </div>

            <div className="neu-border p-4 rounded-lg bg-[#90E9FF] dark:bg-[#90E9FF] dark:text-black">
              <h3 className="font-bold mb-2">Backend</h3>
              <ul className="space-y-1 text-sm">
                <li>• Node.js</li>
                <li>• Python</li>
                <li>• Express</li>
                <li>• MongoDB</li>
                <li>• PostgreSQL</li>
              </ul>
            </div>

            <div className="neu-border p-4 rounded-lg bg-[#FFC900] dark:bg-[#FFC900] dark:text-black">
              <h3 className="font-bold mb-2">Design & Tools</h3>
              <ul className="space-y-1 text-sm">
                <li>• Figma</li>
                <li>• Webflow</li>
                <li>• Git & GitHub</li>
                <li>• Vercel</li>
                <li>• Adobe Creative Suite</li>
              </ul>
            </div>

            <div className="neu-border p-4 rounded-lg bg-[#c5a1ff] dark:bg-[#c5a1ff] dark:text-black">
              <div className="flex items-center mb-2">
                <h3 className="font-bold">DevOps</h3>
                <Cloud className="ml-2 w-4 h-4" />
              </div>
              <ul className="space-y-1 text-sm">
                <li>• Docker & Kubernetes</li>
                <li>• CI/CD Pipelines</li>
                <li>• AWS & GCP</li>
                <li>• Terraform</li>
                <li>• Monitoring & Logging</li>
              </ul>
            </div>

            <div className="neu-border p-4 rounded-lg bg-[#FF5757] dark:bg-[#FF5757] dark:text-black">
              <div className="flex items-center mb-2">
                <h3 className="font-bold">Data Engineering</h3>
                <Database className="ml-2 w-4 h-4" />
              </div>
              <ul className="space-y-1 text-sm">
                <li>• ETL Pipelines</li>
                <li>• Apache Spark</li>
                <li>• Kafka</li>
                <li>• Data Warehousing</li>
                <li>• SQL & NoSQL</li>
              </ul>
            </div>

            <div className="neu-border p-4 rounded-lg bg-[#7cf072] dark:bg-[#7cf072] dark:text-black">
              <div className="flex items-center mb-2">
                <h3 className="font-bold">Machine Learning</h3>
                <Brain className="ml-2 w-4 h-4" />
              </div>
              <ul className="space-y-1 text-sm">
                <li>• TensorFlow & PyTorch</li>
                <li>• Natural Language Processing</li>
                <li>• Computer Vision</li>
                <li>• Predictive Analytics</li>
                <li>• Model Deployment</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="px-6 py-12 max-w-6xl mx-auto relative">
        <Doodle type="squiggle" color="#FF90E8" className="absolute -top-5 left-20" />
        <Doodle type="star" color="#FFC900" className="absolute -bottom-5 right-20" />

        <div className="service-grid">
          <div className="service-item">
            <div className="mb-4">
              <div className="w-12 h-12 rounded-full bg-[#FFC900] flex items-center justify-center mb-4">
                <CustomIcon type="star" color="black" />
              </div>
              <h3 className="text-xl font-bold">
                User <span className="yellow-highlight">Research</span>
              </h3>
            </div>
            <p className="text-sm mb-6">Understanding your users' needs through comprehensive research and analysis</p>
            <a href="#" className="font-bold">
              Learn more
            </a>
          </div>

          <div className="service-item">
            <div className="mb-4">
              <div className="w-12 h-12 rounded-full bg-[#c5a1ff] flex items-center justify-center mb-4">
                <CustomIcon type="hashtag" color="black" />
              </div>
              <h3 className="text-xl font-bold">
                Wire<span className="purple-highlight">framing</span>
              </h3>
            </div>
            <p className="text-sm mb-6">Creating intuitive layouts and user flows that enhance the user experience</p>
            <a href="#" className="font-bold">
              Learn more
            </a>
          </div>

          <div className="service-item">
            <div className="mb-4">
              <div className="w-12 h-12 rounded-full bg-[#FF5757] flex items-center justify-center mb-4">
                <CustomIcon type="heart" color="black" />
              </div>
              <h3 className="text-xl font-bold">
                UI <span className="pink-highlight">Designing</span>
              </h3>
            </div>
            <p className="text-sm mb-6">Crafting beautiful, responsive interfaces that captivate and engage users</p>
            <a href="#" className="font-bold">
              Learn more
            </a>
          </div>

          <div className="service-item">
            <div className="mb-4">
              <div className="w-12 h-12 rounded-full bg-[#90E9FF] flex items-center justify-center mb-4">
                <CustomIcon type="star" color="black" />
              </div>
              <h3 className="text-xl font-bold">
                Proto<span className="blue-highlight">typing</span>
              </h3>
            </div>
            <p className="text-sm mb-6">Building interactive prototypes to test and refine the user experience</p>
            <a href="#" className="font-bold">
              Learn more
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-6 py-12 max-w-6xl mx-auto relative">
        <Doodle type="circle" color="#FF90E8" className="absolute top-10 left-10" />
        <Doodle type="star" color="#7cf072" className="absolute bottom-10 right-10" />

        <div className="neu-border p-6 rounded-lg mb-8 bg-white dark:bg-[#1A1A1A]">
          <div className="flex items-center mb-6">
            <h2 className="text-xl font-bold">
              Services we're <span className="green-highlight">providing</span>
            </h2>
            <Doodle type="circle" color="#FF90E8" className="ml-2" />
          </div>
          <div className="stats-grid">
            <div className="neu-border p-4 rounded-lg bg-[#FF90E8] dark:bg-[#FF90E8] dark:text-black text-center">
              <h3 className="text-3xl font-bold mb-2">20+</h3>
              <p className="text-sm">Projects</p>
              <Doodle type="star" color="#FF5757" className="mx-auto mt-2" />
            </div>

            <div className="neu-border p-4 rounded-lg bg-[#FFC900] dark:bg-[#FFC900] dark:text-black text-center">
              <h3 className="text-3xl font-bold mb-2">100%</h3>
              <p className="text-sm">Client Satisfaction</p>
              <Doodle type="heart" color="#FF5757" className="mx-auto mt-2" />
            </div>

            <div className="neu-border p-4 rounded-lg bg-[#90E9FF] dark:bg-[#90E9FF] dark:text-black text-center">
              <h3 className="text-3xl font-bold mb-2">500+</h3>
              <p className="text-sm">Working Hours</p>
              <Doodle type="circle" color="#c5a1ff" className="mx-auto mt-2" />
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="px-6 py-12 max-w-6xl mx-auto relative">
        <Doodle type="star" color="#FF90E8" className="absolute top-5 left-5" />
        <Doodle type="circle" color="#FFC900" className="absolute bottom-5 right-5" />

        <div className="flex items-center mb-8 relative z-10">
          <h2 className="text-3xl font-bold">
            My <span className="blue-highlight">Portfolio</span>
          </h2>
          <div className="ml-4 bg-[#90E9FF] p-1 rotate-12">
            <CustomIcon type="sun" color="#90E9FF" />
          </div>
          <Doodle type="squiggle" color="black" className="ml-2" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
          {/* Miso */}
          <PortfolioCard
            title="Miso"
            description="Miso is a modern, AI-powered virtual assistant with voice recognition, smart home controls, and real-time responses. Built with Next.js 14, Tailwind CSS, and shadcn/ui, it offers a sleek, responsive UI with dark mode support."
            imageSrc="/images/miso.png"
            appLink="https://miso-ai.vercel.app/"
            githubLink="https://github.com/kuokiii/Hackathon_24BTRAD031-Miso-Virtual-Assistant"
            color="#FF90E8"
            doodleType="star"
            doodlePosition="top-left"
            doodleColor="#FFC900"
          />

          {/* Thermal Simulator Pro */}
          <PortfolioCard
            title="Thermal Simulator Pro"
            description="ThermalSim Pro: Advanced Heat Exchanger Simulation Tool. Features include simulating various heat exchanger types, extensive working fluid database with accurate thermodynamic properties, and real-time 3D visualization of heat transfer and fluid flow."
            imageSrc="/images/thermal-sim.png"
            appLink="https://qspo3dixvugxcm5f.vercel.app/"
            githubLink="https://github.com/kuokiii/Thermal-Simulator-Pro"
            color="#FFC900"
            doodleType="burst"
            doodlePosition="top-right"
            doodleColor="#FF5757"
          />

          {/* JokeGenius AI */}
          <PortfolioCard
            title="JokeGenius AI"
            description="JokeGenius AI is an interactive web application that leverages artificial intelligence to generate clean, family-friendly jokes across multiple categories. The application features a modern, responsive UI with smooth animations powered by Framer Motion, and a dual-theme system."
            imageSrc="/images/joke-genius.png"
            appLink="https://joke-generator-ai-ja.vercel.app/"
            githubLink="https://github.com/kuokiii/JokeGenius-AI"
            color="#90E9FF"
            doodleType="circle"
            doodlePosition="bottom-left"
            doodleColor="#c5a1ff"
          />

          {/* GreenBox */}
          <PortfolioCard
            title="GreenBox"
            description="GreenBox is an innovative web app that provides sustainable, biodegradable, and eco-friendly packaging solutions for e-commerce businesses. It offers energy-efficient, fully recyclable, and durable packaging options that help reduce the carbon footprint while protecting products effectively."
            imageSrc="/images/greenbox.png"
            appLink="https://green-box-v1.vercel.app/"
            color="#c5a1ff"
            doodleType="squiggle"
            doodlePosition="bottom-right"
            doodleColor="#FF90E8"
          />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-6 py-12 max-w-6xl mx-auto relative">
        <Doodle type="star" color="#FF90E8" className="absolute top-5 left-10" />
        <Doodle type="circle" color="#FFC900" className="absolute bottom-5 right-10" />
        <Doodle type="squiggle" color="#90E9FF" className="absolute top-20 right-20" />

        <div className="neu-border p-8 rounded-lg text-center relative bg-[#FFF8E7] dark:bg-[#1A1A1A]">
          <CornerDoodle position="top-right" type="star" color="#c5a1ff" />
          <CornerDoodle position="bottom-left" type="star" color="#FFC900" />

          <h2 className="text-2xl font-bold mb-6">
            Let's start <span className="pink-highlight">designing</span> your project
          </h2>
          <p className="text-sm mb-6">I'm always open to discuss your project and answer any questions</p>

          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 px-6 border-t-[3px] border-black dark:border-white relative">
        <Doodle type="star" color="#FF90E8" className="absolute top-5 left-5" />
        <Doodle type="circle" color="#FFC900" className="absolute bottom-5 right-5" />

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center relative z-10">
          <div className="mb-4 md:mb-0">
            <p className="font-bold">
              © 2024 Nirupam Thapa. All rights <span className="yellow-highlight">reserved</span>.
            </p>
          </div>
          <div className="flex space-x-4">
            <a
              href="https://instagram.com/_kuoki/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center neu-border rounded-full bg-[#FF90E8]"
            >
              <Instagram size={16} />
            </a>
            <a
              href="tel:+917318876896"
              className="w-8 h-8 flex items-center justify-center neu-border rounded-full bg-[#90E9FF]"
            >
              <Phone size={16} />
            </a>
            <a
              href="https://github.com/kuokiii"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center neu-border rounded-full bg-[#FFC900]"
            >
              <Github size={16} />
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}

