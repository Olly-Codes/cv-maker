import { useState } from "react";

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

  function handleChange(name, value) {

    if (name === "mainResponsibilities") {
      const responsibilities = value.split(",")
      .map((responsibility) => responsibility.trim())
      
      setUserData(currentUser => {
        return { ...currentUser, [name]: [...responsibilities]}
      })

      console.log(userData)
    } else {
      setUserData((currentUser) => {
        return { ...currentUser, [name]: value }
      })
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <>
    <h1>CV Maker</h1>
    <form className="cv-form">
      <section className="form-row general-section section">
        <p>General Information</p>
        <label htmlFor="name">Name:</label>
        <input 
          type="text"
          name="name"
          id="name"
          placeholder="John"
          onChange={(e) => handleChange(e.target.name, e.target.value)}
          required
        />

        <label htmlFor="email">Email:</label>
        <input 
          type="email"
          name="email"
          id="email"
          placeholder="john@example.com"
          onChange={(e) => handleChange(e.target.name, e.target.value)}
          required
        />

        <label htmlFor="number">Number:</label>
        <input 
          type="tel"
          name="number"
          id="number"
          placeholder="+27 000 000 0000"
          onChange={(e) => handleChange(e.target.name, e.target.value)}
          required
        />
      </section>

      <section className="form-row education-section section">
        <p>Educational Experience</p>
        <label htmlFor="institutionName">Institute Name:</label>
        <input 
          type="text"
          name="institutionName"
          id="institutionName"
          placeholder="University" 
          onChange={(e) => handleChange(e.target.name, e.target.value)}
        />

        <label htmlFor="degreeName">Degree:</label>
        <input 
          type="text"
          name="degreeName"
          id="degreeName"
          placeholder="Computer Sciences" 
          onChange={(e) => handleChange(e.target.name, e.target.value)}
        />

        <label htmlFor="graduationDate">Graduation Date:</label>
        <input 
          type="date"
          name="graduationDate"
          id="graduationDate"
          onChange={(e) => handleChange(e.target.name, e.target.value)}
        />
      </section>

      <section className="form-row practical-section section">
        <p>Practical Experience</p>
        <label htmlFor="companyName">Company Name:</label>
        <input 
          type="text"
          name="companyName"
          id="companyName"
          placeholder="John's Company"
          onChange={(e) => handleChange(e.target.name, e.target.value)}
        />

        <label htmlFor="positionTitle">Position Title:</label>
        <input 
          type="text"
          name="positionTitle"
          id="positionTitle"
          placeholder="Manager"
          onChange={(e) => handleChange(e.target.name, e.target.value)}
        />

        <label htmlFor="mainResponsibilities">Main Responsibilities:</label>
        <textarea 
          name="mainResponsibilities"
          id="mainResponsibilities"
          placeholder="Managing employees, Manage Stock (separate responsibilities with a comma)"
          onChange={(e) => handleChange(e.target.name, e.target.value)}
        />

        <p>Duraion of employment:</p>
        <label htmlFor="fromDate">From:</label>
        <input 
          type="date"
          name="fromDate"
          id="fromDate"
          onChange={(e) => handleChange(e.target.name, e.target.value)}
        />

        <label htmlFor="toDate">Till:</label>
        <input 
          type="date"
          name="toDate"
          id="toDate" 
          onChange={(e) => handleChange(e.target.name, e.target.value)}
        />
      </section>

      <div className="buttons-wrapper">
        <button type="button">Edit</button>
        <button onClick={handleSubmit} type="submit">Submit</button>
      </div>
    </form> 
    </>
  )
}

export default App;