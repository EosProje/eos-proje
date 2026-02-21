import { FAQItem, generateFAQSchema } from "@/lib/schema";

interface FAQSchemaProps {
    faqs: FAQItem[];
}

export default function FAQSchema({ faqs }: FAQSchemaProps) {
    const schema = generateFAQSchema(faqs);

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
