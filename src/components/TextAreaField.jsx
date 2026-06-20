export function TextAreaField({ id, label, name, value, placeholder, onChange }) {
    return (
        <>
            <label htmlFor={id}>{label}</label>
                <textarea 
                    name={name}
                    value={value}
                    id={id}
                    placeholder={placeholder}
                    onChange={(e) => onChange(e.target.name, e.target.value)}
                />
        </>
    )
}