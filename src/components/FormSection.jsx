export function FormSection({ title, children }) {
    return (
        <>
            <section className="form-row section">
                <p className="title">{title}</p>
                {children}
            </section>
        </>
    )
}