import { cn } from '@/lib/utils';
import Image, { StaticImageData } from 'next/image';

type Props = {
  video?: string;
  img?: StaticImageData;
  className?: string;
  width?: number;
  height?: number;
  isBleed?: boolean;
};

const DemoCard = ({ video, className, img, width, height, isBleed = false }: Props) => {
  return (
    <div
      className={cn(
        'relative bg-white',
        isBleed && 'lg:transform lg:-translate-x-[50%] lg:left-[50%] lg:w-[125%]',
        className
      )}
    >
      <div className="absolute -top-[1px] flex w-full justify-center">
        <div className="left-0 h-[1px] animate-border-width rounded-full bg-gradient-to-r from-primary-200 via-primary-500 to-primary-200 " />
      </div>
      <div className="space-y-4 ring-1 ring-gray-950/10 shadow shadow-gray-200 rounded-lg bg-gradient-to-b from-gray-50 sm:p-4 p-1">
        {img && (
          <Image
            priority={true}
            className="rounded-md border border-gray-200"
            src={img}
            alt="project movie browser"
            width={Math.floor((width ?? 544) * (isBleed ? 2.1 : 1.5))}
            height={Math.floor((height ?? 326) * (isBleed ? 2.1 : 1.5))}
          />
        )}
        {!img && (
          <video
            className="w-full rounded-md sm:rounded  border border-gray-200"
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

export { DemoCard };
