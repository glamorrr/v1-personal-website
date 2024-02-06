import { buttonVariants } from '@/components/ui/button';
import { DefaultLayout } from '@/layouts';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import slicingPic from '@/public/images/slicing-screenshot.png';
import { DemoCard } from '@/components/demo-card';
import { LinkWithIcon } from '@/components/link-with-icon';

export default function SlicingProjectPage() {
  return (
    <DefaultLayout>
      <main className="space-y-16">
        <header>
          <Link
            href="/"
            className="inline-flex space-x-2 items-center hover:underline text-slate-500 text-sm"
          >
            <Icon icon="radix-icons:arrow-left" className="mr-1" />
            Back to home
          </Link>
        </header>
        <section className="space-y-3">
          <h2 className="font-medium">Slicing</h2>
          <p className="text-slate-500">Convert website designs into HTML and CSS.</p>
        </section>
        <section className="space-y-3">
          <h2 className="font-medium">Demo</h2>
          <DemoCard img={slicingPic} />
          <Link target="_blank" href="https://glamorrr.vercel.app/" className={buttonVariants()}>
            See website
          </Link>
        </section>
        <section className="space-y-3">
          <h2 className="font-medium">Code</h2>
          <div className="space-y-2">
            <p className="text-slate-500">
              <LinkWithIcon href="https://github.com/glamorrr/cool-sites" isExternal>
                GitHub
              </LinkWithIcon>
            </p>
          </div>
        </section>
      </main>
    </DefaultLayout>
  );
}
