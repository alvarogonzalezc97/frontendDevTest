import './Selector.scss';

function Selector({ label, options, value, onChange }) {
    return (
        <div className="selector-container">
            <label className="selector-label">
                {label}
            </label>

            <select className="selector-select" value={value} onChange={(e) => onChange(e.target.value)}>
                {options.map((option) => (
                    <option key={option.code} value={option.code}>
                        {option.name || option.capacity}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default Selector;