import { NavLink } from "react-router-dom";

import classes from "./Header.module.css";

function Header() {
  return (
    <header className={classes.header}>
      <div className={classes.containerLeft}>
        <NavLink to="/" className={classes.title}>
          Steam Up
        </NavLink>
      </div>
      <div className={classes.containerMiddle}>
        <input
          type="text"
          name="search"
          placeholder="Search games or profiles.."
          className={classes.search}
        ></input>
      </div>
      <div className={classes.containerRight}>
        <button className={classes.login}>
          Login / Register
        </button>
      </div>
    </header>
  );
}

export default Header;
