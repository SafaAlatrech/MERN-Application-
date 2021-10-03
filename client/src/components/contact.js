import React from 'react'
import { Button, Card } from 'semantic-ui-react'
import { deleteContact, getOneContact } from '../Js/action/contact'
import { useDispatch } from 'react-redux'
import {  Link } from "react-router-dom";



const Contact = ({safa}) => {
    const dispatch = useDispatch()
 const handelDelete = ()=>{
        dispatch(deleteContact(safa._id))
 }
    return (
        <div style={{marginBottom: "20px"}}>
           <Card>
      <Card.Content>
       
        <Card.Header>{safa.name}</Card.Header>
        <Card.Meta>{safa.email}</Card.Meta>
        <Card.Description>
          Phone : <strong>{safa.phone}</strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
            <Link to={`/edit/${safa._id}`}  >
          <Button basic color='green' onClick={()=>dispatch(getOneContact(safa._id))}>
            Edit
          </Button>
          </Link>
          <Button basic color='red' onClick={handelDelete}>
            Delete
          </Button>
        </div>
      </Card.Content>
    </Card> 
        </div>
    )
}

export default Contact
