import React from 'react'
import LogoImage from "../../assets/logo.png"
import styles from "./Logo.module.css"

function Logo() {
  return (
    <div>
        <img className={styles.logo} src={LogoImage} alt='logo' width={64}/>
    </div>
  )
}

export default Logo