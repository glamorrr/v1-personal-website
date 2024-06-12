import { buttonVariants } from '@/components/ui/button';
import { DefaultLayout } from '@/layouts';
import Image from 'next/image';
import profilePic from '@/public/images/pp.jpeg';
import moviePic from '@/public/images/movie-screenshot.png';
import micrositePic from '@/public/images/microsite-screenshot.png';
import cafePic from '@/public/images/cafe-screenshot.png';
import companyPic from '@/public/images/company-screenshot.png';
import quizPic from '@/public/images/quiz-screenshot.png';
import slicingPic from '@/public/images/slicing-screenshot.png';
import { ProjectCard } from '@/components/project-card';
import { LinkWithIcon } from '@/components/link-with-icon';
import Link from 'next/link';

export default function Home() {
  return (
    <DefaultLayout meta={{ title: 'Toni Anugrah' }}>
      <main className="space-y-16">
        <header className="flex sm:space-x-6 sm:items-center justify-between sm:flex-row flex-col sm:space-y-0 space-y-6 items-stretch">
          <section className="flex space-x-4 items-center">
            <Image
              className="w-16 h-16 rounded-full border"
              src={profilePic}
              alt="profile picture"
              width={100}
              height={100}
            />
            <div>
              <h1 className="font-medium">Toni Anugrah</h1>
              <p className="text-gray-500">Final-Year Student</p>
            </div>
          </section>
          <Link href="mailto:toniianugrah@gmail.com" className={buttonVariants()}>
            Contact
          </Link>
        </header>
        <section className="space-y-3">
          <h2 className="font-medium">About me</h2>
          <p className="text-gray-500">
            Likes to explore things about <mark className="mark">software</mark>.
          </p>
        </section>
        <section className="space-y-3">
          <h2 className="font-medium">Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <ProjectCard
              isHighlighted
              isLarge
              title="Movie browser"
              href="/movie"
              img={moviePic}
              className="col-span-1 sm:col-span-2"
            />
            <ProjectCard title="Microsite builder" href="/microsite" img={micrositePic} />
            <ProjectCard title="Cafe browser" href="/cafe" img={cafePic} />
            <ProjectCard title="Company profile" href="/company" img={companyPic} />
            <ProjectCard title="Fun quiz" href="/quiz" img={quizPic} />
            <ProjectCard title="Slicing" href="/slicing" img={slicingPic} />
          </div>
        </section>
        <section className="space-y-3">
          <h2 className="font-medium">Certifications</h2>
          <div className="space-y-2">
            <p className="text-gray-500">
              Becoming Frontend Developer —{' '}
              <LinkWithIcon href="https://www.dicoding.com/certificates/72ZDEMN6LPYW" isExternal>
                Dicoding Indonesia
              </LinkWithIcon>
            </p>
            <p className="text-gray-500">
              Becoming Backend Developer —{' '}
              <LinkWithIcon href="https://www.dicoding.com/certificates/QLZ9297GMX5D" isExternal>
                Dicoding Indonesia
              </LinkWithIcon>
            </p>
          </div>
        </section>
        <section className="space-y-3">
          <h2 className="font-medium">Social links</h2>
          <div className="space-y-2">
            <p className="text-gray-500">
              Email —{' '}
              <LinkWithIcon href="mailto:toniianugrah@gmail.com">
                toniianugrah@gmail.com
              </LinkWithIcon>
            </p>
            <p className="text-gray-500">
              GitHub —{' '}
              <LinkWithIcon href="https://github.com/glamorrr" isExternal>
                @glamorrr
              </LinkWithIcon>
            </p>
          </div>
        </section>
      </main>
    </DefaultLayout>
  );
}
