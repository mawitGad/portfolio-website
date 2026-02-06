'use client';

import { motion } from 'framer-motion';
import {
    SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs,
    SiMongodb, SiPostgresql, SiPrisma, SiDocker, SiGit, SiFigma,
    SiPython, SiTensorflow, SiOpencv
} from 'react-icons/si';

const skillCategories = [
    {
        title: "Frontend",
        skills: [
            { name: "React", icon: <SiReact className="text-[#61DAFB]" /> },
            { name: "Next.js", icon: <SiNextdotjs className="text-text-primary" /> },
            { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
            { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
        ]
    },
    {
        title: "Backend",
        skills: [
            { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" /> },
            { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
            { name: "PostgreSQL", icon: <SiPostgresql className="text-[#4169E1]" /> },
            { name: "Prisma", icon: <SiPrisma className="text-text-primary" /> },
        ]
    },
    {
        title: "Tools & DevOps",
        skills: [
            { name: "Docker", icon: <SiDocker className="text-[#2496ED]" /> },
            { name: "Git", icon: <SiGit className="text-[#F05032]" /> },
            { name: "Figma", icon: <SiFigma className="text-[#F24E1E]" /> },
        ]
    },
    {
        title: "Currently Learning",
        highlight: true,
        skills: [
            { name: "Python", icon: <SiPython className="text-[#3776AB]" /> },
            { name: "TensorFlow", icon: <SiTensorflow className="text-[#FF6F00]" /> },
            { name: "OpenCV", icon: <SiOpencv className="text-[#5C3EE8]" /> },
        ]
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 }
    }
};

export const Skills = () => {
    return (
        <section id="skills" className="py-24 bg-background-secondary overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-text-primary tracking-tight mb-4"
                    >
                        Skills & <span className="text-accent-primary">Technologies</span>
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, width: 0 }}
                        whileInView={{ opacity: 1, width: "100px" }}
                        viewport={{ once: true }}
                        className="h-1 bg-accent-primary mx-auto mb-6"
                    />
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-text-secondary max-w-2xl mx-auto"
                    >
                        A curated stack of modern technologies I use to build robust and scalable applications.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className={`p-6 rounded-2xl border ${category.highlight
                                    ? 'bg-accent-primary/5 border-accent-primary/20'
                                    : 'bg-background-primary border-border-primary'
                                }`}
                        >
                            <h3 className={`text-xl font-bold mb-6 ${category.highlight ? 'text-accent-primary' : 'text-text-primary'
                                }`}>
                                {category.title}
                            </h3>

                            <div className="space-y-4">
                                {category.skills.map((skill, sIdx) => (
                                    <div key={sIdx} className="flex items-center gap-3">
                                        <span className="text-2xl p-2 bg-background-secondary rounded-lg border border-border-primary">
                                            {skill.icon}
                                        </span>
                                        <span className="text-text-secondary font-medium">
                                            {skill.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
