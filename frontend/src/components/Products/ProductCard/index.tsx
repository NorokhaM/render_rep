import {FC} from 'react'

import style from "./ProductsCard.module.scss"
import Stars from '../Stars';

type Card = {
  img_url: string;
  product_name: string;
  rating: number;
  rating_count: number;
  price: number;
};


const ProductsCard: FC<Card> = ({img_url, product_name, rating, rating_count, price}) => {
  return (
    <div className={style.products_card}>
      <img className={style.card_image} src={img_url} alt="Some Text" />
      <button className={style.buy_button}>
      <svg data-test="cart" xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="680.7 197.5 39 28" fill="#ffffff"><path d="m709.9 206-2.8-8.5h-14.2L690 206h-9.3l.5 1.4 6.2 18.1h25.2l6.7-19.5h-9.4zm-15.1 17.4-1-6.5h5v6.5h-4zm-11.1-15.2h6.5l1 6.5h-5.3l-2.2-6.5zm8.8 0h6.4v6.5h-5.4l-1-6.5zm8.5 8.7h5l-1 6.5h-4v-6.5zm0-2.2v-6.5h6.4l-1 6.5H701zm8.6-6.5h6.5l-2.2 6.5h-5.3l1-6.5zm-15.2-8.5h11l2.1 6.3h-15.3l2.2-6.3zm-7.7 17.2h5l1 6.5h-3.8l-2.2-6.5zm24.3 6.5h-3.7l1-6.5h5l-2.3 6.5z"></path></svg>
      </button>
      <h4 className={style.product_name}>{product_name}</h4>
      <div className={style.rating_section}>
        <Stars rating={rating}/>
        <span className={style.rating_count}>({rating_count})</span>
      </div>
      <p className={style.price}>{price}€</p>
    </div>
  )
}

export default ProductsCard