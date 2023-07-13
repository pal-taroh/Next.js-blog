import Head from 'next/head';
import Image from 'next/image';
import styles from "../styles/Home.module.css"
import Layout, { siteTitle } from '@/components/Layout';
import utilStyle from "../styles/utils.module.css"

import Link from 'next/link';
import { getPostsData } from '@/lib/post';

// SSGの場合
export async function getStaticProps() {
  const allPostData = await getPostsData();

return {
  props: {
    allPostData,
   },
  };
}

export default function Home({ allPostData }) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyle.headingMd}>
      <p>
      I will introduce my recommended works.
      </p>
      </section>

<section className={`${utilStyle.headingMd} ${utilStyle.padding1px}`}>
  <h2>🎶My Recommend</h2>
      <div className={styles.grid}>
      {allPostData.map(({ id, title, date, thumbnail }) => (
      <article key={id}>
      <Link href={`/posts/${id}`}>
        <img src={thumbnail} className={styles.thumbnailImage} />
      </Link>
      <Link href={`/posts/${id}`}>
      <p className={utilStyle.boldText}>{title}</p>
      </Link>
      <small className={utilStyle.lightText}>{date}</small>
      </article>
    ))}
  </div>
</section>
</Layout>
  );
}
