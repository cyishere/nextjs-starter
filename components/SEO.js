import Head from "next/head";

const SEO = ({ title, description }) => {
  const content = description
    ? description
    : "Next.js wit MDX and styled-components";
  return (
    <Head>
      <title>{title} | Next.js Project Starter</title>
      <meta name="description" content={content} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default SEO;
