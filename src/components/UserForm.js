import React from "react";
import { Form, Button, Col } from "react-bootstrap";

const UserForm = ({ userName, setUserName }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setUserName(e.target[0].value);
  };

  return (
    <>
      {!userName ? (
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Enter your name:</Form.Label>
            <Form.Control type="text" placeholder="First Name" />
            <Form.Text className="text-muted">
              We'll use your name to personalize your quiz experience.
            </Form.Text>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      ) : null}
    </>
  );
};

export default UserForm;










// const UserForm = ({ userName, setUserName }) => {

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setUserName(e.target[0].value);
//   }

//   return (
//     <>
//       {!userName ?
//         <form  onSubmit={handleSubmit}>
//           <input type="text" placeholder="First Name" />
//         </form> :
//         null
//       }
//     </>
//   );
// }

// export default UserForm;