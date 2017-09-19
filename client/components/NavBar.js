import React from 'react'

const NavBar = ({ active, children, onClick }) => {
  return (
     <nav className="navbar navbar-toggleable-md navbar-light bg-faded ">
       <a className="navbar-brand ">Brandzooka Code Challenge</a>
     </nav>
  )
}

export default NavBar
