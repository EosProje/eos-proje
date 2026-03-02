import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: [
                    '/private/',
                    '/admin/',
                    '/api/',
                    '/_next/',
                    '/static/',
                ],
            },
            {
                userAgent: 'GPTBot',
                allow: ['/llm.txt', '/llm-en.txt', '/llm/'],
            },
            {
                userAgent: 'ChatGPT-User',
                allow: ['/llm.txt', '/llm-en.txt', '/llm/'],
            },
            {
                userAgent: 'Claude-Web',
                allow: ['/llm.txt', '/llm-en.txt', '/llm/'],
            },
            {
                userAgent: 'anthropic-ai',
                allow: ['/llm.txt', '/llm-en.txt', '/llm/'],
            },
        ],
        sitemap: 'https://eosproje.com/sitemap.xml',
        host: 'https://eosproje.com',
    };
}
