import { buttonVariants } from '@/components/ui/button';
import { DefaultLayout } from '@/layouts';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import slicingPic from '@/public/images/slicing-screenshot.png';
import { DemoCard } from '@/components/demo-card';
import { LinkWithIcon } from '@/components/link-with-icon';
import { cn } from '@/lib/utils';

export default function SlicingProjectPage() {
  return (
    <DefaultLayout meta={{ title: 'Slicing' }}>
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
          <h2 className="font-medium">Slicing</h2>
          <p className="text-gray-500">
            Convert website designs into <mark>HTML</mark> and <mark>CSS</mark>.
          </p>
        </section>
        <section className="space-y-3">
          <h2 className="font-medium">Demo</h2>
          <DemoCard img={slicingPic} />
          <Link
            target="_blank"
            href="https://sites.tonianugrah.my.id/"
            className={cn(buttonVariants(), 'gtm-live-demo-link')}
          >
            See website
          </Link>
        </section>
        <section className="space-y-3">
          <h2 className="font-medium">Code</h2>
          <div className="space-y-2">
            <p className="text-gray-500">
              <LinkWithIcon
                href="https://github.com/glamorrr/cool-sites"
                isExternal
                className="gtm-project-code-link"
              >
                GitHub
              </LinkWithIcon>
            </p>
          </div>
        </section>
      </main>
    </DefaultLayout>
  );
}
