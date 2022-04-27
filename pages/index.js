import FrontPage from "../modules/front-page/FrontPage.js";
import data from "../public/data.json";
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home App</title>
      </Head>
      <div>
        <FrontPage data={data}/>
      </div>
    </>
  );
}
