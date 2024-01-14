'use client'

import styles from './index.module.scss';
import { useEffect, useState } from 'react';
import { fetchLatestRelease } from './server';
import Link from 'next/link';

export default function Header() {
    const [latestRelease, setLatestRelease] = useState<string | undefined>(undefined);

    useEffect(() => {
        (async () => {
            const release = await fetchLatestRelease();

            setLatestRelease(release);
        })();
    }, []);

    return (
        <>
            {
                latestRelease && <header className={styles.header}>{latestRelease} is out!&nbsp; <Link href='/documentation/v1.x'>Go check it out!</Link></header>
            }
        </>
    )
}