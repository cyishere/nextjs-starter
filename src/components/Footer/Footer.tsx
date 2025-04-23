import Link from 'next/link';

import { getTheme } from '@/actions/theme';
import ThemeSwitcher from '../ThemeSwitcher';
import styles from './Footer.module.css';

const Footer = async () => {
  const theme = await getTheme();

  return (
    <footer className={styles.wrapper}>
      <div className="container region text-light repel">
        <p>
          <strong>NM Starter Kit</strong> by{' '}
          <Link href="https://cyishere.dev" target="_blank">
            CY
          </Link>
          .
        </p>
        <ThemeSwitcher initialTheme={theme} />
      </div>
    </footer>
  );
};

export default Footer;
