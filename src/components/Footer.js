import React from 'react'
import './Footer.css'
import { ReactComponent as GameInfoRib } from '../img/GameInfoRib.svg'
import { ReactComponent as Rectangle } from '../img/Rectangle.svg'
import { ReactComponent as Rectangle_D } from '../img/Rectangle_detail.svg'

function Footer() {
    return (
        <div>
            <GameInfoRib className='GameInfoRib' />
            <ul className="GameInfo">
                <li><Rectangle /></li>
                <li><Rectangle /></li>
                <li><Rectangle /></li>
            </ul>
            <ul className="GameInfo_D">
                <li><Rectangle_D /></li>
                <li><Rectangle_D /></li>
                <li><Rectangle_D /></li>
            </ul>

        </div>
    )
}

export default Footer