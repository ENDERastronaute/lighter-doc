'use client'

import styles from './index.module.scss';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Header() {
    const [latestRelease, setLatestRelease] = useState<string | undefined>(undefined);

    useEffect(() => {
        (async () => {
            const response = await fetch('https://api.github.com/repos/enderastronaute/lighter/releases/latest');

            const data = await response.json();

            setLatestRelease(data.name);
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