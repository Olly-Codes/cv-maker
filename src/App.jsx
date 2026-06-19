import { useState } from "react";

function App() {
  return (
    <>
    <h1>CV Maker</h1>
    <form className="cv-form">

      <section className="form-row general-section section">
        <p>General Information</p>
        <label htmlFor="name">Name:</label>
        <input 
          type="text"
          id="name"
          placeholder="John"
        />

        <label htmlFor="email">Email:</label>
        <input 
          type="email"
          id="email"
          placeholder="john@example.com"
        />

        <label htmlFor="phoneNumber">Number:</label>
        <input 
          type="tel"
          id="phoneNumber"
          placeholder="+27 000 000 0000"
        />
      </section>

      <section className="form-row education-section section">
        <p>Educational Experience</p>
        <label htmlFor="schoolName">Institute Name:</label>
        <input 
          type="text"
          id="schoolName"
          placeholder="University" 
        />

        <label htmlFor="degreeName">Degree:</label>
        <input 
          type="text"
          id="degreeName"
          placeholder="Computer Sciences" 
        />

        <label htmlFor="graduationDate">Graduation Date:</label>
        <input 
          type="date"
          id="graduationDate"
        />
      </section>

      <section className="form-row practical-section section">
        <p>Practical Experience</p>
        <label htmlFor="companyName">Company Name:</label>
        <input 
          type="text"
          id="companyName"
          placeholder="John's Company"
        />

        <label htmlFor="positionTitle">Position Title:</label>
        <input 
          type="text"
          id="positionTitle"
          placeholder="Manager"
        />

        <label htmlFor="responsibilities">Main Responsibilities:</label>
        <textarea 
          name="responsibilities"
          id="responsibilities"
          placeholder="Managing employees" 
        />

        <p>Duraion of employment:</p>
        <label htmlFor="fromDate">From:</label>
        <input 
          type="date"
          id="fromDate" 
        />

        <label htmlFor="toDate">Till:</label>
        <input 
          type="date"
          id="toDate" 
        />
      </section>

      <div className="buttons-wrapper">
        <button type="button">Edit</button>
        <button type="submit">Submit</button>
      </div>
    </form> 
    </>
  )
}

export default App;