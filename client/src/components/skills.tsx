import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaJava, FaPython, FaJs, FaGitAlt, FaAws, FaDocker } from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiExpress, SiPostgresql, SiCplusplus, SiTensorflow, SiPytorch, SiGooglecloud } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { DiLinux } from "react-icons/di";

const skillsData = [
  // Programming Languages
  { name: 'C++ (DSA)', icon: <SiCplusplus size={32} />, category: 'Languages' },
  { name: 'Java', icon: <FaJava size={32} />, category: 'Languages' },
  { name: 'Python', icon: <FaPython size={32} />, category: 'Languages' },
  { name: 'JavaScript', icon: <FaJs size={32} />, category: 'Languages' },
  
  // Frontend
  { name: 'React', icon: <FaReact size={32} />, category: 'Frontend' },
  { name: 'HTML5/CSS3', icon: <div className="text-2xl">🖥️</div>, category: 'Frontend' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss size={32} />, category: 'Frontend' },
  
  // Backend
  { name: 'Node.js', icon: <FaNodeJs size={32} />, category: 'Backend' },
  { name: 'Express.js', icon: <SiExpress size={32} />, category: 'Backend' },
  { name: 'REST APIs', icon: <TbApi size={32} />, category: 'Backend' },
  
  // Databases
  { name: 'MongoDB', icon: <SiMongodb size={32} />, category: 'Databases' },
  { name: 'PostgreSQL', icon: <SiPostgresql size={32} />, category: 'Databases' },
  
  // Cloud & DevOps
  { name: 'AWS', icon: <FaAws size={32} />, category: 'Cloud' },
//   { name: 'Azure', icon: <SiAzuredevops size={32} />, category: 'Cloud' },
  { name: 'Google Cloud', icon: <SiGooglecloud size={32} />, category: 'Cloud' },
  { name: 'Git', icon: <FaGitAlt size={32} />, category: 'Cloud' },
  { name: 'Docker', icon: <FaDocker size={32} />, category: 'Cloud' },
  { name: 'Linux', icon: <DiLinux size={32} />, category: 'Cloud' },
  
  // AI/ML
  { name: 'TensorFlow', icon: <SiTensorflow size={32} />, category: 'AI/ML' },
  { name: 'PyTorch', icon: <SiPytorch size={32} />, category: 'AI/ML' },
  
  // Networking
  { name: 'TCP/IP', icon: <div className="text-2xl">🌐</div>, category: 'Networking' },
  { name: 'Wireshark', icon: <div className="text-2xl">🔍</div>, category: 'Networking' },
];

const SkillCard = ({ name, icon, delay }) => (
  <motion.div 
    className="flex items-center p-4 rounded-xl shadow-lg bg-white dark:bg-neutral-800 border border-slate-200 dark:border-neutral-700 hover:border-pale-gold transition-all duration-300 cursor-pointer"
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
    <h3 className="text-lg font-medium dark:text-white">{name}</h3>
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
              className="text-2xl font-bold mb-4 text-white dark:text-white"
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