import type { Metadata } from 'next';
import QAQCClient from './QAQCClient';

export const metadata: Metadata = {
    title: "BIM Quality Assurance & Control (QA/QC) | Accuracy Guarantee",
    description: "Learn about our three-stage QA/QC protocol and millimeter accuracy guarantees in BIM modeling and reality capture projects.",
    alternates: {
        canonical: 'https://www.eosproje.com/en/qa-qc',
        languages: {
            "tr": "https://www.eosproje.com/qa-qc",
            "en": "https://www.eosproje.com/en/qa-qc",
        },
    },
};

export default function QAQCPageEn() {
    return <QAQCClient />;
}
