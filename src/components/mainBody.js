import React from 'react'
import { ReactComponent as MainRec } from '../img/mainRec.svg'
import { ReactComponent as MainBar } from '../img/mainBar.svg'
import './mainBody.css'


function mainBody() {
  return (
    <div className='mainBody'>
        <MainRec className="mainRec"
        />
        <MainBar className="mainBar" />
    </div>
  )
}

export default mainBody