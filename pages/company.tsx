import { buttonVariants } from '@/components/ui/button';
import { DefaultLayout } from '@/layouts';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import companyPic from '@/public/images/company-screenshot.png';
import { DemoCard } from '@/components/demo-card';

export default function CompanyProfileProjectPage() {
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
          <h2 className="font-medium">Company profile</h2>
          <p className="text-slate-500">
            A static site providing information about a company. Created using Next.js and Tailwind
            CSS.
          </p>
        </section>
        <section className="space-y-3">
          <h2 className="font-medium">Demo</h2>
          <DemoCard img={companyPic} />
          <Link
            target="_blank"
            href="https://cipta-mikro-material.com/"
            className={buttonVariants()}
          >
            See website
          </Link>
        </section>
      </main>
    </DefaultLayout>
  );
}
