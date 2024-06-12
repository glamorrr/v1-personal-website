import { cn } from '@/lib/utils';
import '@/styles/globals.css';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import { GoogleTagManager } from '@next/third-parties/google';

type NextPageWithLayout = NextPage & {
  // eslint-disable-next-line unused-imports/no-unused-vars
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

interface MyAppProps extends AppProps {
  Component: NextPageWithLayout;
}

const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }: MyAppProps) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <Head>
        <title>Toni Anugrah</title>
        <meta name="description" content="A guy who likes to explore things about software." />
        <link rel="icon" type="image/x-icon" href="/favicons/favicon.ico" />

        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta property="og:title" content="Toni Anugrah" />
        <meta
          property="og:desription"
          content="A guy who likes to explore things about software."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://tonianugrah.my.id/images/ogImage.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="tonianugrah.my.id" />
        <meta property="twitter:url" content="https://tonianugrah.my.id" />
        <meta name="twitter:title" content="Toni Anugrah" />
        <meta
          name="twitter:description"
          content="A guy who likes to explore things about software."
        />
        <meta name="twitter:image" content="https://tonianugrah.my.id/images/ogImage.jpg" />
      </Head>

      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>

      <div className={cn('text-slate900', inter.className)}>
        {getLayout(<Component {...pageProps} />)}
      </div>

      <GoogleTagManager gtmId="GTM-TFLH9BMT" />
    </>
  );
}
