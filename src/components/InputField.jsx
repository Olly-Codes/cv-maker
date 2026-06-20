export function InputField({ id, label, type, name, value, placeholder, onChange, required }) {
    return (
        <>
            <label htmlFor={id}>{label}</label>
            <input 
                type={type}
                name={name}
                id={id}
                value={value}
                placeholder={placeholder}
                onChange={(e) => onChange(e.target.name, e.target.value)}
                required={required} 
            />
        </>
    )
}