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
    {isSubmitted ? (
      <>
        <div className="cv-container">
          <section className="general-section-submitted">
            <p>General Information</p>
            <p>Name: {userData.name}</p>
            <p>Email: {userData.email}</p>
            <p>Number: {userData.number}</p>
          </section>

          <section className="education-section-submitted">
            <p>Educational Experience</p>
            <p>Institution Name: {userData.institutionName}</p>
            <p>Degree Name: {userData.degreeName}</p>
            <p>Graduation Date: {userData.graduationDate}</p>
          </section>

          <section className="practical-section-submitted">
            <p>Practical Experince</p>
            <p>Company Name: {userData.companyName}</p>
            <p>Position Title: {userData.positionTitle}</p>
            <p>Main Responsibilities</p>
            <ul>
              {userData.mainResponsibilities.map(responsibility => {
                return <li key={responsibility}>{responsibility}</li>
              })}
            </ul>

            <p>Duration of Employment:</p>
            <p>From: {userData.fromDate} Till: {userData.toDate}</p>
          </section>

          <div className="button-wrapper-submitted">
            <button onClick={handleEdit} type="button">Edit</button>
          </div>
        </div>
      </>
    ) : (
    <>
      <h1>CV Maker</h1>
      <form className="cv-form">
        <section className="form-row general-section section">
          <p>General Information</p>
          <label htmlFor="name">Name:</label>
          <input 
            type="text"
            value={userData.name}
            name="name"
            id="name"
            placeholder="John"
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            required
          />

          <label htmlFor="email">Email:</label>
          <input 
            type="email"
            value={userData.email}
            name="email"
            id="email"
            placeholder="john@example.com"
            onChange={(e) => handleChange(e.target.name, e.target.value)}
            required
          />

          <label htmlFor="number">Number:</label>
          <input 
            type="tel"
            value={userData.number}
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
            value={userData.institutionName}
            name="institutionName"
            id="institutionName"
            placeholder="University" 
            onChange={(e) => handleChange(e.target.name, e.target.value)}
          />

          <label htmlFor="degreeName">Degree:</label>
          <input 
            type="text"
            value={userData.degreeName}
            name="degreeName"
            id="degreeName"
            placeholder="Computer Sciences" 
            onChange={(e) => handleChange(e.target.name, e.target.value)}
          />

          <label htmlFor="graduationDate">Graduation Date:</label>
          <input 
            type="date"
            value={userData.graduationDate}
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
            value={userData.companyName}
            name="companyName"
            id="companyName"
            placeholder="John's Company"
            onChange={(e) => handleChange(e.target.name, e.target.value)}
          />

          <label htmlFor="positionTitle">Position Title:</label>
          <input 
            type="text"
            value={userData.positionTitle}
            name="positionTitle"
            id="positionTitle"
            placeholder="Manager"
            onChange={(e) => handleChange(e.target.name, e.target.value)}
          />

          <label htmlFor="mainResponsibilities">Main Responsibilities:</label>
          <textarea 
            name="mainResponsibilities"
            value={userData.mainResponsibilities}
            id="mainResponsibilities"
            placeholder="Managing employees, Manage Stock (separate responsibilities with a comma)"
            onChange={(e) => handleChange(e.target.name, e.target.value)}
          />

          <p>Duraion of employment:</p>
          <label htmlFor="fromDate">From:</label>
          <input 
            type="date"
            value={userData.fromDate}
            name="fromDate"
            id="fromDate"
            onChange={(e) => handleChange(e.target.name, e.target.value)}
          />

          <label htmlFor="toDate">Till:</label>
          <input 
            type="date"
            value={userData.toDate}
            name="toDate"
            id="toDate" 
            onChange={(e) => handleChange(e.target.name, e.target.value)}
          />
        </section>

        <div className="button-wrapper">
          <button onClick={handleSubmit} type="submit">Submit</button>
        </div>
      </form>
    </>
  )}
    </>
  )
}

export default App;