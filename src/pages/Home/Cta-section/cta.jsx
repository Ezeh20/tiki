import React from 'react'
import Container from '../../../Components/Container'
import styles from './cta.module.scss'
import { LandindData } from './data'
const cta = LandindData[0]
const { title, content, img, button1, button2 } = cta
const CtaSection = () => {
    return (
        <section className={styles.cta}>
            <Container>
                <div className={styles.cta_top}>
                    <p className={styles.cta_title}>{title}</p>
                    <p className={styles.cta_content}>{content}</p>
                    <div className={styles.btn}>
                        <button className={styles.button}>{button1}</button>
                        <button className={`${styles.button} ${styles.button2}`}>{button2}</button>
                    </div>
                </div>
                <div className={styles.img}>
                <img src={img} alt="cta-img" className={styles.ctaImg} />
                </div>
            </Container>
        </section>
    )
}

export default CtaSection