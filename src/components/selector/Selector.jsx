import './Selector.scss';

function Selector({label, options, value, onChange, className=""}) {
    return (
        <div className={`${className} selector-container`} data-testid={`${className}`}>
            <label className="selector-label" data-testid='selector-label'>
                {label}
            </label>

            <select
                className="selector-select"
                data-testid={`${className}-select`}
                value={value}
                onChange={(e) => onChange(e.target.value)}
            >
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