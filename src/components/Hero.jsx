import styles from '../style'
import { discount, robot } from '../assets'
import GetStarted from './GetStarted'

const Hero = () => {
  return (
    <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 animate-slideInLeft`}>
        <div className='flex flex-row justify-between items-center w-full'>
          <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]'>
            MAKE EVERY <br className='sm:block hidden'/> {" "}
            <span className='text-gradient'>CONNECTION</span> {" "}
          </h1>
          <div className='ss:flex hidden md:mr-4 mr-0 animate-pulse-custom'>
            <GetStarted/>
          </div>
        </div>
        <h1 className='font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full'>
           <span className='text-gradient'>COUNT</span> {" "}
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 animate-fadeIn`}>
        We are your integrated technology solutions provider of choice, specializing in customer experience, contact center, unified communications, infrastructure, and innovation, since 1996.
        </p>
      </div>
      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative animate-slideInRight`}>
        <img
          src={robot}
          alt='billing'
          className='w-[100%] h-[100%] relative z-[5] animate-float'
        />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient animate-pulse-custom" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient"/>
      </div>
      <div className={`ss:hidden ${styles.flexCenter} animate-pulse-custom`}>
        <GetStarted/>
      </div>
    </section>
  )
}

export default Hero
