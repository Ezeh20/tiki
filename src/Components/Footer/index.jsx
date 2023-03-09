import React from 'react'
import Container from '../Container'
import styles from './footer.module.scss'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <Container>
        <div className={styles.footerContent}>
          <p className={styles.logo}>Krypto</p>
          <ul className={styles.links}>
            <li className={styles.linksHeader2}>About</li>
            <li>
              <ul className={styles.linkslink}>
                <li className={styles.linksHeader}>Services</li>
                <li>Services</li>
                <li>Services</li>
              </ul>
            </li>
            <li className={styles.linksHeader2}>Portfolio</li>
            <li>
              <ul className={styles.linkslink}>
                <li className={styles.linksHeader}>Contact</li>
                <li>Services</li>
                <li>Services</li>
                <li>Services</li>
                <li>Services</li>
                <li>Services</li>
                <li>Services</li>
                <li>Services</li>
              </ul>
            </li>
          </ul>
          <button className={styles.btn}>Get Started</button>
        </div>
      </Container>
    </div>
  )
}

export default Footer