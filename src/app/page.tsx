import { Navigation } from "@/components/Navigation";

import { Hero } from "@/components/sections/Hero";

import { Services } from "@/components/sections/Services";
import { Skills } from "@/components/sections/Skills";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Projects } from "@/components/sections/Projects";
import { Blog } from "@/components/sections/Blog";
import { Testimonials } from "@/components/sections/Testimonials";

export default function Home() {
    return (
        <div className="relative min-h-screen bg-background-primary text-text-primary">
            <Navigation />

            <main>
                <Hero />

                <Projects />

                <Services />

                <Skills />

                <About />

                <Blog />

                <Testimonials />

                <Contact />
            </main>

            <footer className="py-10 text-center border-t border-border-primary text-text-secondary text-sm">
                <p>© {new Date().getFullYear()} Mawit Bikom Gad. All rights reserved.</p>
            </footer>
        </div>
    );
}
