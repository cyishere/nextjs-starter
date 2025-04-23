import { MDXRemote } from 'next-mdx-remote/rsc';

import { COMPONENTS_MAP } from '../mdx-components';
import styles from './Info.module.css';

type InfoProps = {
  content?: string;
};

const Info: React.FC<InfoProps> = ({ content }) => {
  return (
    <>
      {content && (
        <div className={`flow ${styles.wrapper} article`}>
          <MDXRemote source={content} components={COMPONENTS_MAP} />
        </div>
      )}
    </>
  );
};

export default Info;
