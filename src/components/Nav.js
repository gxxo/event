import React from 'react'
import { ReactComponent as MenuBtn } from '../img/메뉴버튼.svg'
import { ReactComponent as LoginBtn } from '../img/로그인.svg'
import { ReactComponent as LogoBtn } from '../img/로고.svg'
import "./Nav.css";


function Nav() {
  return (
    <header>
        <div className="contents">
        <MenuBtn class="menubtn"/>
            <nav className="navigation">
                <ul>
                    <li><LoginBtn class="loginbtn" /></li>
                    <li><LogoBtn class="logobtn" /> </li>
                </ul>
            </nav>
        </div>    
    </header>
  )
}

export default Nav