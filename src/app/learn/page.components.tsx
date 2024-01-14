'use client'

import Header from "@/components/header";
import { useState } from "react";
import Menu from "./_components/menu";

export default function Learn() {
    const [showMenu, setShowMenu] = useState<boolean>(false);

    const handleMenu = () => {
        setShowMenu(!showMenu);
    }

    return (
        <>
            <Header handleMenu={handleMenu} showMenu={showMenu}></Header>
            <Menu showMenu={showMenu}></Menu>
        </>
    )
}