import { DefaultLayout } from '@/layouts';
import { LinkWithIcon } from '@/components/link-with-icon';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { DemoCard } from '@/components/demo-card';
import documentDatabasePic from '@/public/images/document-dd.png';
import documentUIPic1 from '@/public/images/document-ui-1.jpg';
import documentUIPic2 from '@/public/images/document-ui-2.jpg';
import documentUIPic3 from '@/public/images/document-ui-3.jpg';
import documentUIPic4 from '@/public/images/document-ui-4.jpg';
import documentUIPic5 from '@/public/images/document-ui-5.jpg';

export default function DocumentTrackingProjectPage() {
  return (
    <DefaultLayout meta={{ title: 'Document tracking' }}>
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
          <h2 className="font-medium">Document tracking</h2>
          <p className="text-gray-500">
            A web application for distributing and tracking documents. Admins can send documents to
            designated PICs via WhatsApp, who then confirm receipt through a web form. Developed
            using <mark>React.js</mark> for the frontend, <mark>Tailwind CSS</mark> for styling,{' '}
            <mark>Express.js</mark> for the backend, <mark>Prisma</mark> as the ORM, and integrates
            with WhatsApp using the <mark>Whapify.id API</mark>.
          </p>
        </section>
        <section className="space-y-3">
          <h2 className="font-medium">Demo</h2>
          <DemoCard isHighlighted video="/videos/document-demo.mp4" />
        </section>
        <section className="space-y-3">
          <h2 className="font-medium">Goals</h2>
          <ol className="list-decimal ml-5 space-y-2 text-gray-500">
            <li>Streamline document distribution via WhatsApp and Google Drive.</li>
            <li>Capture receipt confirmation with a timestamp.</li>
            <li>Support easy tracking for reports.</li>
          </ol>
        </section>
        <section className="space-y-3">
          <h2 className="font-medium">Implementation process</h2>
          <ol className="list-decimal ml-5 space-y-2 text-gray-500">
            <li>Database design</li>
            <li>UI design</li>
            <li>Coding</li>
          </ol>
        </section>
        <section className="space-y-3 ">
          <h2 className="font-medium">Database design</h2>
          <DemoCard img={documentDatabasePic} width={618} height={408} />
        </section>
        <section className="space-y-3 ">
          <h2 className="font-medium">UI design</h2>
          <DemoCard img={documentUIPic1} width={618} height={408} />
          <DemoCard img={documentUIPic2} width={618} height={408} />
          <DemoCard img={documentUIPic3} width={618} height={408} />
          <DemoCard img={documentUIPic4} width={618} height={408} />
          <DemoCard img={documentUIPic5} width={618} height={408} />
        </section>
        <section className="space-y-3">
          <h2 className="font-medium">Code</h2>
          <div className="space-y-2">
            <p className="text-gray-500">
              Client —{' '}
              <LinkWithIcon
                href="https://github.com/glamorrr/terima-dokumen-fe"
                isExternal
                className="gtm-project-code-link"
              >
                GitHub
              </LinkWithIcon>
            </p>
            <p className="text-gray-500">
              Server —{' '}
              <LinkWithIcon
                href="https://github.com/glamorrr/terima-dokumen-be"
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
