import { generateOrganizationSchema } from "@/lib/schema";

export default function OrganizationSchema() {
    const schema = generateOrganizationSchema();

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
