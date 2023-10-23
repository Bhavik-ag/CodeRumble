'use client';

import { motion } from 'framer-motion';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from '../styles';
import { TitleText, TypingText } from '../components';
import { fadeIn, staggerContainer } from '../utils/motion';

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col items-center`}
    >
      <TypingText
        title="CodeRumble Event Photos 2023"
        textStyles="text-center"
      />
      <TitleText title={<>Event Gallery</>} textStyles="text-center" />

      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-13/14 md:w-3/5 h-[550px]"
      >
        <Carousel
          autoPlay
          emulateTouch
          infiniteLoop
          renderThumbs={() => null}
          renderIndicator={false}
        >
          <div>
            <img src="/eventphotos-3.jpg" className="h-auto" />
          </div>
          <div>
            <img src="/eventphotos-4.jpg" className="h-auto" />
          </div>
          <div>
            <img src="/eventphotos-5.jpg" className="h-auto" />
          </div>
        </Carousel>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
