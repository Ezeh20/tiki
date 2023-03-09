import React from 'react'
import Container from '../../../Components/Container'
import { LandindData } from '../Cta-section/data'
import styles from './content.module.scss'
const ContentData = LandindData[1]
const { title, img, img2, title2, content, button } = ContentData

const Content = () => {
    return (
        <section className={styles.content}>
            <Container>
                <p className={styles.contentTitle}>Our USP</p>
                <div className={styles.content_top}>
                    <img src={img} alt="img" className={styles.contentImg}/>
                    <div  className={styles.contentA}>
                        <p className={styles.content_title}>{title}</p>
                        <p className={styles.content_content}>{content}</p>
                        <div className={styles.btn}>
                            <button className={styles.button}>{button}</button>
                        </div>
                    </div>
                </div>
                <div className={`${styles.content_top} ${styles.content_bottom}`}>
                    <img src={img2} alt="img" className={styles.contentImg}/>
                    <div className={styles.contentA}>
                        <p className={styles.content_title}>{title2}</p>
                        <p className={styles.content_content}>{content}</p>
                        <div className={styles.btn}>
                            <button className={styles.button}>{button}</button>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Content