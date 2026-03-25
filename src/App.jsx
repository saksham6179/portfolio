import { motion } from "framer-motion";
import {
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJava, FaPython, FaPhp, FaAndroid
} from "react-icons/fa";
import {
  SiJavascript, SiMongodb, SiMysql, SiCplusplus, SiKotlin
} from "react-icons/si";

/* ANIMATION */
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

const projects = [
  {
    title: "Life Cycle Assessment Tool",
    image: "/project1.jpg",
    desc: "Analyzes CO₂ emissions and sustainability metrics.",
    github: "https://github.com/saksham6179/Life-Cycle-Assesment-Tool"
  },
  {
    title: "Trie-Based Phone Directory",
    image: "/project2.jpg",
    desc: "Efficient prefix-based search using Trie.",
    github: "https://github.com/saksham6179/phone_directory_using_trie_data_structure"
  }
];

export default function App() {
  return (
    <div className="bg-black text-white font-sans overflow-x-hidden">

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
            <a
              key={i}
              href={`#${i.toLowerCase()}`}
              className="relative group px-1"
            >
              {i}

              {/* underline */}
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
        <p className="mt-6 text-gray-400">| Full Stack Developer |</p>
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
              My name is <span className="text-white font-semibold">Saksham Fulse</span>.
              I am Latur,Maharashtra. 
              I am currently pursuing a B.Tech in Computer Science at Lovely Professional University. 
              I am passionate about building scalable web applications and solving complex problems.
            </p>
          </div>

          <img src="/professionalPicture.jpg" className="w-72 rounded-2xl mx-auto"/>
        </div>
      </motion.section>

      {/* 🔥 MODERN SKILLS */}
      <section id="skills" className="min-h-screen flex flex-col justify-center px-6">
        <h2 className="text-5xl text-center mb-16 font-bold bg-gradient-to-r from-white to-gray-300 text-transparent bg-clip-text">
          Skills
        </h2>

        <motion.div variants={stagger} initial="hidden" whileInView="show"
          className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">

          {skills.map((s,i)=>(
            <motion.div key={i} variants={fadeUp}
              whileHover={{ y:-8, scale:1.03 }}
              className="p-8 rounded-3xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-white/20 transition">

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
              whileHover={{ y:-5 }}
              className="bg-[#111] rounded-2xl overflow-hidden">

              <div className="relative">
                <img src={p.image} className="h-56 w-full object-cover"/>
                <div className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 flex flex-col justify-center items-center transition">
                  <p className="text-sm mb-4 px-4">{p.desc}</p>
                  <a href={p.github} target="_blank" className="px-4 py-2 bg-white text-black rounded-full">
                    GitHub
                  </a>
                </div>
              </div>

              <div className="p-4 text-center">{p.title}</div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="min-h-screen flex items-center px-6 max-w-6xl mx-auto">

        <div className="grid md:grid-cols-2 gap-12 w-full items-center">

          {/* LEFT SIDE */}
          <div className="bg-white text-black p-10 rounded-2xl relative">

            <h2 className="text-4xl font-bold mb-6">
              Contact Me<span className="text-orange-500">.</span>
            </h2>

            <p className="text-gray-700 mb-6">
              I will read all emails. Send me any message you want and I'll get back to you.
            </p>

            <p className="text-gray-600 text-sm mb-10">
              I need your <b>Name</b> and <b>Email Address</b>, but you won't receive anything other than your reply.
            </p>

            {/* DOWNLOAD CV */}
            <a
              href="/sakshamFulseCV.pdf"
              download
              className="inline-block px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
            >
              Download CV
            </a>

          </div>

          {/* RIGHT SIDE FORM */}
          <div className="bg-black p-10 rounded-2xl border border-gray-800">

            <h3 className="text-xl font-semibold mb-6">Send Me A Message</h3>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="First Name"
                className="p-3 bg-transparent border border-gray-700 rounded outline-none focus:border-white"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="p-3 bg-transparent border border-gray-700 rounded outline-none focus:border-white"
              />
            </div>

            <input
              type="text"
              placeholder="Subject"
              className="w-full p-3 mb-4 bg-transparent border border-gray-700 rounded outline-none focus:border-white"
            />

            <textarea
              placeholder="Message"
              rows="5"
              className="w-full p-3 mb-6 bg-transparent border border-gray-700 rounded outline-none focus:border-white"
            />

            <button className="px-6 py-3 bg-orange-500 hover:bg-orange-600 rounded text-white transition">
              Send Message
            </button>

          </div>

        </div>

      </section>
    </div>
  );
}
