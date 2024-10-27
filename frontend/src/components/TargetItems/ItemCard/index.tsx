import React, { FC } from 'react'

import style from "./ItemCard.module.scss"

type props = {
  img_url: string;
  name: string;
}

const ItemCard: FC<props> = ({img_url, name}) => {
  return (
    <div className={style.item_card_wrapper}>
      <img className={style.card_image} src={img_url} alt="category" />
      <div className={style.name_wrapper}>
        <p className={style.category_name}>{name}</p>
      </div>
    </div>
  )
}

export default ItemCard