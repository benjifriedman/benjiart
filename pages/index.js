import Head from "next/head";
import Link from "next/link";
import Date from "../components/date";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

import { getSortedPostsData } from "../lib/posts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      {/* <section className={`${utilStyles.headingMd} ${utilStyles.center}`}>
        <p style={{ marginBottom: "10px" }}>Posts</p>
      </section> */}

      {/* <Link href="/posts/second-post">
        <a>Second Post</a>
      </Link>

      <br />

      <Link href="/posts/first-post">
        <a>First Post</a>
      </Link> */}

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              {/* <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small> */}
            </li>
          ))}
        </ul>
        <p style={{ textAlign: "center" }}>
          <a href="https://benjifriedman.com">benjifriedman.com</a>
        </p>
      </section>
    </Layout>
  );
}
