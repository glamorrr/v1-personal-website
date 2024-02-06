import { buttonVariants } from '@/components/ui/button';
import { DefaultLayout } from '@/layouts';
import { LinkWithIcon } from '@/components/link-with-icon';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { DemoCard } from '@/components/demo-card';

export default function QuizProjectPage() {
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
          <h2 className="font-medium">Fun quiz</h2>
          <p className="text-slate-500">
            A web application that allows user to do fun quizzes about general knowledge, sports,
            and animals. Users can view the scores achieved in the quizzes they have completed.
            User’s data is saved in Browser’s Local Storage. This website requests Open Trivia DB
            API to retrieve quiz questions. To handle client interactivity, React.js and Chakra UI
            is used.
          </p>
        </section>
        <section className="space-y-3">
          <h2 className="font-medium">Demo</h2>
          <DemoCard video="/videos/quiz-demo.mp4" />
          <Link
            target="_blank"
            href="https://local-quiz-app.netlify.app/"
            className={buttonVariants()}
          >
            See website
          </Link>
        </section>
        <section className="space-y-3">
          <h2 className="font-medium">Code</h2>
          <div className="space-y-2">
            <p className="text-slate-500">
              <LinkWithIcon href="https://github.com/glamorrr/quiz" isExternal>
                GitHub
              </LinkWithIcon>
            </p>
          </div>
        </section>
      </main>
    </DefaultLayout>
  );
}
