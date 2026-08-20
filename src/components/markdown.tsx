import Link from "next/link";
import ReactMarkdown from "react-markdown";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

/**
 * Markdown gövde çizici (sunucu bileşeni).
 * - remark-gfm      : tablo, görev listesi, otomatik bağlantı
 * - rehype-slug     : başlıklara id ekler (içindekiler/derin bağlantı)
 * - rehype-autolink : başlığa tıklanabilir çapa ekler
 */
export function Markdown({ content }: { content: string }) {
  return (
    <div className="prose prose-philo max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[
          rehypeSlug,
          [
            rehypeAutolinkHeadings,
            {
              behavior: "append",
              properties: { className: ["heading-anchor"], ariaHidden: true, tabIndex: -1 },
              content: { type: "text", value: "#" },
            },
          ],
        ]}
        components={{
          // Site içi bağlantılarda istemci tarafı geçiş kullan.
          a: ({ href, children, ...props }) => {
            const target = href ?? "#";
            if (target.startsWith("/")) {
              return (
                <Link href={target} {...props}>
                  {children}
                </Link>
              );
            }
            return (
              <a href={target} target="_blank" rel="noopener noreferrer" {...props}>
                {children}
              </a>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
