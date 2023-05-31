import React from "react";

import styles from "./Navbar.module.css";

class Navbar extends React.Component {
    render() {
        return(
            <>
            <div className={styles.nav}>
                <div className={styles.title}> Movie Flix App </div>
                <div className={styles.cartContainer}>
                    <img className={styles.cartIcon} src="https://cdn-icons-png.flaticon.com/128/891/891462.png" alt="cart-icon"/>
                    <span className={styles.cartCount}> 3 </span>
                </div>
            </div>
            </>
        )
    }
}

export default Navbar;