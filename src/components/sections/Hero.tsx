'use client';

import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import Link from 'next/link';

// Dynamically import the 3D component with no SSR to avoid hydration issues
const PixelatedComputer = dynamic(() => import('../3d/PixelatedComputer'), {
    ssr: false,
    loading: () => <div className="w-full h-[400px] lg:h-[600px] animate-pulse bg-background-secondary rounded-lg" />
});

export const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
            {/* Background Decorative Element */}
            <div className="absolute top-1/4 -right-20 w-80 h-80 bg-accent-primary/5 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-1/4 -left-20 w-60 h-60 bg-accent-primary/10 rounded-full blur-3xl -z-10" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-accent-primary font-medium tracking-widest uppercase text-sm mb-4"
                    >
                        Available for new projects
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-5xl md:text-7xl font-bold text-text-primary tracking-tighter mb-6"
                    >
                        Mawit Bikom <span className="text-accent-primary">Gad</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-xl text-text-secondary leading-relaxed mb-10 max-w-lg"
                    >
                        A self-taught <span className="text-text-primary font-semibold">Full-Stack Web Developer</span> based in Cameroon,
                        crafting performant, high-end digital experiences since 2020.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="flex flex-col sm:flex-row gap-4"
                    >
                        <Link
                            href="#projects"
                            className="px-8 py-4 bg-accent-primary text-white font-semibold rounded-lg hover:bg-accent-hover transition-colors text-center"
                        >
                            View Projects
                        </Link>
                        <Link
                            href="#contact"
                            className="px-8 py-4 bg-transparent border border-border-primary text-text-primary font-semibold rounded-lg hover:bg-background-secondary transition-colors text-center"
                        >
                            Hire Me
                        </Link>
                    </motion.div>
                </motion.div>

                {/* 3D Visual */}
                {true && <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="relative"
                >
                    <PixelatedComputer />
                </motion.div>}
            </div>

            {/* Scroll indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
            >
                <div className="w-6 h-10 border-2 border-border-primary rounded-full flex justify-center pt-2">
                    <div className="w-1 h-2 bg-accent-primary rounded-full" />
                </div>
            </motion.div>
        </section>
    );
};
