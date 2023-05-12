import React from "react"
import { NavLink, useParams } from "react-router-dom"
import { Button, Card, CardBody, CardImg, CardSubtitle, CardTitle } from 'reactstrap';

const ApartmentShow = ({apartments}) => {
    const { id } = useParams()
  
  const currentApartment = apartments?.find((apartment) => apartment.id === +id)
  return (
    <>
    <div className="apartments-body">
      {currentApartment &&      
        <Card className='apartment-card'>
          <CardImg top width="100%" src={currentApartment.image} alt="" />
          <CardBody className="apartment-text apartment-font-size">
            <div className="grid-row">
              <div className="show-apartment-info">
                <CardTitle><b>${currentApartment.price}/month</b></CardTitle>
                <CardSubtitle>{currentApartment.street} Unit {currentApartment.unit}, {currentApartment.city}, {currentApartment.state}</CardSubtitle>
                <CardSubtitle>{currentApartment.bedrooms} Bedroom {currentApartment.bathrooms}, Bath</CardSubtitle>
                <CardSubtitle>Pets: {currentApartment.pets}</CardSubtitle>
              </div>
            </div>
            <div className="show-buttons">
            <NavLink
              to={`/apartmentedit/${currentApartment.id}`}
              className="nav-link"
            >
              <Button className="apartment-button">Update Details</Button>
            </NavLink>
  
            <NavLink
              to={`/`}
              className="nav-link"
            >
              <Button className="apartment-button">Remove</Button>
            </NavLink>
            </div>
          </CardBody>
        </Card>
      }
    </div>
    </>
  )
}

export default ApartmentShow