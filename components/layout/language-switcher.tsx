"use client";

import Link from "next/link";
import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";

export default function LanguageSwitcher() {
  const locale = useLocale();

  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    const segments = pathname.split("/");
    segments[1] = newLocale;

    return segments.join("/");
  };

  return (
    <div className="flex items-center gap-3">
      <Link
        href={switchLocale("sv")}
        className={`text-2xl transition-opacity duration-200 hover:opacity-100 ${
          locale === "sv" ? "opacity-100" : "opacity-40"
        }`}
      >
        🇸🇪
      </Link>

      <Link
        href={switchLocale("en")}
        className={`text-2xl transition-opacity duration-200 hover:opacity-100 ${
          locale === "en" ? "opacity-100" : "opacity-40"
        }`}
      >
        🇬🇧
      </Link>
    </div>
  );
}
