import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

const locales = ['mn', 'en'] as const;

type Locale = (typeof locales)[number];

export default getRequestConfig(async ({ locale }: { locale: string }) => {
  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  // Import locale messages
  return {
    messages: (await import(`../messages/${locale}.json`)).default
  };
});
