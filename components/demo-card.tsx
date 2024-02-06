import { cn } from '@/lib/utils';
import Image, { StaticImageData } from 'next/image';

type Props = {
  video?: string;
  img?: StaticImageData;
  className?: string;
};

const DemoCard = ({ video, className, img }: Props) => {
  return (
    <div className={cn('relative bg-white', className)}>
      <div className="absolute top-0 flex w-full justify-center">
        <div className="left-0 h-[1px] animate-border-width rounded-full bg-gradient-to-r from-slate-200 via-slate-600 to-slate-200 " />
      </div>
      <div className="space-y-4 border border-slate-300 rounded-lg bg-gradient-to-b from-slate-50 sm:p-4 p-1">
        {img && (
          <Image
            priority={true}
            className="rounded-md border border-slate-300"
            src={img}
            alt="project movie browser"
            width={544 * 1.4}
            height={326 * 1.4}
          />
        )}
        {!img && (
          <video
            className="w-full rounded-md sm:rounded  border border-slate-300"
            width="1440"
            height="810"
            controls={true}
            autoPlay={true}
          >
            <source src={video} type="video/mp4" />
          </video>
        )}
      </div>
    </div>
  );
};

<video className="w-full max-w-screen-sm mt-2 rounded" width="1440" height="810">
  <source src="/videos/movie-demo.mp4" type="video/mp4" />
</video>;

export { DemoCard };
