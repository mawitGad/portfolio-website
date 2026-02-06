'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export const About = () => {
    // Dynamic calculations
    const startYear = 2020;
    const currentYear = new Date().getFullYear();
    const experienceYears = currentYear - startYear;

    // Calculate age (DOB: May 3, 2000)
    const dob = new Date(2000, 4, 3); // Month is 0-indexed (4 is May)
    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    const m = today.getMonth() - dob.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
        age--;
    }

    return (
        <section id="about" className="py-24 bg-background-primary overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Image Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative group"
                    >
                        <div className="relative z-10 rounded-2xl overflow-hidden border-2 border-border-primary/50 grayscale group-hover:grayscale-0 transition-all duration-500">
                            <Image
                                src="/images/me.jpg"
                                alt="Mawit Bikom Gad"
                                width={600}
                                height={800}
                                className="w-full h-auto object-cover"
                                priority
                            />
                        </div>

                        {/* Decorative background elements */}
                        <div className="absolute top-4 -left-4 w-full h-full border-2 border-accent-primary rounded-2xl -z-0 transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2" />
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent-primary/10 rounded-full blur-3xl -z-10" />
                    </motion.div>

                    {/* Content Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-tight mb-6">
                            About <span className="text-accent-primary">Me</span>
                        </h2>

                        <div className="space-y-6 text-text-secondary leading-relaxed">
                            <p>
                                I'm <span className="text-text-primary font-semibold">Mawit Bikom Gad</span>, a {age}-year-old
                                Full-Stack Web Developer based in Buea, Cameroon. My journey into tech started in {startYear},
                                and I've since been on a relentless path of self-guided learning and building.
                            </p>

                            <p>
                                Unlike the traditional route, I am completely <span className="text-accent-primary">self-taught</span>.
                                This path has instilled in me a deep discipline and the ability to learn complex technologies quickly
                                and independently. I pride myself on not just writing code, but understanding the architecture
                                that makes applications scalable and resilient.
                            </p>

                            <p>
                                Beyond code, I have a background as an <span className="text-text-primary font-semibold">instrumentalist</span>.
                                This creative foundation heavily influences my approach to UI/UX design—I believe software should
                                have a rhythm and flow that feels natural to the user.
                            </p>

                            <div className="p-6 bg-background-secondary rounded-xl border border-border-primary mt-8">
                                <h3 className="text-text-primary font-bold mb-2">Current Focus</h3>
                                <p>
                                    I am currently expanding my horizons into <span className="text-accent-primary">AI Development</span> and
                                    Engineering. I believe the intersection of web technologies and artificial intelligence is the next
                                    frontier, and I'm actively preparing to contribute to that space.
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-6 pt-4">
                                <div>
                                    <span className="block text-3xl font-bold text-accent-primary">{experienceYears}+</span>
                                    <span className="text-sm">Years Experience</span>
                                </div>
                                <div>
                                    <span className="block text-3xl font-bold text-accent-primary">10+</span>
                                    <span className="text-sm">Projects Completed</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
