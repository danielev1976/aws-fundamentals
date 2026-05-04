import { getTranslations } from "next-intl/server";
import Link from "next/link";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const t = await getTranslations("Navbar");

  const { locale } = await params;

  return (
    <main className="p-10">
      <h1 className="text-4xl font-bold mb-6">
        AWS Academy
      </h1>

      <nav className="flex gap-4">
        <Link href={`/${locale}/networking`}>
          {t("networking")}
        </Link>
      </nav>
    </main>
  );
}