import { NavLink } from 'react-router-dom';

import classes from "./Header.module.css";

function Header() {
  return (
    <header className={classes.header}>
        <NavLink to='/' className={classes.title}>Steam Up</NavLink>
    </header>
  )
}

export default Header;
