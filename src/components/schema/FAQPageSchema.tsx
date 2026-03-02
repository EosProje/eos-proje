// Re-export FAQSchema as FAQPageSchema for named imports
import FAQSchema from "./FAQSchema";

// Named export for { FAQPageSchema } imports
export function FAQPageSchema({ faqs }: { faqs: Array<{ question: string; answer: string }> }) {
  return <FAQSchema faqs={faqs} />;
}

// Default export for backwards compatibility
export default FAQPageSchema;
