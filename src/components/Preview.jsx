import { format } from "date-fns";
import { Divider } from "./Divider.jsx"

export function Preview({ user, handleEdit }) {
    return (
        <>
            <div className="cv-container-submitted">
                <section className="general-section-submitted">
                    <div className="name-btn-wrapper">
                        <p className="user-name">{user.name}</p>
                        <div className="button-wrapper-submitted">
                            <button onClick={handleEdit} type="button">Edit</button>
                        </div>
                    </div>
                    <p className="email-num">{user.email} - {user.number}</p>
                </section>

                <Divider height={1}/>

                <section className="education-section-submitted">
                    <p className="title-submitted">Educational Experience</p>
                    <div className="degree-uni-wrapper">
                        <p>{user.degreeName}</p>
                        <p>{user.institutionName} - {user.graduationDate ? format(user.graduationDate, "MMMM yyyy") : "-"}</p>
                    </div>
                </section>

                <Divider height={1}/>

                <section className="practical-section-submitted">
                    <p className="title-submitted">Practical Experince</p>
                    <div className="position-company-wrapper">
                        <p>{user.positionTitle}</p>
                        <p>{user.companyName}</p>
                    </div>
                    <ul className="responsibility-list">
                    {user.mainResponsibilities.map(responsibility => {
                        return <li key={responsibility}>{responsibility}</li>
                    })}
                    </ul>

                    <div className="duration-wrapper">
                        <p className="title-submitted">Duration</p>
                        <p className="date">{user.fromDate ? format(user.fromDate, "MMM yyyy") : "-"} - {user.toDate ? format(user.toDate, "MMM yyyy") : "-"}</p>
                    </div>
                </section>
            </div>
        </>
    )
}