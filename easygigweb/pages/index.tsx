import Head from 'next/head';
import Hero from './components/Hero';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>EasyGig Job Posting</h1>
      <Head>
        <title>EasyGig Job Posting</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
    </div>
  );
}
