import Link from 'next/link';

import { ExternalLink } from './Icons';

interface TextLinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
  children: string;
  href: string;
}

const TextLink: React.FC<TextLinkProps> = ({ href, children, ...props }) => {
  return (
    <Link href={href} {...props}>
      {children}
      {href.startsWith('http') && (
        <>
          {' '}
          <ExternalLink width={16} height={16} />
        </>
      )}
    </Link>
  );
};

export default TextLink;
