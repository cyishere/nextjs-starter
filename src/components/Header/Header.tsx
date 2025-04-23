'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { ExternalLink, RssIcon } from '../Icons';
import styles from './Header.module.css';

const navLinks = [
  {
    name: 'Home',
    link: '/'
  },
  {
    name: 'Blog',
    link: '/posts/1'
  },
  {
    name: 'About',
    link: '/about'
  },
  {
    name: 'GitHub',
    link: 'http://github.com/cyishere/nextjs-starter'
  }
];

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="container region repel">
      <Link href="/">NM Starter</Link>

      <nav>
        <ul role="list" className={`cluster ${styles.navBar}`}>
          {navLinks.map(({ name, link }) => {
            const isExternal = link.startsWith('http');
            const isActive =
              pathname.split('/')[1] === (!isExternal && link.split('/')[1]);

            return (
              <li key={link}>
                <Link className={isActive ? styles.active : ''} href={link}>
                  {name}
                  {isExternal && (
                    <>
                      {' '}
                      <ExternalLink width={16} height={16} />
                    </>
                  )}
                </Link>
              </li>
            );
          })}
          <li>
            <Link href="/">
              <RssIcon />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
