import React from "react"
import { Nav, NavItem } from "reactstrap"
import { NavLink } from "react-router-dom"

const Navigation = ({ current_user }) => {
  console.log("nav: ", current_user)
  return (
    <>
      <Nav className="nav">
        {current_user && (
          <>
            <NavItem>
              <NavLink to="/myapartments" className="nav-link">
                My Listings
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/apartmentnew" className="nav-link">
                Create Listing
              </NavLink>
            </NavItem>
          </>
        )}
        {!current_user && (
          <>
            <NavItem>
              <NavLink to="/apartmentindex" className="nav-link">
                View Listings
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/login" className="nav-link">
                Log In!
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/signup" className="nav-link">
                Sign Up!
              </NavLink>
            </NavItem>
          </>
        )}
      </Nav>
    </>
  )
}
export default Navigation
