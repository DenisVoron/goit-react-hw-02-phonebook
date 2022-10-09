
export const Filter = ({value, onFilterChange }) => (
    <label htmlFor="">
        Find contacts by name
        <input type="text" value={value} onChange={onFilterChange}/>
    </label>
);