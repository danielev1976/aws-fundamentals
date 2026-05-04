import { getDoc } from "@/lib/content";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";



export default async function DocPage({
  params,
}: {
  params: Promise<{
    locale: string;
    slug: string[];
  }>;
}) {
  const { locale, slug } = await params;

  const source = await getDoc(locale, slug);

  if (!source) {
    notFound();
  }

  return (
    <article className="prose prose-invert mx-auto py-10">
      <MDXRemote source={source} />
    </article>
  );
}