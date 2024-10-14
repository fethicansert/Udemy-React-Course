const Input = ({ label, value, onChange }) => {
    return (
        <label>
            {label}
            <input
                type="number"
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </label>

    );
}

export default Input;