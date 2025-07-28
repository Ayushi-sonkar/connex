import React from 'react'
import styles from '../style'
import { features } from '../constants'

const ServiceCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-col p-6 rounded-[20px] ${index !== features.length - 1 ? 'mb-6' : 'mb-0'} feature-card bg-black-gradient-2`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue mb-4`}>
      <img
        src={icon}
        alt='icon'
        className='w-[50%] h-[50%] object-contain'
      />
    </div>
    <h4 className='font-poppins font-semibold text-white text-[18px] leading-[23px] mb-3'>
      {title}
    </h4>
    <p className='font-poppins font-normal text-dimWhite text-[16px] leading-[24px]'>
      {content}
    </p>
  </div>
)

const Services = () => {
  return (
    <section id='services' className={`${styles.paddingY} ${styles.paddingX} bg-primary`}>
      <div className={`${styles.boxWidth} mx-auto`}>
        <div className='text-center mb-16'>
          <h2 className={`${styles.heading2} mb-4`}>Our Services</h2>
          <p className={`${styles.paragraph} max-w-[600px] mx-auto`}>
            We provide comprehensive telecom solutions designed to meet your business needs and enhance your digital experience.
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {features.map((feature, index) => (
            <ServiceCard key={feature.id} {...feature} index={index}/>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services