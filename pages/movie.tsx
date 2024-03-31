import { buttonVariants } from '@/components/ui/button';
import { DefaultLayout } from '@/layouts';
import { LinkWithIcon } from '@/components/link-with-icon';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { DemoCard } from '@/components/demo-card';

export default function MovieBrowserProjectPage() {
  return (
    <DefaultLayout>
      <main className="space-y-16">
        <header>
          <Link
            href="/"
            className="inline-flex space-x-2 items-center hover:underline text-gray-500 text-sm"
          >
            <Icon icon="radix-icons:arrow-left" className="mr-1" />
            Back to home
          </Link>
        </header>
        <section className="space-y-3">
          <h2 className="font-medium">Movie browser</h2>
          <p className="text-gray-500">
            A web application for viewing and searching information related to movies. Movies data
            is sourced from the <mark>TMDb API</mark>. The application is developed using{' '}
            <mark>Next.js</mark>, with <mark>Tailwind CSS</mark> for styling.
          </p>
        </section>
        <section className="space-y-3">
          <h2 className="font-medium">Demo</h2>
          <DemoCard video="/videos/movie-demo.mp4" />
          <Link
            target="_blank"
            href="https://movielist.vercel.app/browse"
            className={buttonVariants()}
          >
            See website
          </Link>
        </section>
        <section className="space-y-3">
          <h2 className="font-medium">Code</h2>
          <div className="space-y-2">
            <p className="text-gray-500">
              <LinkWithIcon href="https://github.com/glamorrr/movielist-movie-app" isExternal>
                GitHub
              </LinkWithIcon>
            </p>
          </div>
        </section>
      </main>
    </DefaultLayout>
  );
}
