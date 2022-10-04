import { NavLink } from "react-router-dom";

export default function NavBar() {

  const linkStyles = {
    width: "100px",
    textDecoration: "none",
    color: "black",
    padding: "5px",
  };

  return(
    <div className="navBar">
      <h1 id="logo" >CAROLINE MCDONALD</h1>
      <div className="links">
        <NavLink
          to="/"
          exact
          style={linkStyles}
        >
          HOME
        </NavLink>
        <NavLink
          to="/about"
          exact
          style={linkStyles}
        >
          ABOUT
        </NavLink>
          <NavLink
          to="/contact"
          exact
          style={linkStyles}
        >
          CONTACT
        </NavLink>
      </div>
    </div>
  )
}