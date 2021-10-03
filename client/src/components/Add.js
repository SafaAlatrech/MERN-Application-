import React,{useState} from 'react'
import { Button, Form, Segment } from 'semantic-ui-react'
import { useDispatch } from 'react-redux'
import { addContact } from '../Js/action/contact'
import { useHistory } from 'react-router'
const Add = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const [newUser, setNewUser] = useState({
        name:"",
        email:"",
        phone:""
})
const handelChange = e =>{
    e.preventDefault();
    setNewUser ({...newUser, [e.target.name]: e.target.value})
}
const handelSubmit =(e)=>{
    e.preventDefault();
    dispatch (addContact(newUser))
    setNewUser({
        name:"",
        email:"",
        phone:""
       
})
history.push("/")
}
    return (
        <div>
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

export default Add
