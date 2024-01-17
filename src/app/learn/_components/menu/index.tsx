
import { useState } from 'react';
import styles from '../../page.module.scss';
import ListItem from '../listItem';
import Link from 'next/link';
import ListLink from '../listLink';

interface MenuProps {
    showMenu: boolean;
    activeSection: string;
}

export default function Menu({ showMenu, activeSection }: MenuProps) {
    const [currentLi, setCurrentLi] = useState<HTMLLIElement|undefined>(undefined);

    const handleClick = (evt: any) => {
        if (currentLi) {
            currentLi.classList.remove(styles.active);
        }

        evt.currentTarget.classList.add(styles.active);

        setCurrentLi(evt.currentTarget);
    }

    return (
        <menu className={`${styles.menu} ${showMenu ? styles.active : ''}`}>
            <ul>
                <li className={styles.label}>
                    Getting Started
                </li>
                <ListItem title='Installation' handleClick={handleClick}>
                    <ListLink href='#install-composer' activeSection={activeSection}>Composer</ListLink>
                    <ListLink href='#install-git' activeSection={activeSection}>Git</ListLink>
                </ListItem>
                <ListItem title='Routes' handleClick={handleClick}>
                    <ListLink href='#basic' activeSection={activeSection}>Basic</ListLink>
                    <ListLink href='#mvc' activeSection={activeSection}>MVC</ListLink>
                </ListItem>
            </ul>
        </menu>
    )
}