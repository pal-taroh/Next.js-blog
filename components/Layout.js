import Head from "next/head";
import styles from "./layout.module.css"
import utilStyles from "../styles/utils.module.css"
import Link from "next/link";

const name = "pal-taroh";
export const siteTitle = "Next.js blog";

function Layout({ children, home }) {
    return (
    <diV className={styles.container}>
        <Head>
            <link rel = "icon" href = "/favicon.ico" />
        </Head>
        <header className={styles.header}>
            {home ? (
                <>
                <img
                src="/images/ペンギンビーム.png" 
                className={`${utilStyles.borderCircle} ${styles.headerHomeImage}`}
                />
                <h1 className={utilStyles.heading2Xl}>{name}</h1>
                </>
            ) : (
                <>
                <img
                src="/images/ペンギンビーム.png" 
                className={`${utilStyles.borderCircle}`}
                />
                <h1 className={utilStyles.heading2Xl}>{name}</h1></>
            )}
            
        </header>
        <main>{children}</main>
        {!home && (
            <div>
                <Link href="/">← ホームへ戻る</Link>
            </div>
        )}
    </diV>
    );
}

export default Layout;