'use client'

import Header from "@/components/header";
import { useEffect, useState } from "react";
import Menu from "./_components/menu";
import Main from "./_components/main";
import styles from './page.module.scss';
import observeSections from "@/utils/observeSections";

export default function Learn() {
    const [showMenu, setShowMenu] = useState<boolean>(false);
    const [activeSection, setActiveSection] = useState<string>('');

    const handleMenu = () => {
        setShowMenu(!showMenu);
    }

    useEffect(() => {
        observeSections(setActiveSection, styles);
    }, []);

    return (
        <>
            <Header handleMenu={handleMenu} showMenu={showMenu}></Header>
            <Menu showMenu={showMenu} activeSection={activeSection}></Menu>
            <Main></Main>
        </>
    )
}