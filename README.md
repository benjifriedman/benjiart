This is what a page looks like:

import Head from "next/head";
import Link from "next/link";
// import Script from "next/script";
import Layout from "../../components/layout";

export default function SecondPost() {
return (
<Layout>

<Head>
<title>Second Post</title>
</Head>

      <h1>Second Post</h1>
      <p>This is also some text.</p>
      <p>What if this was a text post?</p>
      {/* <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2> */}
    </Layout>

);
}
