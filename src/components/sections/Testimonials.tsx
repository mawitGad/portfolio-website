import { getTestimonials, Testimonial } from '@/lib/notion';
import { FaQuoteLeft } from 'react-icons/fa';
import Image from 'next/image';

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
    <div className="bg-background-secondary border border-border-primary rounded-2xl p-8 hover:border-accent-primary/50 transition-all duration-300 flex flex-col h-full relative group overflow-hidden">
        <FaQuoteLeft className="absolute top-8 right-8 text-4xl text-accent-primary/10 group-hover:text-accent-primary/20 transition-colors" />

        <div className="mb-6 flex-grow">
            <p className="text-text-secondary text-lg leading-relaxed italic relative z-10">
                "{testimonial.quote}"
            </p>
        </div>

        <div className="flex items-center gap-4 mt-auto pt-6 border-t border-border-primary/50">
            {testimonial.avatar ? (
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-accent-primary/30">
                    <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                        sizes="48px"
                    />
                </div>
            ) : (
                <div className="w-12 h-12 rounded-full bg-accent-primary/10 flex items-center justify-center text-accent-primary font-bold text-lg border-2 border-accent-primary/30">
                    {testimonial.name.charAt(0)}
                </div>
            )}
            <div>
                <h4 className="text-text-primary font-bold text-base">
                    {testimonial.name}
                </h4>
            </div>
        </div>
    </div>
);

export const Testimonials = async () => {
    const testimonials = await getTestimonials();

    if (testimonials.length === 0) {
        return null; // Or render nothing if no testimonials
    }

    return (
        <section id="testimonials" className="py-24 bg-background-primary">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-tight mb-4">
                        Client <span className="text-accent-primary">Testimonials</span>
                    </h2>
                    <div className="h-1 bg-accent-primary w-24 mx-auto mb-6" />
                    <p className="text-text-secondary max-w-2xl mx-auto px-4">
                        What others say about working with me.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial) => (
                        <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                    ))}
                </div>
            </div>
        </section>
    );
};
