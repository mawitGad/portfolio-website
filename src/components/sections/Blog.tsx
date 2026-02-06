import { getPosts, Post } from '@/lib/hashnode';
import { FiExternalLink, FiClock } from 'react-icons/fi';
import Image from 'next/image';

const BlogCard = ({ post }: { post: Post }) => (
    <div className="bg-background-secondary border border-border-primary rounded-2xl overflow-hidden hover:border-accent-primary/50 transition-all duration-300 flex flex-col h-full group">
        {post.coverImage?.url && (
            <div className="relative h-48 w-full overflow-hidden">
                <Image
                    src={post.coverImage.url}
                    alt={post.title}
                    fill
                    className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>
        )}
        <div className="p-6 flex flex-col flex-grow">
            <div className="flex items-center gap-2 text-text-secondary text-xs mb-3">
                <FiClock className="w-3.5 h-3.5" />
                <time dateTime={post.publishedAt}>
                    {new Date(post.publishedAt).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                    })}
                </time>
            </div>

            <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-accent-primary transition-colors line-clamp-2">
                {post.title}
            </h3>

            <p className="text-text-secondary text-sm leading-relaxed mb-4 line-clamp-3">
                {post.brief}
            </p>

            <div className="mt-auto pt-4 border-t border-border-primary/50">
                <a
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-accent-primary text-sm font-medium hover:underline"
                >
                    Read on Hashnode
                    <FiExternalLink className="w-4 h-4" />
                </a>
            </div>
        </div>
    </div>
);

export const Blog = async () => {
    const host = process.env.NEXT_PUBLIC_HASHNODE_HOST;
    const posts = host ? await getPosts(host) : [];

    if (posts.length === 0) {
        return null;
    }

    return (
        <section id="blog" className="py-24 bg-background-secondary/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-text-primary tracking-tight mb-4">
                        Latest <span className="text-accent-primary">Articles</span>
                    </h2>
                    <div className="h-1 bg-accent-primary w-24 mx-auto mb-6" />
                    <p className="text-text-secondary max-w-2xl mx-auto px-4">
                        Thoughts, tutorials, and insights from my engineering journey.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post) => (
                        <BlogCard key={post.slug} post={post} />
                    ))}
                </div>
            </div>
        </section>
    );
};
