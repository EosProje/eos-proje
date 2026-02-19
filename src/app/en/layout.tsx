import type { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        default: "EOSPROJE | Point Cloud to BIM & Digital Twin Solutions",
        template: "%s | EOSPROJE"
    },
    description: "EOS Proje is an engineering firm converting laser scanning (Point Cloud) data into high-precision BIM models, 2D as-built drawings, and 3D digital twins.",
    keywords: ["Point Cloud to BIM", "Laser Scanning", "Scan to BIM", "3D Modeling", "As-Built", "Restoration", "Industrial Plant", "Digital Twin", "Revit Modeling"],
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://www.eosproje.com/en",
        title: "EOSPROJE | Point Cloud to BIM & Digital Twin",
        description: "We produce millimeter-precise 3D BIM models and as-built projects from reality capture data.",
        siteName: "EOS Proje",
        images: [
            {
                url: "/images/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "EOS Proje - Point Cloud to BIM English",
            },
        ],
    },
    alternates: {
        canonical: "/en",
        languages: {
            'en-US': '/en',
            'tr-TR': '/',
        },
    },
};

export default function EnLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <div lang="en">{children}</div>;
}
