import React from "react"
import { NavLink, useParams } from "react-router-dom"
import { Card, CardImg, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

const ApartmentShow = ({apartments, current_user, deleteApartment}) => {
    console.log(current_user.id)
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
            
              {current_user.id === currentApartment.user_id &&
                  <div className="show-button">            
                  <NavLink to={`/apartmentedit/${currentApartment.id}`} className="nav-link edit-listing">
                    <Button className="apartment-button">
                        Edit Listing
                    </Button>
                  </NavLink>
                  <NavLink to={`/myapartments`} className="nav-link">
                    <Button onClick={() => deleteApartment(currentApartment.id)} className="apartment-button">
                        Delete Listing
                    </Button>
                  </NavLink>
                </div>     
              }
            </div>
          </CardBody>
        </Card>
      }
    </div>
    </>
  )
}

export default ApartmentShow