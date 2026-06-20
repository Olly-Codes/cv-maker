import { InputField } from "./inputField";

export function Form({ user, handleChange, handleSubmit }) {
    return (
        <>
            <h1>CV Maker</h1>
            <form className="cv-form">
                <section className="form-row general-section section">
                    <p>General Information</p>

                    <InputField 
                        id="name"
                        label="Name:"
                        type="text"
                        name="name"
                        value={user.name}
                        placeholder="John"
                        onChange={handleChange}
                        required={true}
                    />

                    <InputField 
                        id="email"
                        label="Email:"
                        type="email"
                        name="email"
                        value={user.email}
                        placeholder="john@example.com"
                        onChange={handleChange}
                        required={true}
                    />

                    <InputField 
                        id="number"
                        label="Number:"
                        type="tel"
                        name="number"
                        value={user.number}
                        placeholder="+27 000 000 000"
                        onChange={handleChange}
                        required={true}
                    />
                </section>

                <section className="form-row education-section section">
                    <p>Educational Experience</p>

                    <InputField 
                        id="institutionName"
                        label="institution Name:"
                        type="text"
                        name="institutionName"
                        value={user.institutionName}
                        placeholder="University of place"
                        onChange={handleChange}
                        required={false}
                    />

                    <InputField 
                        id="degreeName"
                        label="Degree:"
                        type="text"
                        name="degreeName"
                        value={user.degreeName}
                        placeholder="Computer Sciences"
                        onChange={handleChange}
                        required={false}
                    />

                    <InputField 
                        id="graduationDate"
                        label="Graduation Date:"
                        type="date"
                        name="graduationDate"
                        value={user.graduationDate}
                        onChange={handleChange}
                        required={false}
                    />
                </section>

                <section className="form-row practical-section section">
                    <p>Practical Experience</p>

                    <InputField 
                        id="companyName"
                        label="Company Name:"
                        type="text"
                        name="companyName"
                        value={user.companyName}
                        placeholder="John's Diner"
                        onChange={handleChange}
                        required={false}
                    />

                    <InputField 
                        id="positionTitle"
                        label="Position Title:"
                        type="text"
                        name="positionTitle"
                        value={user.positionTitle}
                        placeholder="Manager"
                        onChange={handleChange}
                        required={false}
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

                    <InputField 
                        id="fromDate"
                        label="From:"
                        type="date"
                        name="fromDate"
                        value={user.fromDate}
                        onChange={handleChange}
                        required={false}
                    />

                    <InputField 
                        id="toDate"
                        label="Till:"
                        type="date"
                        name="toDate"
                        value={user.toDate}
                        onChange={handleChange}
                        required={false}
                    />
                </section>

                <div className="button-wrapper">
                    <button onClick={handleSubmit} type="submit">Submit</button>
                </div>
            </form>
        </>
    )
}