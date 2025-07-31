import React from 'react'
import { features } from '../constants'
import styles, { layout } from '../style'
import Button from './Button'
import { motion } from 'framer-motion'

const FeatureCard = ({ icon, title, content, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.2 }}
    viewport={{ once: true }}
    className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? 'mb-6' : 'mb-0'} feature-card bg-[#1e1e2f] hover:scale-[1.02] hover:shadow-lg transition-transform duration-300`}
  >
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img
        src={icon}
        alt='icon'
        className='w-[50%] h-[50%] object-contain'
      />
    </div>
    <div className='flex-1 flex flex-col ml-3'>
      <h4 className='font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1'>
        {title}
      </h4>
      <p className='font-poppins font-normal text-dimWhite text-[16px] leading-[24px]'>
        {content}
      </p>
    </div>
  </motion.div>
)

const Business = () => {
  return (
    <section id='features' className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          While you build your<br className='sm:block hidden' />
          business, we manage the money behind it.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Empowering Connections Across the Nation<br />
          We are a leading telecom provider delivering next-gen mobile, broadband, and business solutions. Our mission is to simplify connectivity while enhancing your digital lifestyle.
        </p>
        <Button styles='mt-10' />
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  )
}

export default Business
