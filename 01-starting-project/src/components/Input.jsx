const Input = ({ label, value, onChange, identifier }) => {
    return (
        <label>
            {label}
            <input
                required
                type="number"
                value={value}
                onChange={(e) => onChange(identifier, e.target.value )}
            />
        </label>

    );
}

export default Input;