import React from 'react'
import './Nav.css';

function Nav() {
  return (
    <div>
        <div class="nav" style="position:absolute;">
          <span>
            <img src="img/메뉴.svg" alt="메뉴" className="nav_menu" /> {/*메뉴 이미지*/}
            <img src="img/로그인.svg" alt="로그인" className="nav_login" /> {/*메뉴 이미지*/}
            <img src="img/로고.svg" alt="로고" clssName="nav_logo" /> {/*메뉴 이미지*/}
          </span>
        </div>
    </div>
  )
}

export default Nav
