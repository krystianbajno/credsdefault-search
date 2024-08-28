'use client';

import styles from "@/app/page.module.scss";
import CredentialsSearch from "@/app/components/credential-search/credential-search";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.pageSection} id="credential-search">
        <CredentialsSearch />
      </section>
    </main>
  );
}
