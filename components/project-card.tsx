import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { cn } from '@/lib/utils';

type Props = {
  title: string;
  href: string;
  img: StaticImageData;
  isHighlighted?: boolean;
  isLarge?: boolean;
  className?: string;
};

const ProjectCard = ({
  isHighlighted = false,
  isLarge = false,
  title,
  href,
  img,
  className,
}: Props) => {
  return (
    <Link
      href={href}
      className={cn('relative hover:scale-105 transition-transform bg-white', className)}
    >
      {isHighlighted && (
        <div className="absolute top-0 flex w-full justify-center">
          <div className="left-0 h-[1px] animate-border-width rounded-full bg-gradient-to-r from-fuchsia-200 via-fuchsia-600 to-fuchsia-200" />
        </div>
      )}
      <div
        className={cn(
          'space-y-4 border border-slate-300 rounded-lg p-4',
          isHighlighted && 'bg-gradient-to-b from-slate-50'
        )}
      >
        <Image
          priority={isHighlighted}
          className="rounded-md border border-slate-300"
          src={img}
          alt="project movie browser"
          width={544 * 1.4}
          height={326 * 1.4}
        />
        <div className="flex justify-between items-center">
          <h3 className={cn('font-medium', !isLarge && 'text-sm')}>{title}</h3>
          <Icon icon="radix-icons:arrow-right" className={cn(isLarge && 'text-2xl')} />
        </div>
      </div>
    </Link>
  );
};

export { ProjectCard };
