import React from 'react'

import style from "./TargetItems.module.scss"
import ItemCard from './ItemCard'

const targetsArr: {img: string, name: string}[] = [
  {img: "https://gymbeam.sk/_next/image?url=https%3A%2F%2Fgymbeam.cz%2Fmedia%2Fcatalog%2Fcategory%2Fhubnuti.png&w=640&q=75", name: "Schudnúť" },
  {img: "https://gymbeam.sk/_next/image?url=https%3A%2F%2Fgymbeam.cz%2Fmedia%2Fcatalog%2Fcategory%2Fsvaly.png&w=640&q=75", name: "Budovať svalovú hmotu" },
  {img: "https://gymbeam.sk/_next/image?url=https%3A%2F%2Fgymbeam.cz%2Fmedia%2Fcatalog%2Fcategory%2Fregenerace.png&w=640&q=75", name: "Podporiť regeneráciu" },
  {img: "https://gymbeam.sk/_next/image?url=https%3A%2F%2Fgymbeam.cz%2Fmedia%2Fcatalog%2Fcategory%2Fzlepseni_vykonu_1.png&w=640&q=75", name: "Zlepšiť výkon" },
  {img: "https://gymbeam.sk/_next/image?url=https%3A%2F%2Fgymbeam.cz%2Fmedia%2Fcatalog%2Fcategory%2Fjidlo.png&w=640&q=75", name: "Zdravšie maškrtiť" },
  {img: "https://gymbeam.sk/_next/image?url=https%3A%2F%2Fgymbeam.cz%2Fmedia%2Fcatalog%2Fcategory%2Fcviceni.png&w=640&q=75", name: "Začať cvičiť doma" },
  {img: "https://gymbeam.sk/_next/image?url=https%3A%2F%2Fgymbeam.cz%2Fmedia%2Fcatalog%2Fcategory%2Fzdravi.png&w=640&q=75", name: "Podporiť imunitu" },
  {img: "https://gymbeam.sk/_next/image?url=https%3A%2F%2Fgymbeam.cz%2Fmedia%2Fcatalog%2Fcategory%2Fobleceni.png&w=640&q=75", name: "Športové oblečenie" },

] 

const TargetItems = () => {
  return (
    <div className={style.target_items}>
      <h4>Objavte overené produkty podľa vášho cieľa. Chcete:</h4>
      <div className={style.categories_wrapper}>
        {targetsArr.map(item => (
          <ItemCard img_url={item.img} name={item.name} />
        ))}
      </div>
    </div>
  )
}

export default TargetItems