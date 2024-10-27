import React from 'react'
import BlogCard from './BlogCard'

import style from "./Blog.module.scss"

const arr: {img_url: string, header: string, text: string}[] = [
  {img_url: "https://gymbeam.sk/_next/image?url=https%3A%2F%2Fgymbeam.com%2Fblog%2Fwp-content%2Fuploads%2F2024%2F03%2FNavrh-bez-nazvu-2024-03-04T094401.127-400x209.png&w=640&q=75", header: "Fitness recept: Proteínové palacinky s quinoou", text: "Palacinky sa dajú pripraviť mnohými spôsobmi. My sme dnes bežný recept spestrili quinoou a proteínom. Vďaka tomu vznka lahodná verzia nabitá bielkovinami."},
  {img_url: "https://gymbeam.sk/_next/image?url=https%3A%2F%2Fgymbeam.com%2Fblog%2Fwp-content%2Fuploads%2F2024%2F03%2FNavrh-bez-nazvu-2024-02-29T091430.808-400x209.png&w=640&q=75", header: "10 tipov na aktívny životný štýl, keď nemáte čas ísť do fitka", text: "Sú dni, keď človek nestíha zájsť do fitka a dať si kvalitný tréning. To však neznamená, že nemôžeme byť aktívni počas dňa. Dnes pre vás máme množstvo tipov, ako zaradiťviac pohybu do nabitého pracovného dňa."},
  {img_url: "https://gymbeam.sk/_next/image?url=https%3A%2F%2Fgymbeam.com%2Fblog%2Fwp-content%2Fuploads%2F2024%2F02%2FNavrh-bez-nazvu-2024-02-16T130229.883-400x209.png&w=640&q=75", header: "Fitness recept: Cestoviny s cícerom a parmezánom", text: "Ako si pripraviťvyvážený obed bez mésa? My sme dnes stavili na kombináciu cestovín, cícera a parmezánu. Potom už stačilo pridať len listovú zeleninu, všetko dochutiť a lahodný obed je hotový."},
]

const Blog = () => {
  return (
    <div className={style.blog_wrapper}>
      <h2 style={{fontSize: "20px", fontWeight: "500"}}>BLOG</h2>
      <div className={style.cards_wrapper}>
        {arr.map(item => (
          <BlogCard {...item}/>
        ))}
      </div>
    </div>
  )
}

export default Blog