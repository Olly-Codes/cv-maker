import { useState } from "react";
import { Preview } from "./components/Preview";
import { Form } from "./components/Form";
import "./styles/styles.css";

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
      mainResponsibilities: "",
      fromDate: "",
      toDate: ""
    }
  );

  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleTrim() {
    const responsibilities = userData.mainResponsibilities.split(",")
    .map(responsibility => responsibility.trim())

    setUserData(currentUser => {
      return { ...currentUser, mainResponsibilities: [...responsibilities] }
    })
  }

  function handleChange(name, value) {
      setUserData((currentUser) => {
        return { ...currentUser, [name]: value }
      })
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleTrim();
    setIsSubmitted(true);
  }

  function handleEdit(e) {
    setUserData(currentUser => {
      return { 
        ...currentUser, 
        mainResponsibilities: currentUser.mainResponsibilities.join(", ") }
    })
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