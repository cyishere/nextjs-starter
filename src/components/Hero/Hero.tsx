import { MDXRemote } from 'next-mdx-remote/rsc';

import { COMPONENTS_MAP } from '../mdx-components';
import styles from './Hero.module.css';

type HeroProps = {
  title?: string;
  content?: string;
};

const Hero: React.FC<HeroProps> = ({ title, content }) => {
  return (
    <article className={styles.wrapper}>
      <div className="container region flow article">
        <h1>{title}</h1>
        {content && <MDXRemote source={content} components={COMPONENTS_MAP} />}
      </div>
    </article>
  );
};

export default Hero;
