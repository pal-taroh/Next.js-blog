import Head from "next/head";
import Link from "next/link";

export default function firstPost() {
    return (
        <div>
            <Head>
                <title>firstPost</title>
            </Head>
            <Link href="/">back</Link>
        </div>
    );
}