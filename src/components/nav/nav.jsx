import React from "react";
import { useState } from "react";
import './nav.css'

import { TiHome } from 'react-icons/ti'
import { SiAboutdotme } from 'react-icons/si'
import { CgWebsite } from 'react-icons/cg'
import { IoMdContact } from 'react-icons/io'
const Nav = () => {
    const [activeNav, setActiveNav] = useState('#');

    return (
        <nav>
            <a href="# "><TiHome /></a>
            <a href="#about"><SiAboutdotme /></a>
            <a href="#works"><CgWebsite /></a>
            <a href="#contact"><IoMdContact /></a>
        </nav>
    )
}

export default Nav