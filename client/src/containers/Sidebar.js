import classes from "./Sidebar.module.css";

function Sidebar() {
  return (
    <div className={classes.placeholder}>
      <div className={classes.placeholder}>
        {props.placeholder}
      </div>
      <div  className={classes.placeholder}>
      <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? classes.activeLink : undefined
          }
        >
          <maybe-icon /> Profile
        </NavLink>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? classes.activeLink : undefined
          }
        >
          <maybe-icon /> Games
        </NavLink>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? classes.activeLink : undefined
          }
        >
          <maybe-icon /> Search
        </NavLink>
      </div>
    </div>
  );
}

export default Sidebar;
