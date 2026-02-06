export interface Post {
    title: string;
    brief: string;
    slug: string;
    coverImage?: {
        url: string;
    };
    publishedAt: string;
    url: string;
}

const GQL_ENDPOINT = 'https://gql.hashnode.com';

export const getPosts = async (host: string): Promise<Post[]> => {
    const query = `
    query Publication($host: String!) {
        publication(host: $host) {
            posts(first: 3) {
                edges {
                    node {
                        title
                        brief
                        slug
                        coverImage {
                            url
                        }
                        publishedAt
                        url
                    }
                }
            }
        }
    }
    `;

    try {
        const response = await fetch(GQL_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                query,
                variables: {
                    host,
                },
            }),
            next: { revalidate: 3600 }, // Revalidate every hour
        });

        const data = await response.json();

        if (data.errors) {
            console.error('Hashnode GraphQL Error:', data.errors);
            return [];
        }

        const posts = data.data?.publication?.posts?.edges?.map((edge: any) => edge.node) || [];
        return posts;
    } catch (error) {
        console.error('Failed to fetch posts from Hashnode:', error);
        return [];
    }
};
