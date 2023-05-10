import React from "react"
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap"
import { NavLink } from "react-router-dom"

const MyApartments = ({ current_user, apartments }) => {
  console.log('mine: ', current_user)
  const myApartments = apartments?.filter(
    (apartment) => current_user?.id === apartment.user_id
  )

  return (
    <>
      <div className="apartments-body">
        <h1 className="index-title">Recent Listings</h1>
        <div className="flex-apartments">
          {myApartments.map((apartment, index) => {
            return (
              <Card
                style={{
                  width: "14rem",
                }}
                key={index}
              >
                <img alt={`apartment exterior view`} src={apartment.image} />
                <CardBody>
                  <CardTitle tag="h5">${apartment.price}/month</CardTitle>
                  <CardSubtitle>
                    {apartment.street}, {apartment.city}, {apartment.state}
                  </CardSubtitle>
                  <CardSubtitle>
                    {apartment.bedrooms} Bedroom, {apartment.bathrooms} Bath
                  </CardSubtitle>
                  <NavLink
                    to={`/apartmentshow/${apartment.id}`}
                    className="nav-link"
                  >
                    <Button className="apartment-button">More Details</Button>
                  </NavLink>
                </CardBody>
              </Card>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default MyApartments
