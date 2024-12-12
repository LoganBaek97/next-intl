import {setRequestLocale} from 'next-intl/server';

// It doesn't work.
// When production build, it will throw DYNAMIC_SERVER_USAGE error
export function generateStaticParams() {
  return [];
}

// It works
// export const dynamic = 'force-static';

export default function Page({params: {locale}}: {params: {locale: string}}) {
  setRequestLocale(locale);

  return <div>code page {new Date().toISOString()}</div>;
}
