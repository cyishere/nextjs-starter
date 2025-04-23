import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypeUnwrapImages from 'rehype-unwrap-images';

import { COMPONENTS_MAP } from './mdx-components';

type CustomMDXRemoteProps = {
  content: string;
};

const CustomMDXRemote: React.FC<CustomMDXRemoteProps> = ({ content }) => {
  return (
    <MDXRemote
      source={content}
      components={COMPONENTS_MAP}
      options={{
        mdxOptions: {
          rehypePlugins: [rehypeUnwrapImages]
        }
      }}
    />
  );
};

export default CustomMDXRemote;
