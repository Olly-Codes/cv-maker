export function Preview({ user, handleEdit }) {
    return (
        <>
            <div className="cv-container-submitted">
                <section className="general-section-submitted">
                    <p>General Information</p>
                    <p>Name: {user.name}</p>
                    <p>Email: {user.email}</p>
                    <p>Number: {user.number}</p>
                </section>

                <section className="education-section-submitted">
                    <p>Educational Experience</p>
                    <p>Institution Name: {user.institutionName}</p>
                    <p>Degree Name: {user.degreeName}</p>
                    <p>Graduation Date: {user.graduationDate}</p>
                </section>

                <section className="practical-section-submitted">
                    <p>Practical Experince</p>
                    <p>Company Name: {user.companyName}</p>
                    <p>Position Title: {user.positionTitle}</p>
                    <p>Main Responsibilities</p>
                    <ul>
                    {user.mainResponsibilities.map(responsibility => {
                        return <li key={responsibility}>{responsibility}</li>
                    })}
                    </ul>

                    <p>Duration of Employment:</p>
                    <p>From: {user.fromDate} Till: {user.toDate}</p>
                </section>

                <div className="button-wrapper-submitted">
                    <button onClick={handleEdit} type="button">Edit</button>
                </div>
            </div>
        </>
    )
}