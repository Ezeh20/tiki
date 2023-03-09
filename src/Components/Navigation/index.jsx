import React from 'react'
import Container from '../Container'
import styles from './nav.module.scss'
const list = ['Home', 'About', 'Portfolio', 'Contact']

const NavBar = () => {
  return (
    <header className={styles.header}>
      <Container>
        <nav className={styles.nav}>
          <h1 className={styles.logo}>Krypto</h1>
          <ul className={styles.ul}>
            {
              list.map((listOut, idx) => {
                return (
                  <li key={idx} className={styles.li}>{listOut}</li>
                )
              })
            }
          </ul>
          <button className={styles.cta}>Get Started</button>
        </nav>
      </Container>
    </header>
  )
}

export default NavBar