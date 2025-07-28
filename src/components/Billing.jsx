import React from 'react'
import { apple, google, tem } from '../assets'
import styles, { layout } from '../style'

const Billing = () => {
  return (
    <section id='product' className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img
          src={tem}
          alt='tem'
          className='w-[100%] h-[100%] relative z-[5]'
        />
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Elevate Your Business<br className='sm:block hidden'/>with Exceptional Customer Experience.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Customer Experience has emerged as one of the most important factors determining your business's success today. What matters for your customers now directly impacts your business, and failing to meet customer needs can result in missed opportunities.
        </p>
        
       
      </div>  
    </section>
  )
}

export default Billing
