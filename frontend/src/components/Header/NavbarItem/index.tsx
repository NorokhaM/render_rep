import {FC} from 'react'

import style from "./NavbarItem.module.scss"

type NavbarItemProps = {
  children: any;
}

const NavbarItem: FC<NavbarItemProps> = ({children}) => {
  return (
    <li className={style.navbar_li}>
      <b>{children}</b>
    </li>
  )
}

export default NavbarItem