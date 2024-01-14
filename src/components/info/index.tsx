'use client'

import styles from './index.module.scss';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Info() {
    const [latestRelease, setLatestRelease] = useState<any>(undefined);

    useEffect(() => {
        (async () => {
            const response = await fetch('https://api.github.com/repos/enderastronaute/lighter/releases/latest');

            const data = await response.json();
            
            setLatestRelease(data);
        })();
    }, []);

    return (
        <>
            {
                latestRelease && <header className={styles.header}>{latestRelease.name} is out!&nbsp; <Link href={`https://github.com/ENDERastronaute/Lighter/releases/tag/${latestRelease.tag_name}`}>Go check it out!</Link></header>
            }
        </>
    )
}