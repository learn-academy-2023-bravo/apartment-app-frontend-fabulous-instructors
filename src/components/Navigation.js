import React from "react"
import { Nav, NavItem } from "reactstrap"
import { NavLink } from "react-router-dom"

const Navigation = () => {
  return (
    <>
      <Nav className="nav">
        <NavItem>
          <NavLink to="/apartmentindex" className="nav-link">
            View Listings
          </NavLink>
        </NavItem>
      
        <NavItem>
          <NavLink to="/apartmentnew" className="nav-link">
            Create Listing
          </NavLink>
        </NavItem>
      </Nav>
    </>
  )
}
export default Navigation
