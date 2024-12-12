import {cookies} from 'next/headers';
import {ReactNode} from 'react';
import './styles.css';

type Props = {
  children: ReactNode;
};

// Since we have a `not-found.tsx` page on the root, a layout file
// is required, even if it's just passing children through.
export default function RootLayout({children}: Props) {
  const cookie = cookies();
  // eslint-disable-next-line no-console
  console.log({cookie});
  return children;
}
