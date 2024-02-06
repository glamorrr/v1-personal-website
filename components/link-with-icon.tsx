import Link from 'next/link';
import React from 'react';
import { Icon } from '@iconify/react';

type Props = {
  href: string;
  children: React.ReactNode;
  isExternal?: boolean;
};

const LinkWithIcon = ({ href, children, isExternal = false }: Props) => {
  return (
    <Link
      href={href}
      className="inline-flex space-x-2 items-center hover:underline"
      target={isExternal ? '_blank' : undefined}
    >
      {children} <Icon icon="radix-icons:arrow-top-right" className="ml-0.5" />
    </Link>
  );
};

export { LinkWithIcon };
