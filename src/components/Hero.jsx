import { motion } from 'framer-motion';

import { styles } from '../styles';
import { IslandCanvas } from './canvas';

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl  flex flex-row justify-evenly items-start`}>
        <div className='flex justify-center items-start mt-5'>
          <div className='flex flex-col items-center'>
            <div className='bg-[#B02A4C] w-5 h-5 rotate-45' />
            <div className='w-1 sm:h-80 h-40 pink-red-gradient' />
          </div>
          <div className='my-5'>
            <h1 className={`${styles.heroHeadText}`}>Salut ! Ici <span className='text-[#B02A4C]'>Antoine</span></h1>
            <p className={`${styles.heroSubText} text-white-100`}>Développeur <span className='text-[#7c2f42]'>fullstack</span> et
              <span className='text-[#7c2f42]'> software.</span>
            </p>
          </div>
          
        </div>
        <div className='w-80 h-full items-start top-0'>
          <IslandCanvas />
          </div>
      </div>
    </section>
  )
}

export default Hero