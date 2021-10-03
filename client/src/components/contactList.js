import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContacts } from "../Js/action/contact";
import { Dimmer, Loader, Image, Segment } from "semantic-ui-react";
import Contact from "./contact";

const ContactList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContacts());
  }, []);
  const contacts = useSelector((state) => state.contactReducer.contacts);
  const loading = useSelector((state) => state.contactReducer.loading);
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        marginTop: "10px",
        
      }}
    >
      {loading ? (
        <Segment>
          <Dimmer active>
            <Loader size="massive">Loading</Loader>
          </Dimmer>

          <Image src="/images/wireframe/short-paragraph.png" />
          <Image src="/images/wireframe/short-paragraph.png" />
          <Image src="/images/wireframe/short-paragraph.png" />
        </Segment>
      ) : (
        contacts.map((contact) => <Contact key={contact._id} safa={contact} />)
      )}
    </div>
  );
};

export default ContactList;
