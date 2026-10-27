"use client";

import { useTransition } from "react";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import { routing } from "@/i18n/routing";

export function LocaleSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations("LocaleSwitcher");
  const [isPending, startTransition] = useTransition();

  function handleChange(nextLocale: (typeof routing.locales)[number]) {
    if (nextLocale === locale) return;
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  }

  return (
    <div
      role="group"
      aria-label={t("label")}
      className="flex items-center gap-1 rounded-lg border border-white/15 p-1 text-sm font-semibold"
    >
      {routing.locales.map((loc) => (
        <button
          key={loc}
          type="button"
          onClick={() => handleChange(loc)}
          disabled={isPending}
          aria-current={locale === loc}
          aria-label={t(loc)}
          className={`px-2 py-2 rounded-md transition-all duration-300 disabled:opacity-60 ${
            locale === loc
              ? "bg-primary text-background"
              : "text-primary hover:bg-primary/10"
          }`}
        >
          {loc === "pt-BR" ? "PT" : "EN"}
        </button>
      ))}
    </div>
  );
}
