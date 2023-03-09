import React from 'react'
import Container from '../../Components/Container'
import Layout from '../../Layout'
import styles from './index.module.scss'
import CtaSection from './Cta-section/cta'
import Content from './Content-section'

const Landing = () => {
  return (
    <div>
      <Layout>
        <CtaSection />
        <Content />
      </Layout>
    </div>
  )
}

export default Landing