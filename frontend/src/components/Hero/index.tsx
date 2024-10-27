import React, { FC } from 'react'

import style from './Hero.module.scss'

const Hero: FC = () => {
  return (
    <div>
      <img className={style.hero_image} src="https://gymbeam.sk/_next/image?url=https%3A%2F%2Fgymbeam.sk%2Fmedia%2Fgymbeam%2Fbannerslider%2Fs%2Fl%2Fslider_desktop_14_.jpg&w=2048&q=75" alt="GymBeam Hero" />
    </div>
  )
}

export default Hero
