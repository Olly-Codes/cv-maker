import { FormSection } from "./FormSection.jsx";
import { InputField } from "./InputField.jsx";
import { TextAreaField } from "./TextAreaField.jsx";

export function Form({ user, handleChange, handleSubmit }) {
    return (
        <>
            <div className="form-container">
                <form className="cv-form">
                    <h1>CV Maker</h1>
                    <FormSection title="General Information">
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
                    </FormSection>

                    <FormSection title="Educational Experience">
                        <InputField 
                            id="institutionName"
                            label="Institution Name:"
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
                    </FormSection>

                    <FormSection title="Practical Experience">
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

                        <TextAreaField 
                            id="mainResponsibilities"
                            label="Main Responsibilities:"
                            name="mainResponsibilities"
                            value={user.mainResponsibilities}
                            placeholder="Please separate responsibilities with commas (e.g. cleaning, serving)"
                            onChange={handleChange} 
                        />
                    </FormSection>

                    <FormSection title="Duration of Employment">
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
                    </FormSection>

                    <div className="button-wrapper">
                        <button onClick={handleSubmit} type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}