import React from 'react'
import { Navbar, Footer } from '../components'
import { features } from '../constants'
import styles from '../style'

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

const DetailedServiceCard = ({ title, description, features }) => (
  <div className='bg-black-gradient-2 rounded-[20px] p-8 mb-8'>
    <h3 className='font-poppins font-semibold text-white text-[24px] leading-[32px] mb-4'>
      {title}
    </h3>
    <p className='font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-6'>
      {description}
    </p>
    <ul className='space-y-3'>
      {features.map((feature, index) => (
        <li key={index} className='flex items-center text-dimWhite'>
          <div className='w-2 h-2 bg-secondary rounded-full mr-3'></div>
          <span className='font-poppins font-normal text-[14px]'>{feature}</span>
        </li>
      ))}
    </ul>
  </div>
)

const ServicesPage = () => {
  const detailedServices = [
    {
      title: "Mobile & Wireless Solutions",
      description: "Stay connected anywhere with our comprehensive mobile and wireless services designed for individuals and businesses.",
      features: [
        "Unlimited data plans with 5G coverage",
        "International roaming packages",
        "Business mobile fleet management",
        "IoT connectivity solutions",
        "Mobile device insurance and support"
      ]
    },
    {
      title: "Broadband & Internet Services",
      description: "High-speed internet solutions that power your digital lifestyle and business operations.",
      features: [
        "Fiber-optic internet up to 1Gbps",
        "Business-grade dedicated connections",
        "Wi-Fi 6 router and equipment",
        "24/7 network monitoring",
        "Scalable bandwidth options"
      ]
    },
    {
      title: "Cloud & Infrastructure",
      description: "Modern cloud solutions and IT infrastructure services to transform your business operations.",
      features: [
        "Cloud migration and management",
        "Data backup and disaster recovery",
        "Virtual private networks (VPN)",
        "Cybersecurity and threat protection",
        "Server hosting and maintenance"
      ]
    },
    {
      title: "Unified Communications",
      description: "Integrate all your communication channels into one seamless platform for enhanced productivity.",
      features: [
        "VoIP phone systems",
        "Video conferencing solutions",
        "Team collaboration tools",
        "Call center and contact management",
        "Mobile integration and softphones"
      ]
    }
  ]

  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
        </div>
      </div>
      
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          {/* Hero Section */}
          <section className={`${styles.paddingY} bg-primary text-center`}>
            <h1 className={`${styles.heading2} mb-6`}>Our Services</h1>
            <p className={`${styles.paragraph} max-w-[800px] mx-auto mb-12`}>
              We provide comprehensive telecom solutions designed to meet your business needs and enhance your digital experience. From mobile connectivity to cloud infrastructure, we've got you covered.
            </p>
          </section>

          {/* Core Services Grid */}
          <section className={`${styles.paddingY} bg-primary`}>
            <div className='text-center mb-16'>
              <h2 className={`${styles.heading2} mb-4`}>Core Services</h2>
              <p className={`${styles.paragraph} max-w-[600px] mx-auto`}>
                Discover our flagship services that have helped thousands of businesses stay connected and competitive.
              </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16'>
              {features.map((feature, index) => (
                <ServiceCard key={feature.id} {...feature} index={index}/>
              ))}
            </div>
          </section>

          {/* Detailed Services */}
          <section className={`${styles.paddingY} bg-primary`}>
            <div className='text-center mb-16'>
              <h2 className={`${styles.heading2} mb-4`}>Detailed Service Offerings</h2>
              <p className={`${styles.paragraph} max-w-[600px] mx-auto`}>
                Explore our comprehensive range of services designed to meet every aspect of your connectivity and technology needs.
              </p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
              {detailedServices.map((service, index) => (
                <DetailedServiceCard key={index} {...service} />
              ))}
            </div>
          </section>

          {/* Why Choose Us */}
          <section className={`${styles.paddingY} bg-primary`}>
            <div className='text-center mb-16'>
              <h2 className={`${styles.heading2} mb-4`}>Why Choose Our Services?</h2>
              <p className={`${styles.paragraph} max-w-[600px] mx-auto`}>
                We're committed to delivering exceptional service quality and customer satisfaction.
              </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-16'>
              <div className='text-center'>
                <div className='w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4'>
                  <span className='text-primary text-2xl font-bold'>24/7</span>
                </div>
                <h3 className='font-poppins font-semibold text-white text-[20px] mb-3'>24/7 Support</h3>
                <p className='font-poppins font-normal text-dimWhite text-[14px]'>
                  Round-the-clock technical support and customer service to keep you connected.
                </p>
              </div>
              <div className='text-center'>
                <div className='w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4'>
                  <span className='text-primary text-2xl font-bold'>99%</span>
                </div>
                <h3 className='font-poppins font-semibold text-white text-[20px] mb-3'>Uptime Guarantee</h3>
                <p className='font-poppins font-normal text-dimWhite text-[14px]'>
                  Industry-leading 99.9% uptime guarantee for all our services and infrastructure.
                </p>
              </div>
              <div className='text-center'>
                <div className='w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4'>
                  <span className='text-primary text-2xl font-bold'>25+</span>
                </div>
                <h3 className='font-poppins font-semibold text-white text-[20px] mb-3'>Years Experience</h3>
                <p className='font-poppins font-normal text-dimWhite text-[14px]'>
                  Over 25 years of experience in telecommunications and technology solutions.
                </p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
            <div className='flex-1 flex flex-col'>
              <h2 className={styles.heading2}>Ready to Get Started?</h2>
              <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                Contact our team today to discuss your specific needs and find the perfect solution for your business.
              </p>
            </div>
            <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-6`}>
              <button className='py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none rounded-[10px]'>
                Contact Us
              </button>
            </div>
          </section>

          <Footer/>
        </div>
      </div>
    </div>
  )
}

export default ServicesPage
