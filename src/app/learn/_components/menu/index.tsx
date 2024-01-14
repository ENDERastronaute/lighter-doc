
import styles from '../../page.module.scss';

interface MenuProps {
    showMenu: boolean;
}

export default function Menu({ showMenu }: MenuProps) {
    return (
        <menu className={`${styles.menu} ${showMenu ? styles.active : ''}`}></menu>
    )
}