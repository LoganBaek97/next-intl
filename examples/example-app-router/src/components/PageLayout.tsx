import NextLink from 'next/link';
import {ReactNode} from 'react';
import {Link} from '@/i18n/routing';

type Props = {
  children?: ReactNode;
  title: ReactNode;
};

export default function PageLayout({children, title}: Props) {
  return (
    <div className="relative flex grow flex-col bg-slate-850 py-36">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-1 size-[20500px] translate-x-[-47.5%] rounded-full bg-gradient-to-b from-slate-900 via-cyan-500" />
      </div>
      <div className="container relative flex grow flex-col px-4">
        <div className="flex flex-col gap-4 text-white">
          <Link
            className="mb-10 rounded-xl border text-5xl"
            href="/pathnames?locale=en"
          >
            {"I'm i18n Link. Click me to reproduce the issue"}
          </Link>
          <NextLink
            className="mb-10 rounded-xl border text-5xl"
            href="/pathnames?locale=en"
          >
            {"I'm a NextLink"}
          </NextLink>
        </div>
        <h1 className="text-3xl font-semibold leading-tight tracking-tight text-white md:text-5xl">
          {title}
        </h1>
        <div className="mt-6 text-gray-400 md:text-lg">{children}</div>
      </div>
    </div>
  );
}
