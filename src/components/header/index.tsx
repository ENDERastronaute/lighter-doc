import Image from "next/image";
import logo from '@public/LighterLogo.svg';
import styles from './index.module.scss';
import MenuIcon from '@mui/icons-material/Menu';

interface HeaderProps {
    showMenu: boolean;
    handleMenu: () => void;
}

export default function Header({ showMenu, handleMenu }: HeaderProps) {
    return (
        <header className={styles.header}>
            <h2><Image src={logo} alt="logo" width={50} height={50}></Image> Lighter</h2>
            <button onClick={handleMenu}><MenuIcon className={styles.icon}></MenuIcon></button>
        </header>
    )
}