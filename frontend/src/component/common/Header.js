import React from 'react'
import "./Header.css";

export default function Header() {
  return (
        <div className="Nav">
            <a className ="logo" href="/">HMS</a>
            <a className ="menu" href="/">Home</a>
            <a className ="menu" href="/aboutus">About US</a>   
            <a className ="menu" href="/login">Login</a>
            <a className ="menu" href="/register">Sign Up</a>
        </div>
       
  )
    
}
