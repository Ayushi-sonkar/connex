import React from 'react'
import { temp2 } from '../assets'
import Button from './Button'
import styles, { layout } from '../style'

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={`${layout.sectionInfo} animate-slideInLeft`}>
        <h2 className={styles.heading2}>Tailored IT &<br className='sm:block hidden'/>Infrastructure Services to Safeguard Your Network.</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 animate-fadeIn`}>
          Protect your network and sensitive business data with Connex IT & Infrastructure services. Our experts can design, develop, and implement solutions best suited to your specific business environment.
        </p>
        <div className="hover-scale">
          <Button styles='mt-10'/>
        </div>
      </div>
      <div className={`${layout.sectionImg} animate-slideInRight`}>
        <img
          src={temp2}
          alt='temp2'
          className='w-[100%] h-[100%] hover-scale hover-glow'
        />
      </div>
    </section>
  )
}

export default CardDeal
