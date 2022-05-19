import React from 'react'
import "./Header.css"
import {Link} from "react-router-dom"

const Header = () => {
  return (
    <div className="header">
        <Link to="/" className="title">Quizzzi</Link>
        <hr className="divider"/>
    </div>
  )
}

export default Header