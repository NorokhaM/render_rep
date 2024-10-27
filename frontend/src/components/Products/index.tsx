import React, { FC } from 'react'

import style from "./Products.module.scss"
import ProductsCard from './ProductCard';

type Cards = {
  img_url: string;
  product_name: string;
  rating: number;
  rating_count: number;
  price: number;
};

const cardsArr: Cards[] = [
  {
    img_url: "https://gymbeam.sk/_next/image?url=https%3A%2F%2Fgymbeam.sk%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F70f742f66feec18cb83790f14444a3d1%2Fz%2Fe%2Fzero_syrup_pumpkin_spice_350_ml_gymbeam.png&w=1200&q=75",
    product_name: "ZERO SIRUP pumpkin spice - GymBeam",
    rating: 0,
    rating_count: 0,
    price: 10.99
  },
  {
    img_url: "https://gymbeam.sk/_next/image?url=https%3A%2F%2Fgymbeam.sk%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2Fbf5a31e851f50f3ed6850cbbf183db11%2Fe%2Fu%2Feu_gsw_5lb_drc_6063150_fr.png&w=640&q=75",
    product_name: "100% Whey Gold Standard - Optimum Nutrition",
    rating: 4,
    rating_count: 807,
    price: 59.99
  },
  {
    img_url: "https://gymbeam.sk/_next/image?url=https%3A%2F%2Fgymbeam.sk%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2Fbf5a31e851f50f3ed6850cbbf183db11%2Fp%2Fe%2Fpeanut_butter_smooth_340g.png&w=640&q=75",
    product_name: "Arašidové maslo - GymBeam",
    rating: 4,
    rating_count: 1454,
    price: 5.49
  },
  {
    img_url: "https://gymbeam.sk/_next/image?url=https%3A%2F%2Fgymbeam.sk%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2Fbf5a31e851f50f3ed6850cbbf183db11%2Fv%2Fi%2Fvitality_complex_120_tabs_gymbeam.png&w=640&q=75",
    product_name: "Vitality complex - GymBeam",
    rating: 4,
    rating_count: 476,
    price: 19.99
  },
  {
    img_url: "https://gymbeam.sk/_next/image?url=https%3A%2F%2Fgymbeam.sk%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2Fbf5a31e851f50f3ed6850cbbf183db11%2Fv%2Fi%2Fvitamin_c_1000_mg_90_tabs_gymbeam_1_.png&w=640&q=75",
    product_name: "Vitamín C 1000 mg - GymBeam",
    rating: 4,
    rating_count: 273,
    price: 7.99
  },
  {
    img_url: "https://gymbeam.sk/_next/image?url=https%3A%2F%2Fgymbeam.sk%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2Fbf5a31e851f50f3ed6850cbbf183db11%2Fc%2Fo%2Fcolla_pink_jahoda.png&w=640&q=75",
    product_name: "Colla Pink - BeastPink",
    rating: 4,
    rating_count: 709,
    price: 14.99
  },
  {
    img_url: "https://gymbeam.sk/_next/image?url=https%3A%2F%2Fgymbeam.sk%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2Fbf5a31e851f50f3ed6850cbbf183db11%2Fm%2Fo%2Fmoxy_power__strawberry-lemonade_330_ml_gymbeam.png&w=640&q=75",
    product_name: "MOXY power+ Energy Drink 330 ml - GymBeam",
    rating: 4,
    rating_count: 170,
    price: 1.99
  },
  {
    img_url: "https://gymbeam.sk/_next/image?url=https%3A%2F%2Fgymbeam.sk%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2Fbf5a31e851f50f3ed6850cbbf183db11%2Fp%2Fr%2Fprotein_popped_chips_gymbeam.png&w=640&q=75",
    product_name: "Proteínové čипсы - GymBeam",
    rating: 4,
    rating_count: 119,
    price: 3.49
  },
];


const Products: FC = () => {
  return (
    <div className={style.products_wrapper}>
      {cardsArr.map(card => (
        <ProductsCard {...card} />
      ))}
    </div>
  )
}




export default Products
