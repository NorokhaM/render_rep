import React, { FC } from 'react'

import style from "./BlogCard.module.scss"

type props = {img_url: string, header: string, text: string}

const BlogCard: FC<props> = ({img_url, header, text}) => {
  return (
    <div className={style.blog_card}>
      <img className={style.blog_img} src={img_url} alt="text" />
      <h3 className={style.header} >{header}</h3>
      <p className={style.text}>{text}</p>
    </div>
  )
}

export default BlogCard