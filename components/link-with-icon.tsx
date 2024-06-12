import Link from 'next/link';
import React from 'react';
import { Icon } from '@iconify/react';
import { cn } from '@/lib/utils';

type Props = {
  href: string;
  children: React.ReactNode;
  id?: string;
  isExternal?: boolean;
  className?: string;
};

const LinkWithIcon = ({ href, children, isExternal = false, id, className }: Props) => {
  return (
    <Link
      id={id}
      href={href}
      className={cn('inline-flex space-x-2 items-center hover:underline', className)}
      target={isExternal ? '_blank' : undefined}
    >
      {children} <Icon icon="radix-icons:arrow-top-right" className="ml-0.5" />
    </Link>
  );
};

export { LinkWithIcon };
