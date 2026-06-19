export function Form({ user, handleChange, handleSubmit }) {
    return (
        <>
            <h1>CV Maker</h1>
            <form className="cv-form">
                <section className="form-row general-section section">
                    <p>General Information</p>
                    <label htmlFor="name">Name:</label>
                    <input 
                        type="text"
                        value={user.name}
                        name="name"
                        id="name"
                        placeholder="John"
                        onChange={(e) => handleChange(e.target.name, e.target.value)}
                        required
                    />

                    <label htmlFor="email">Email:</label>
                    <input 
                        type="email"
                        value={user.email}
                        name="email"
                        id="email"
                        placeholder="john@example.com"
                        onChange={(e) => handleChange(e.target.name, e.target.value)}
                        required
                    />

                    <label htmlFor="number">Number:</label>
                    <input 
                        type="tel"
                        value={user.number}
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
                        value={user.institutionName}
                        name="institutionName"
                        id="institutionName"
                        placeholder="University" 
                        onChange={(e) => handleChange(e.target.name, e.target.value)}
                    />

                    <label htmlFor="degreeName">Degree:</label>
                    <input 
                        type="text"
                        value={user.degreeName}
                        name="degreeName"
                        id="degreeName"
                        placeholder="Computer Sciences" 
                        onChange={(e) => handleChange(e.target.name, e.target.value)}
                    />

                    <label htmlFor="graduationDate">Graduation Date:</label>
                    <input 
                        type="date"
                        value={user.graduationDate}
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
                        value={user.companyName}
                        name="companyName"
                        id="companyName"
                        placeholder="John's Company"
                        onChange={(e) => handleChange(e.target.name, e.target.value)}
                    />

                    <label htmlFor="positionTitle">Position Title:</label>
                    <input 
                        type="text"
                        value={user.positionTitle}
                        name="positionTitle"
                        id="positionTitle"
                        placeholder="Manager"
                        onChange={(e) => handleChange(e.target.name, e.target.value)}
                    />

                    <label htmlFor="mainResponsibilities">Main Responsibilities:</label>
                    <textarea 
                        name="mainResponsibilities"
                        value={user.mainResponsibilities}
                        id="mainResponsibilities"
                        placeholder="Managing employees, Manage Stock (separate responsibilities with a comma)"
                        onChange={(e) => handleChange(e.target.name, e.target.value)}
                    />

                    <p>Duraion of employment:</p>
                    <label htmlFor="fromDate">From:</label>
                    <input 
                        type="date"
                        value={user.fromDate}
                        name="fromDate"
                        id="fromDate"
                        onChange={(e) => handleChange(e.target.name, e.target.value)}
                    />

                    <label htmlFor="toDate">Till:</label>
                    <input 
                        type="date"
                        value={user.toDate}
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
    )
}