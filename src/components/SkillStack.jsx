import React from "react";
import { FaReact } from "react-icons/fa";
import { motion } from "framer-motion";

function SkillStack() {
  const skills = [
    { icon: <FaReact size={18} />, label: "React JS" },
    { icon: <FaReact size={18} />, label: "Next.js" },
    { icon: <FaReact size={18} />, label: "Tailwind CSS" },
    { icon: <FaReact size={18} />, label: "Node.js" },
    { icon: <FaReact size={18} />, label: "Express.js" },
    { icon: <FaReact size={18} />, label: "SQLite" },
  ];

  // Gandakan elemen lebih banyak agar selalu ada di layar
  const repeatedSkills = [...skills, ...skills, ...skills];

  return (
    <section id="Skills" className="relative w-full overflow-hidden py-10 z-[9999]">
      <div className="text-center">
        <h2 className="font-semibold text-3xl md:text-5xl">Skill Stacks</h2>
      </div>
      <div className="mt-6 w-full overflow-hidden">
        <motion.div
          className="flex min-w-max gap-4"
          animate={{ x: ["90%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          onHoverStart={() => console.log('Hover starts')}
        >
          {repeatedSkills.map((skill, index) => (
            <div
              key={index}
              className="bg-neutral-900 py-2 px-4 rounded flex items-center gap-2 shadow-[0px_0px_15px_2px_rgba(46,37,146,0.3)]"
            >
              {skill.icon}
              <span className="text-sm text-white">{skill.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default SkillStack;
