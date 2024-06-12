import { buttonVariants } from '@/components/ui/button';
import { DefaultLayout } from '@/layouts';
import { LinkWithIcon } from '@/components/link-with-icon';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { DemoCard } from '@/components/demo-card';
import micrositeDatabasePic from '@/public/images/microsite-dd.png';
import micrositeDeploymentPic from '@/public/images/microsite-deployment.jpg';
import { cn } from '@/lib/utils';

export default function MicrositeBuilderProjectPage() {
  return (
    <DefaultLayout meta={{ title: 'Microsite builder' }}>
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
          <h2 className="font-medium">Microsite builder</h2>
          <p className="text-gray-500">
            A web application for creating a simple site and allows users to share multiple links.
            This website uses <mark>Express.js</mark> and <mark>PostgreSQL</mark> on the server. API
            endpoints is tested using <mark>Jest</mark>. To handle client interactivity, this
            website utilizes <mark>React.js</mark> and <mark>Chakra UI</mark>.
          </p>
        </section>
        <section className="space-y-3">
          <h2 className="font-medium">Demo</h2>
          <DemoCard video="/videos/microsite-demo.mp4" />
          <Link
            target="_blank"
            href="https://goodzid-staging.netlify.app/"
            className={cn(buttonVariants(), 'gtm-live-demo-link')}
          >
            See website
          </Link>
        </section>
        <section className="space-y-3">
          <h2 className="font-medium">Login credentials</h2>
          <div className="space-y-2">
            <p className="text-gray-500">Email: goodz@gmail.com</p>
            <p className="text-gray-500">Password: goodz123</p>
          </div>
        </section>
        <section className="space-y-3 ">
          <h2 className="font-medium">Deployment</h2>
          <DemoCard isBleed img={micrositeDeploymentPic} width={648} height={480} />
        </section>
        <section className="space-y-3 ">
          <h2 className="font-medium">Database design</h2>
          <DemoCard isBleed img={micrositeDatabasePic} width={648} height={488} />
        </section>
        <section className="space-y-3">
          <h2 className="font-medium">Code</h2>
          <div className="space-y-2">
            <p className="text-gray-500">
              Client —{' '}
              <LinkWithIcon href="https://github.com/glamorrr/goodz-frontend" isExternal>
                GitHub
              </LinkWithIcon>
            </p>
            <p className="text-gray-500">
              Server —{' '}
              <LinkWithIcon href="https://github.com/glamorrr/goodz-backend" isExternal>
                GitHub
              </LinkWithIcon>
            </p>
          </div>
        </section>
      </main>
    </DefaultLayout>
  );
}
