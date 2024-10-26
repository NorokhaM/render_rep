import { FC, } from "react"
import classes from "./Header.module.scss"

const Header: FC = () => {
  return (
    <header className={classes.header}>
      <div className={classes.discount}>Zahajujeme otužovaciu sezónu <b>so zľavou 40%</b> na vybrané produkty s kódom <u><b>COLD40. Vyberajte tu.</b></u></div>

      <div className={classes.central_part}>
        <img src="/images/GB_Logo.webp" alt="logo" className={classes.logo}/>
        <form action="" className={classes.search_bar}>
          <input type="text" placeholder="Hľadajte v obchode..."/>
          <button>
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="683.8 197.5 33 28" fill="currentColor"><path d="m717.1 223.8-13.3-10c.9-1.6 1.5-3.4 1.5-5.3v-.2c0-2.9-1.2-5.6-3.1-7.6-1.9-2-4.6-3.2-7.5-3.2h-.2c-2.9 0-5.6 1.2-7.6 3.1-2 1.9-3.2 4.6-3.2 7.5v.2c0 2.9 1.2 5.6 3.1 7.6 1.9 2 4.6 3.2 7.5 3.2h.2c2.9 0 5.6-1.2 7.6-3.1.2-.2.3-.3.4-.5l13.3 10 1.3-1.7zm-22.5-6.9h-.1c-2.4 0-4.5-1-6-2.6s-2.5-3.7-2.5-6v-.1c0-2.4 1-4.5 2.6-6s3.7-2.5 6-2.5h.1c2.4 0 4.5 1 6 2.6s2.5 3.7 2.5 6v.1c0 1.8-.6 3.6-1.6 4.9l-.2.2c-.2.3-.5.6-.7.8-1.7 1.7-3.8 2.6-6.1 2.6z"></path></svg>
          </button>
        </form>
        <div className={classes.cabinet_cart}>
          <a href="">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="-112.6 199.2 23 28"><path d="M-91.5 213.4c-.8-1.3-1.8-2.5-3-3.5.5-1 .7-2 .7-3.2 0-2.1-.8-4-2.2-5.3-1.4-1.4-3.3-2.2-5.3-2.2s-4 .8-5.3 2.2c-1.4 1.4-2.2 3.3-2.2 5.3 0 1.1.3 2.2.7 3.2-1.2.9-2.3 2.1-3 3.5-.9 1.7-1.5 3.6-1.5 5.6v8.2h22.7V219c-.2-2-.7-3.9-1.6-5.6zm-13.7-10.4c1-1 2.3-1.6 3.8-1.6s2.8.6 3.8 1.6 1.6 2.3 1.6 3.8c0 1.1-.3 2.1-.8 2.9-.2.3-.4.5-.6.8-.4.4-.8.7-1.3 1-.8.4-1.7.7-2.6.7-1 0-1.8-.2-2.6-.7-.8-.4-1.4-1-1.9-1.8s-.8-1.8-.8-2.9c-.2-1.5.4-2.8 1.4-3.8zm13 22.1h-18.4V219c0-1.7.4-3.2 1.2-4.5.6-1 1.4-2 2.3-2.7.6.7 1.2 1.2 2 1.6 1.1.6 2.3 1 3.7 1 1.3 0 2.6-.3 3.7-1 .8-.4 1.4-1 2-1.6.9.7 1.7 1.7 2.3 2.7.8 1.3 1.2 2.9 1.2 4.5v6.1z"></path></svg>
          </a>
          <a href="">
            <svg data-test="cart" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="680.7 197.5 39 28"><path d="m709.9 206-2.8-8.5h-14.2L690 206h-9.3l.5 1.4 6.2 18.1h25.2l6.7-19.5h-9.4zm-15.1 17.4-1-6.5h5v6.5h-4zm-11.1-15.2h6.5l1 6.5h-5.3l-2.2-6.5zm8.8 0h6.4v6.5h-5.4l-1-6.5zm8.5 8.7h5l-1 6.5h-4v-6.5zm0-2.2v-6.5h6.4l-1 6.5H701zm8.6-6.5h6.5l-2.2 6.5h-5.3l1-6.5zm-15.2-8.5h11l2.1 6.3h-15.3l2.2-6.3zm-7.7 17.2h5l1 6.5h-3.8l-2.2-6.5zm24.3 6.5h-3.7l1-6.5h5l-2.3 6.5z"></path></svg>
          </a>
        </div>
      </div>

      <nav>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </nav>
    </header>
  )
}



export default Header