import { buttonVariants } from '@/components/ui/button';
import { DefaultLayout } from '@/layouts';
import { LinkWithIcon } from '@/components/link-with-icon';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { DemoCard } from '@/components/demo-card';

export default function CafeBrowserProjectPage() {
  return (
    <DefaultLayout meta={{ title: 'Cafe browser' }}>
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
          <h2 className="font-medium">Cafe Browser</h2>
          <p className="text-gray-500">
            The placement of 15 cafes point within the Setiabudi area in South Jakarta. This website
            uses <mark>Leaflet.js</mark> to display cafes point on the map. <mark>Next.js</mark> and{' '}
            <mark>Material UI</mark> is utilized to handle client interactivity.
          </p>
        </section>
        <section className="space-y-3">
          <h2 className="font-medium">Demo</h2>
          <DemoCard video="/videos/cafe-demo.mp4" />
          <Link
            target="_blank"
            href="https://kopisetiabudi.vercel.app/"
            className={buttonVariants()}
          >
            See website
          </Link>
        </section>
        <section className="space-y-3">
          <h2 className="font-medium">Code</h2>
          <div className="space-y-2">
            <p className="text-gray-500">
              <LinkWithIcon href="https://github.com/glamorrr/project-gis" isExternal>
                GitHub
              </LinkWithIcon>
            </p>
          </div>
        </section>
      </main>
    </DefaultLayout>
  );
}
