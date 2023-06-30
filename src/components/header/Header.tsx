import React from 'react';
import Image from 'next/image';
import Logo from '../../../public/logo.png'
import Link from "next/link"
import styles from './Header.module.css'

import LanguageSwitcher from '../langSwitcher/LanguageSwitcher';


const Header = () => {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <Link href="/" passHref>
                    <Image 
                    src={Logo} 
                    alt="itmo-logo" 
                    width={150} 
                    height={55}
                    style={{ cursor: "pointer" }}
                    />
                    
                </Link>
                <LanguageSwitcher/>
            </div>
        </div>
    );
};

export default Header;