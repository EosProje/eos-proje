import { generateArticleSchema } from "@/lib/schema";
import { MDXFrontmatter } from "@/lib/mdx";

interface ArticleSchemaProps {
    frontmatter: MDXFrontmatter;
    content: string;
}

export default function ArticleSchema({
    frontmatter,
    content,
}: ArticleSchemaProps) {
    const schema = generateArticleSchema(frontmatter, content);

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
