import { buttonVariants } from '@/components/ui/button';
import { DefaultLayout } from '@/layouts';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import hrPic from '@/public/images/hr-screenshot.png';
import { DemoCard } from '@/components/demo-card';
import { cn } from '@/lib/utils';

export default function HrProjectPage() {
  return (
    <DefaultLayout meta={{ title: 'HR hiring dashboard' }}>
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
          <h2 className="font-medium">HR hiring dashboard</h2>
          <p className="text-gray-500">
            A clean and easy to use dashboard created with <mark>Looker Studio</mark>, designed to
            help HR teams track candidates across different stages. It gives a quick overview of the
            hiring process.
          </p>
        </section>
        <section className="space-y-3">
          <h2 className="font-medium">Demo</h2>
          <DemoCard isHighlighted img={hrPic} />
          <Link
            target="_blank"
            href="https://lookerstudio.google.com/reporting/2da1c080-db74-4f75-b556-6546f9b0253a"
            className={cn(buttonVariants(), 'gtm-live-demo-link')}
          >
            See website
          </Link>
        </section>
      </main>
    </DefaultLayout>
  );
}
