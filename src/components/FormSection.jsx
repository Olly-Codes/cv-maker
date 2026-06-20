export function FormSection({ title, children }) {
    return (
        <>
            <section className="form-row section">
                <p>{title}</p>
                {children}
            </section>
        </>
    )
}