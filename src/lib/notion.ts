import { Client } from '@notionhq/client';

const notion = new Client({
    auth: process.env.NOTION_API_KEY,
});

export interface Project {
    id: string;
    title: string;
    description: string;
    techStack: string[];
    url?: string;
    thumbnail?: string;
    order: number;
}

export const getProjects = async (): Promise<Project[]> => {
    const databaseId = process.env.NOTION_DATABASE_ID;

    if (!databaseId) {
        throw new Error('NOTION_DATABASE_ID is not defined in environment variables');
    }

    try {
        const response = await notion.dataSources.query({
            data_source_id: databaseId,
            sorts: [
                {
                    property: 'order',
                    direction: 'ascending',
                },
            ],
        });

        const projects = response.results.map((page: any) => {
            const props = page.properties;

            return {
                id: page.id,
                title: props.Name?.title?.[0]?.plain_text || 'Untitled Project',
                description: props.description?.rich_text?.[0]?.plain_text || '',
                techStack: props.tech_stack?.multi_select?.map((tag: any) => tag.name) || [],
                url: props.url?.url || null,
                thumbnail: props.thumbnail?.files?.[0]?.file?.url || props.thumbnail?.files?.[0]?.external?.url || null,
                order: props.order?.number || 99,
            };
        });

        return projects;
    } catch (error) {
        console.error('Failed to fetch projects from Notion:', error);
        return [];
    }
};

export interface Testimonial {
    id: string;
    name: string;
    quote: string;
    avatar?: string;
}

export const getTestimonials = async (): Promise<Testimonial[]> => {
    const databaseId = process.env.TESTIMONIES_DATABASE_ID;

    if (!databaseId) {
        console.warn('TESTIMONIES_DATABASE_ID is not defined');
        return [];
    }

    try {
        const response = await notion.dataSources.query({
            data_source_id: databaseId,
        });

        const testimonials = response.results.map((page: any) => {
            const props = page.properties;
            return {
                id: page.id,
                name: props.Name?.title?.[0]?.plain_text || 'Anonymous',
                quote: props.testimony?.rich_text?.[0]?.plain_text || '',
                avatar: props.avatar?.files?.[0]?.file?.url || props.avatar?.files?.[0]?.external?.url || null,
            };
        });

        return testimonials;
    } catch (error) {
        console.error('Failed to fetch testimonials from Notion:', error);
        return [];
    }
};
