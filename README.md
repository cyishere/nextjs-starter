# A Next.js Project Starter

This starter uses [MDX](https://mdxjs.com/) as main content/page, the methods about processing the `.mdx` files are defined in `src/utils/getAllPosts.js`. Also uses [styled-components](https://styled-components.com/) for styling.

For the code block syntax highlighting, this starter uses the [prism-react-renderer](https://github.com/FormidableLabs/prism-react-renderer) dependency. More information in `src/components/CodeBlock.js`.

Posts are copied from [this Eleventy starter](https://hylia.website/).

## Install

```bash
yarn install

# or

npm install
```

## Run Locally

**⚠️ NOTE**: If you're using newer versions of Node.js (particularly version 17+), you'll need to modify the `dev` and `build` scripts in your `package.json` file as follows:

```
"dev": "NODE_OPTIONS=--openssl-legacy-provider next dev",
"build": "NODE_OPTIONS=--openssl-legacy-provider next build",
```

```bash
yarn dev

# or

npm run dev
```

## Resources

- [Markdown/MDX with Next.js](https://nextjs.org/blog/markdown)
- [How To Build A Blog With Next And MDX](https://www.smashingmagazine.com/2020/09/build-blog-nextjs-mdx/)
