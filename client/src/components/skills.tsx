import { motion } from "framer-motion";
import { FaPython, FaJava, FaGitAlt } from "react-icons/fa";
import { SiCplusplus, SiTensorflow, SiOpencv, SiGooglecloud } from "react-icons/si";
import { DiLinux } from "react-icons/di";

const skillsData = [
  // Programming Languages
  { name: 'C++', icon: <SiCplusplus size={32} />, category: 'Languages' },
  { name: 'Python', icon: <FaPython size={32} />, category: 'Languages' },
  { name: 'Java (Intermediate)', icon: <FaJava size={32} />, category: 'Languages' },
  
  // Developer Tools
  { name: 'Git/GitHub', icon: <FaGitAlt size={32} />, category: 'Tools' },
  { name: 'VS Code', icon: <div className="text-2xl">💻</div>, category: 'Tools' },
  
  // Technical Skills
  { name: 'Computer Vision', icon: <div className="text-2xl">👁️</div>, category: 'Technical' },
  { name: 'Machine Learning', icon: <SiTensorflow size={32} />, category: 'Technical' },
  { name: 'OpenCV', icon: <SiOpencv size={32} />, category: 'Technical' },
  // { name: 'YOLO (v5/v8)', icon: <SiYolo size={32} />, category: 'Technical' },
  { name: 'ROS', icon: <div className="text-2xl">🤖</div>, category: 'Technical' },
  { name: 'Onboard Computers', icon: <div className="text-2xl">🖥️</div>, category: 'Technical' },
  
  // Fundamentals
  { name: 'Data Structures', icon: <div className="text-2xl">📊</div>, category: 'Fundamentals' },
  { name: 'Operating Systems', icon: <DiLinux size={32} />, category: 'Fundamentals' },
  { name: 'Data Networking', icon: <div className="text-2xl">🌐</div>, category: 'Fundamentals' },
  { name: 'Linux Kernel', icon: <DiLinux size={32} />, category: 'Fundamentals' },
  
  // Cloud
  { name: 'Google Cloud', icon: <SiGooglecloud size={32} />, category: 'Cloud' },
];

const SkillCard = ({ name, icon, delay }) => (
  <motion.div 
    className="flex items-center p-4 rounded-xl shadow-lg bg-neutral-800 border border-neutral-900 hover:border-pale-gold transition-all duration-300 cursor-pointer"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ 
      y: -5, 
      boxShadow: "0px 10px 20px rgba(245, 197, 24, 0.2)",
      borderColor: "#f5c518"
    }}
  >
    <div className="mr-4 text-pale-gold">{icon}</div>
    <h3 className="text-lg font-medium text-white">{name}</h3>
  </motion.div>
);

const Skills = () => {
  const categories = [...new Set(skillsData.map(skill => skill.category))];
  
  return (
    <section id="skills" className="min-h-screen w-screen flex flex-col items-center justify-center snap-start relative px-4 py-12">
      <motion.h2 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-pale-gold text-5xl font-extrabold mb-12 text-center drop-shadow-lg"
      >
        My Skills
      </motion.h2>

      <div className="w-full max-w-6xl mx-auto">
        {categories.map((category) => (
          <div key={category} className="mb-8">
            <motion.h3 
              className="text-2xl font-bold mb-4 text-white"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {category}
            </motion.h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {skillsData
                .filter(skill => skill.category === category)
                .map((skill, index) => (
                  <SkillCard 
                    key={skill.name} 
                    name={skill.name} 
                    icon={skill.icon} 
                    delay={index * 0.05} 
                  />
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;