'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiCode, FiLayers, FiDatabase, FiMonitor } from 'react-icons/fi';

const services = [
    {
        title: "Full-Stack Web Development",
        description: "End-to-end development of scalable, performant web applications using modern technologies like Next.js, Node.js, and MongoDB.",
        icon: <FiCode className="w-8 h-8" />,
    },
    {
        title: "UI/UX Design & Implementation",
        description: "Crafting beautiful, intuitive interfaces with a focus on user experience, responsiveness, and premium aesthetics.",
        icon: <FiMonitor className="w-8 h-8" />,
    },
    {
        title: "Database Schema Design",
        description: "Designing efficient, normalized, and scalable database architectures using MongoDB, Mongoose, and Prisma.",
        icon: <FiDatabase className="w-8 h-8" />,
    },
    {
        title: "Software Architecture",
        description: "Consultation and design of robust software systems, focusing on maintainability, security, and clean code principles.",
        icon: <FiLayers className="w-8 h-8" />,
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

export const Services = () => {
    return (
        <section id="services" className="py-24 bg-background-primary overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold text-text-primary tracking-tight mb-4"
                    >
                        Professional <span className="text-accent-primary">Services</span>
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
                        Leveraging a modern technical stack and creative background to deliver
                        comprehensive digital solutions.
                    </motion.p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -10 }}
                            className="p-8 bg-background-secondary border border-border-primary rounded-2xl hover:border-accent-primary/50 transition-all duration-300 group"
                        >
                            <div className="text-accent-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold text-text-primary mb-4">
                                {service.title}
                            </h3>
                            <p className="text-text-secondary text-sm leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

                <div className="mt-16 text-center">
                    <Link
                        href="#contact"
                        className="inline-flex items-center gap-2 text-accent-primary font-semibold hover:gap-4 transition-all"
                    >
                        <span>Discuss your project</span>
                        <span className="text-xl">→</span>
                    </Link>
                </div>
            </div>
        </section>
    );
};

