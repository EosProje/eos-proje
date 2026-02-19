import type { Metadata } from 'next';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
    title: "About Us | Leading Point Cloud to BIM Experts",
    description: "Learn about EOS Proje mission to provide millimetric precision digital twins for industrial and architectural projects using laser scanning and BIM methodologies.",
    alternates: {
        canonical: 'https://www.eosproje.com/en/about',
        languages: {
            "tr": "https://www.eosproje.com/hakkimizda",
            "en": "https://www.eosproje.com/en/about",
        },
    },
};

export default function AboutPageEn() {
    return <AboutClient />;
}
