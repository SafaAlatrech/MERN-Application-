import React,{useState, useEffect} from 'react'
import { Button, Form, Segment } from 'semantic-ui-react'
import { useDispatch, useSelector } from 'react-redux'
import { editContact, getOneContact } from '../Js/action/contact'
import { useHistory } from 'react-router'


const Edit = ({match}) => {

    const oldContact= useSelector(state => state.contactReducer.contact)
    const dispatch = useDispatch()
    const history = useHistory()
    const [newUser, setNewUser] = useState({
        name:"",
        email:"",
        phone:""
})
useEffect(() => {
    setNewUser(oldContact)
}, [oldContact])
useEffect(() => {
  dispatch (getOneContact(match.params.id))
}, [match.params.id])
const handelChange = e =>{
    e.preventDefault();
    setNewUser ({...newUser, [e.target.name]: e.target.value})
}
const handelSubmit =(e)=>{
    e.preventDefault();
    dispatch (editContact(oldContact._id,newUser))
    setNewUser({
        name:"",
        email:"",
        phone:""
       
})
history.push("/")
}
    return (
        <div>
            <h1>Edit Contact</h1>
            <Segment inverted>
    <Form inverted onSubmit={handelSubmit}>
      <Form.Group widths='equal'>
        <Form.Input fluid label='Name' value={newUser.name} placeholder='Name' name="name" onChange={handelChange} />
        <Form.Input fluid label='E-mail' value={newUser.email} placeholder='E-mail' name="email" onChange={handelChange} />
        <Form.Input fluid label='Phone' value={newUser.phone} placeholder='Phone' name="phone" onChange={handelChange} />
      </Form.Group>
      
      <Button type='submit'>Submit</Button>
    </Form>
  </Segment>
        </div>
    )
}

export default Edit
