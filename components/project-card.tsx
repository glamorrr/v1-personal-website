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
    <Link href={href} className={cn('relative group', className)}>
      {isHighlighted && (
        <div className="absolute -top-[1px]  flex w-full justify-center">
          <div className="left-0 h-[1px] animate-border-width bg-gradient-to-r from-primary-200 via-primary-500 to-primary-200" />
        </div>
      )}
      <div
        className={cn(
          'space-y-4 ring-1 ring-gray-950/10 hover:ring-gray-700/20 shadow-sm shadow-gray-200 transition-all rounded-lg p-4 bg-white',
          isHighlighted && 'bg-gradient-to-b from-gray-50'
        )}
      >
        <div className="aspect-auto overflow-hidden rounded-md border border-gray-200">
          <Image
            priority={isHighlighted}
            className="group-hover:scale-110 transition-transform"
            src={img}
            alt="project movie browser"
            width={544 * 1.4}
            height={326 * 1.4}
          />
        </div>
        <div className="flex justify-between items-center">
          <h3 className={cn('font-medium', !isLarge && 'text-sm')}>{title}</h3>
          <Icon icon="radix-icons:arrow-right" className={cn(isLarge && 'text-2xl')} />
        </div>
      </div>
    </Link>
  );
};

export { ProjectCard };
