import { NavLink } from "react-router-dom";

import classes from "./Header.module.css";

const handleClick = () => {
  // Code to handle button click
};

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
        <button className={classes.login} onClick={handleClick}>
          <NavLink to="/Login">Login</NavLink>
        </button>
      </div>
    </header>
  );
}

export default Header;
