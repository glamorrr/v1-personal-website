import { buttonVariants } from '@/components/ui/button';
import { DefaultLayout } from '@/layouts';
import Image from 'next/image';
import profilePic from '@/public/images/pp.jpeg';
import moviePic from '@/public/images/movie-screenshot.png';
import micrositePic from '@/public/images/microsite-screenshot.png';
import documentPic from '@/public/images/document-screenshot.png';
import cafePic from '@/public/images/cafe-screenshot.png';
import hrPic from '@/public/images/hr-screenshot.png';
import companyPic from '@/public/images/company-screenshot.png';
import quizPic from '@/public/images/quiz-screenshot.png';
import slicingPic from '@/public/images/slicing-screenshot.png';
import { ProjectCard } from '@/components/project-card';
import { LinkWithIcon } from '@/components/link-with-icon';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export default function Home() {
  return (
    <DefaultLayout meta={{ title: 'Toni Anugrah' }}>
      <main className="space-y-16">
        <header className="flex sm:space-x-6 sm:items-center justify-between sm:flex-row flex-col sm:space-y-0 space-y-6 items-stretch">
          <section className="flex space-x-4 items-center">
            <Image
              className="w-16 h-16 rounded-full"
              src={profilePic}
              alt="profile picture"
              width={100}
              height={100}
            />
            <div>
              <h1 className="font-medium">Toni Anugrah</h1>
              <p className="text-gray-500">Information Systems Graduate</p>
            </div>
          </section>
          <Link
            href="mailto:toniianugrah@gmail.com"
            className={cn('gtm-contact', buttonVariants())}
          >
            Contact
          </Link>
        </header>
        {/* <section className="space-y-3">
          <h2 className="font-medium">About me</h2>
          <p className="text-gray-500">I build web apps with user-friendly experience.</p>
        </section> */}
        <section className="space-y-3">
          <h2 className="font-medium">Tools</h2>
          <p className="flex gap-3 flex-wrap">
            <mark>React</mark>
            <mark>Tailwind CSS</mark>
            <mark>Figma</mark>
            <mark>Express</mark>
            <mark>Prisma</mark>
            <mark>SQL</mark>
            <mark>Wordpress</mark>
            <mark>Wix</mark>
            <mark>Looker Studio</mark>
            <mark>Postman</mark>
          </p>
        </section>
        <section className="space-y-3">
          <h2 className="font-medium">Explorations</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <ProjectCard
              title="Movie browser"
              href="/movie"
              img={moviePic}
              isHighlighted
              isLarge
              className="col-span-1 sm:col-span-2"
            />
            <ProjectCard title="Microsite builder" href="/microsite" img={micrositePic} />
            <ProjectCard title="Document tracking" href="/document" img={documentPic} />
            <ProjectCard title="Company profile" href="/company" img={companyPic} />
            <ProjectCard title="Cafe browser" href="/cafe" img={cafePic} />
            <ProjectCard title="HR hiring dashboard" href="/hr" img={hrPic} />
            <ProjectCard title="Slicing" href="/slicing" img={slicingPic} />
            <ProjectCard title="Fun quiz" href="/quiz" img={quizPic} />
          </div>
        </section>
        {/* <section className="space-y-3">
          <h2 className="font-medium">Certifications</h2>
          <div className="space-y-2">
            <p className="text-gray-500">
              Menjadi Frontend Developer Expert —{' '}
              <LinkWithIcon
                href="https://www.dicoding.com/certificates/72ZDEMN6LPYW"
                isExternal
                id="gtm-fe-certification"
                className="gtm-certification"
              >
                Dicoding Indonesia
              </LinkWithIcon>
            </p>
            <p className="text-gray-500">
              Menjadi Backend Developer Expert —{' '}
              <LinkWithIcon
                href="https://www.dicoding.com/certificates/QLZ9297GMX5D"
                isExternal
                id="gtm-be-certification"
                className="gtm-certification"
              >
                Dicoding Indonesia
              </LinkWithIcon>
            </p>
          </div>
        </section> */}
        <section className="space-y-3">
          <h2 className="font-medium">Social links</h2>
          <div className="space-y-2">
            <p className="text-gray-500">
              Email —{' '}
              <LinkWithIcon
                href="mailto:toniianugrah@gmail.com"
                className="gtm-social-link"
                id="gtm-social-link-mail"
              >
                toniianugrah@gmail.com
              </LinkWithIcon>
            </p>
            <p className="text-gray-500">
              LinkedIn —{' '}
              <LinkWithIcon
                href="https://www.linkedin.com/in/tonianugrah"
                isExternal
                className="gtm-social-link"
                id="gtm-social-link-linkedin"
              >
                @tonianugrah
              </LinkWithIcon>
            </p>
            <p className="text-gray-500">
              GitHub —{' '}
              <LinkWithIcon
                href="https://github.com/glamorrr"
                isExternal
                className="gtm-social-link"
                id="gtm-social-link-github"
              >
                @glamorrr
              </LinkWithIcon>
            </p>
          </div>
        </section>
      </main>
    </DefaultLayout>
  );
}
