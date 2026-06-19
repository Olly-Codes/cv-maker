import { useState } from "react";
import { Preview } from "./components/Preview";
import { Form } from "./components/Form";

function App() {
  const [userData, setUserData] = useState({
      name: "",
      email: "",
      number: "",
      institutionName: "",
      degreeName: "",
      graduationDate: "",
      companyName: "",
      positionTitle: "",
      mainResponsibilities: [],
      fromDate: "",
      toDate: ""
    }
  );

  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleChange(name, value) {

    if (name === "mainResponsibilities") {
      const responsibilities = value.split(",")
      .map((responsibility) => responsibility.trim())
      
      setUserData(currentUser => {
        return { ...currentUser, [name]: [...responsibilities]}
      })
    } else {
      setUserData((currentUser) => {
        return { ...currentUser, [name]: value }
      })
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitted(true);
  }

  function handleEdit(e) {
    setIsSubmitted(false);
  }

  return (
    <>
      {isSubmitted ? 
        (
          <>
            <Preview
              user={userData}
              handleEdit={handleEdit}
            />
          </>
        ) : (
          <>
            <Form 
              user={userData}
              handleChange={handleChange}
              handleSubmit={handleSubmit} 
            />
          </>
        )
      }
    </>
  )
}

export default App;