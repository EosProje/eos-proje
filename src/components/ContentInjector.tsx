
import Image from 'next/image';

interface MediaItem {
    sourceUrl: string;
    altText: string;
}

interface ContentInjectorProps {
    content: string;
    videoUrl?: string | null;
    images?: (MediaItem | null | undefined)[];
    type?: 'blog' | 'page' | 'sector' | 'reference';
}

export default function ContentInjector({ content, videoUrl, images, type = 'page' }: ContentInjectorProps) {
    // 1. Filter valid images
    const validImages = images?.filter((img): img is MediaItem => !!img && !!img.sourceUrl) || [];

    // 2. Split content into paragraphs to inject media
    // We split by closing paragraph tag to keep the structure valid when re-assembling
    const paragraphs = content.split('</p>');

    // If content is too short or split failed, just return standard layout
    if (paragraphs.length < 3) {
        return (
            <div className="space-y-8">
                {videoUrl && (
                    <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden shadow-xl mb-8">
                        <iframe
                            src={videoUrl.replace("watch?v=", "embed/")}
                            title="Video"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full"
                        ></iframe>
                    </div>
                )}
                <div className="prose prose-lg max-w-none text-slate-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: content }} />

                {/* Fallback Gallery */}
                {validImages.length > 0 && (
                    <div className="grid md:grid-cols-2 gap-6 mt-8">
                        {validImages.map((img, idx) => (
                            <div key={idx} className="relative h-64 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                                <Image src={img.sourceUrl} alt={img.altText || `Gallery image ${idx}`} fill className="object-cover" />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        );
    }

    // 3. Injection Logic
    // Strategy: 
    // - Video: At the top (for Sectors/Pages) or Middle? User said "Video en başta olabilir bazen". Let's put it at Top for now for impact.
    // - Image 1: After 1/3 of content.
    // - Image 2: After 2/3 of content.

    const totalParagraphs = paragraphs.length;
    const injectIndex1 = Math.floor(totalParagraphs * 0.3); // First image location
    const injectIndex2 = Math.floor(totalParagraphs * 0.7); // Second image location

    // Helper to render image
    const renderImage = (img: MediaItem) => (
        <div className="my-10 relative h-[400px] w-full rounded-2xl overflow-hidden shadow-xl group">
            <Image
                src={img.sourceUrl}
                alt={img.altText || "Content Image"}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
        </div>
    );

    return (
        <div className="content-injector">
            {/* Video at Top (Specific request) */}
            {videoUrl && (
                <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden shadow-2xl mb-12">
                    <iframe
                        src={videoUrl.replace("watch?v=", "embed/")}
                        title="Featured Video"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                    ></iframe>
                </div>
            )}

            <div className="prose prose-lg max-w-none text-slate-600 leading-relaxed">
                {paragraphs.map((doc, index) => {
                    const isLast = index === paragraphs.length - 1;
                    // Don't add closing p tag if it's the last empty split artifact
                    if (isLast && !doc.trim()) return null;

                    // Re-add the closing </p> we stripped during split
                    const htmlChunk = doc + '</p>';

                    return (
                        <div key={index}>
                            <div dangerouslySetInnerHTML={{ __html: htmlChunk }} />

                            {/* Inject Image 1 */}
                            {index === injectIndex1 && validImages[0] && renderImage(validImages[0])}

                            {/* Inject Image 2 */}
                            {index === injectIndex2 && validImages[1] && renderImage(validImages[1])}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
