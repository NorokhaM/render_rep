import {FC} from 'react'

import style from "./Navbar.module.scss"
import NavbarItem from '../NavbarItem'

const NavbarList: string[] = ["Športová výživa", "Zdravé potraviny", "Športové oblečenie", "Príslušenstvo", "Blog"];

const Navbar: FC = () => {
  return (
    <nav style={style}>
        <ul>
          {NavbarList.map(item => (
            <NavbarItem key={item}>{item}</NavbarItem>
          ))}
        </ul>
      </nav>
  )
}

export default Navbar