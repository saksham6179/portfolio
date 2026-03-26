import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJava, FaPython, FaPhp, FaAndroid
} from "react-icons/fa";
import {
  SiJavascript, SiMongodb, SiMysql, SiCplusplus, SiKotlin
} from "react-icons/si";

/* ================= CURSOR ================= */
function JellyCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [moving, setMoving] = useState(false);
  const [type, setType] = useState("default"); // 🔥 step 5

  // movement detection
  useEffect(() => {
    let timeout;

    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      setMoving(true);

      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setMoving(false);
      }, 80);
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  // 🔥 cursor type detection (step 5)
  useEffect(() => {
    const handleMouseOver = (e) => {
      const tag = e.target.tagName.toLowerCase();

      if (e.target.closest(".cursor-text-element")) {
        setType("text");
      }else if (
        tag === "p" ||
        tag === "h1" ||
        tag === "h2" ||
        tag === "h3" ||
        tag === "a"  ||
        tag === "button" || 
        tag === "span"
      ) {
        setType("text");
      } else {
        setType("default");
      }
    };

    window.addEventListener("mouseover", handleMouseOver);
    return () => window.removeEventListener("mouseover", handleMouseOver);
  }, []);

  const size = 30;

  return (
    <motion.div
      animate={{
        x: pos.x - size / 2,
        y: pos.y - size / 2,

        // 🔥 smart scaling
        scale:
          type === "interactive"
            ? 1.4
            : type === "text"
            ? 0.90
            : moving
            ? 1.25
            : 1,

        boxShadow: moving
          ? "0 0 18px rgba(249,115,22,0.45)"
          : "0 0 0px rgba(255,255,255,0)"
      }}
      transition={{
        type: "tween",
        ease: "easeOut",
        duration: 0.15
      }}
      className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        background: moving ? "#f97316" : "white",
        opacity: moving ? 1 : 0.6
      }}
    />
  );
}

/* ================= ANIMATION ================= */
const fadeUp = {
  hidden: { opacity: 0, y: 40, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 }
  }
};

const skills = [
  {
    title: "Frontend Development",
    icon: <FaReact />,
    desc: "Building responsive UI using React, HTML, CSS and modern JS."
  },
  {
    title: "Backend Development",
    icon: <FaNodeJs />,
    desc: "Designing APIs and scalable backend using Node & Express."
  },
  {
    title: "Android Development",
    icon: <FaAndroid />,
    desc: "Creating Android apps using Kotlin and modern practices."
  }
];

const techStack = [
  { name: "React", icon: <FaReact />, color: "#61DBFB" },
  { name: "Node.js", icon: <FaNodeJs />, color: "#68A063" },
  { name: "JavaScript", icon: <SiJavascript />, color: "#f7df1e" },
  { name: "MongoDB", icon: <SiMongodb />, color: "#4DB33D" },
  { name: "MySQL", icon: <SiMysql />, color: "#00758F" },
  { name: "HTML", icon: <FaHtml5 />, color: "#E34C26" },
  { name: "CSS", icon: <FaCss3Alt />, color: "#264de4" },
  { name: "Java", icon: <FaJava />, color: "#f89820" },
  { name: "Python", icon: <FaPython />, color: "#3776AB" },
  { name: "PHP", icon: <FaPhp />, color: "#8993be" },
  { name: "C++", icon: <SiCplusplus />, color: "#00599C" },
  { name: "Kotlin", icon: <SiKotlin />, color: "#A97BFF" }
];

const techConfig = {
  "React": { color: "#61DBFB", icon: <FaReact /> },
  "Node.js": { color: "#68A063", icon: <FaNodeJs /> },
  "MongoDB": { color: "#4DB33D", icon: <SiMongodb /> },
  "JavaScript": { color: "#f7df1e", icon: <SiJavascript /> },
  "HTML": { color: "#E34C26", icon: <FaHtml5 /> },
  "CSS": { color: "#264de4", icon: <FaCss3Alt /> },
  "Data Structures": { color: "#888888", icon: "DS" }
};

const projects = [
  {
    title: "Life Cycle Assessment Tool",
    image: "/project1.jpg",
    desc: "Developed a Life Cycle Assessment tool to calculate and analyze CO₂ emissions across different product stages, helping identify environmental impact and optimize sustainability decisions.",
    github: "https://github.com/saksham6179/Life-Cycle-Assesment-Tool",
    tech: ["React", "Node.js", "MongoDB"]
  },
  {
    title: "Trie-Based Phone Directory",
    image: "/project2.jpg",
    desc: "Built a phone directory system using Trie data structure to enable fast prefix-based search, significantly improving lookup efficiency compared to linear search.",
    github: "https://github.com/saksham6179/phone_directory_using_trie_data_structure",
    tech: ["HTML", "CSS", "JavaScript", "Data Structures"]
  }
];

export default function App() {
  return (
    <div className="bg-black text-white font-sans overflow-x-hidden cursor-none">

      {/* CURSOR */}
      <JellyCursor />

      {/* BACKGROUND */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute w-[500px] h-[500px] bg-purple-500 opacity-20 blur-3xl top-[-100px] left-[-100px]" />
        <div className="absolute w-[400px] h-[400px] bg-blue-500 opacity-20 blur-3xl bottom-[-100px] right-[-100px]" />
      </div>

      {/* NAVBAR */}
      <motion.nav initial={{ y: -80 }} animate={{ y: 0 }}
        className="fixed w-full flex justify-between px-8 py-4 backdrop-blur-xl z-50">
        <h1 className="font-bold">Saksham Fulse</h1>
        <div className="flex gap-6 text-sm">
          {["About","Skills","Technologies","Projects","Contact"].map((i)=>(
            <a key={i} href={`#${i.toLowerCase()}`} className="relative group px-1 transition transform hover:scale-105 cursor-text-element">
              {i}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>
      </motion.nav>

      {/* HERO */}
      <section className="h-screen flex flex-col justify-center items-center">
        <motion.h1
          initial={{ opacity:0,y:60 }}
          animate={{ opacity:1,y:0 }}
          transition={{ duration:1.2 }}
          className="text-8xl font-extrabold bg-gradient-to-r from-white to-gray-400 text-transparent bg-clip-text"
        >
          Saksham Fulse
        </motion.h1>
        <p className="mt-6 text-gray-400">
          Full Stack Developer | DSA Enthusiast
        </p>
      </section>

      {/* ABOUT */}
      <motion.section id="about" variants={fadeUp} initial="hidden" whileInView="show"
        className="min-h-screen flex items-center px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
              About Me
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              My name is <span className="text-white font-semibold">Saksham Fulse</span>. I am from Latur, Maharashtra and currently pursuing a B.Tech in Computer Science at Lovely Professional University.

              I am a Full Stack Developer focused on building scalable web applications and solving real-world problems using efficient algorithms and modern technologies.

              I enjoy working on projects that combine strong backend logic with clean user interfaces, and I continuously improve my problem-solving skills through Data Structures and Algorithms.
            </p>
          </div>
          <img src="/professionalPicture.jpg" className="w-72 rounded-2xl mx-auto"/>
        </div>
      </motion.section>

      {/* SKILLS */}
      <section id="skills" className="min-h-screen flex flex-col justify-center px-6">
        <h2 className="text-5xl text-center mb-16 font-bold bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
          Skills
        </h2>

        <motion.div variants={stagger} initial="hidden" whileInView="show"
          className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">

          {skills.map((s,i)=>(
            <motion.div key={i} variants={fadeUp}
              whileHover={{ y:-8, scale:1.03 }}
              className="p-8 rounded-3xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-orange-400/40 transition duration-300 ease-out relative overflow-hidden group">

              {/* 🔥 NEW LINE ADDED */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 
              bg-gradient-to-br from-orange-500/10 via-transparent to-transparent blur-xl" />

              <div className="text-4xl mb-4 text-white">{s.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-gray-400">{s.desc}</p>

            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* TECHNOLOGIES */}
      <section id="technologies" className="min-h-screen flex flex-col justify-center px-6">
        <h2 className="text-5xl text-center mb-16 font-bold bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
          Technologies
        </h2>

        <motion.div variants={stagger} initial="hidden" whileInView="show"
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-5xl mx-auto">

          {techStack.map((tech,i)=>(
           <motion.div key={i} variants={fadeUp}
            whileHover={{ scale:1.1,y:-5 }}
            className="flex flex-col items-center p-6 bg-[#111] rounded-2xl group"
            style={{ boxShadow:`0 0 0px ${tech.color}` }}
            onMouseEnter={(e)=> e.currentTarget.style.boxShadow=`0 0 25px ${tech.color}`}
            onMouseLeave={(e)=> e.currentTarget.style.boxShadow=`0 0 0px ${tech.color}`}
          >
              <div className="text-4xl mb-3 group-hover:scale-125" style={{color:tech.color}}>
                {tech.icon}
              </div>
              <p className="text-sm text-gray-300 group-hover:text-white">{tech.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="min-h-screen flex flex-col justify-center px-6">
        <h2 className="text-5xl text-center mb-16 font-bold bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
          Projects
        </h2>

        <motion.div variants={stagger} initial="hidden" whileInView="show"
          className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">

          {projects.map((p,i)=>(
            <motion.div key={i} variants={fadeUp}
              whileHover={{ y:-8, scale:1.03 }}
              className="bg-[#111] rounded-2xl overflow-hidden group relative">

              <div className="relative">
                {/* 🔥 NEW OVERLAY (ADD THIS HERE) */}
                <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/0 via-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 ease-out" />
                <img src={p.image} className="h-56 w-full object-cover"/>
                <div className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 flex flex-col justify-center items-center transition">
                  <p className="text-sm mb-4 px-4">{p.desc}</p>
                  <a href={p.github} target="_blank" className="px-4 py-2 bg-white text-black rounded-full">
                    View Code
                  </a>
                </div>
              </div>

              <div className="p-4 text-center">
                <h3 className="font-semibold mb-2">{p.title}</h3>

                {/* 🔥 TECH BADGES */}
                <div className="flex flex-wrap justify-center gap-2 mt-2">
                  {p.tech.map((t, i) => {
                    const tech = techConfig[t];
                    return (
                      <span
                        key={i}
                        className="flex items-center gap-1 text-xs px-3 py-1 rounded-full"
                        style={{
                          background: `${tech?.color}20`,
                          border: `1px solid ${tech?.color}40`,
                          color: tech?.color
                        }}
                      >
                        <span className="text-xs">{tech?.icon}</span>
                        {t}
                      </span>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="min-h-screen flex items-center px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 w-full items-center">

          <div className="bg-white text-black p-10 rounded-2xl relative">
            <h2 className="text-4xl font-bold mb-6">
              Contact Me<span className="text-orange-500">.</span>
            </h2>
            <p className="text-gray-700 mb-6">
              I will read all emails. Send me any message you want and I'll get back to you.
            </p>
            <p className="text-gray-600 text-sm mb-10">
              I need your <b>Name</b> and <b>Email Address</b>.
            </p>

            <div className="flex flex-wrap gap-4 mt-4">
              {/* Download CV */}
              <a href="/sakshamFulseCV.pdf" download
                className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition">
                Download CV
              </a>

              {/* GitHub */}
              <a href="https://github.com/saksham6179" target="_blank"
               className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition">
                GitHub
              </a>

              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/saksham-fulse/" target="_blank"
                className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition">
                LinkedIn
              </a>

            </div>
          </div>

          <div className="bg-black p-10 rounded-2xl border border-gray-800">
            <h3 className="text-xl font-semibold mb-6">Send Me A Message</h3>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <input type="text" placeholder="First Name"
                className="p-3 bg-transparent border border-gray-700 rounded outline-none focus:border-white"/>
              <input type="email" placeholder="Email Address"
                className="p-3 bg-transparent border border-gray-700 rounded outline-none focus:border-white"/>
            </div>

            <input type="text" placeholder="Subject"
              className="w-full p-3 mb-4 bg-transparent border border-gray-700 rounded outline-none focus:border-white"/>

            <textarea placeholder="Message" rows="5"
              className="w-full p-3 mb-6 bg-transparent border border-gray-700 rounded outline-none focus:border-white"/>

            <button className="px-6 py-3 bg-orange-500 hover:bg-orange-600 rounded text-white transition">
              Send Message
            </button>
          </div>

        </div>
      </section>
    </div>
  );
}
