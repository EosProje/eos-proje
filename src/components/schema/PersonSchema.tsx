import { generatePersonSchema } from "@/lib/schema";

interface PersonSchemaProps {
    locale?: "tr" | "en";
}

export default function PersonSchema({ locale = "tr" }: PersonSchemaProps) {
    const schema = generatePersonSchema(locale);

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
