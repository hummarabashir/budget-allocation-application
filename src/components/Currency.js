
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Currency = () => {
    const { currency, dispatch } = useContext(AppContext);
    // const [value, setValue] = useState(currency);
    const handleSaveClick = (value) => {
		dispatch({
			type: 'CHG_CURRENCY',
			payload: value,
        });
        // setValue(value)
	};
    return (
        <div className="alert alert-info" style={{display:'flex', alignItems:'center'}}> Currency
            <select className="custom-select w-100" style={{ marginLeft: '1rem', border:'none' }} id="inputGroupSelect01" onChange={(event) => handleSaveClick(event.target.value)}>
                <option defaultValue>{currency} Pound</option>
                <option value="$" name="dollar">$ Dollar</option>
                <option value="€" name="euro">€ Euro</option>
                <option value="£" name="pound">£ Pound</option>
                <option value="₹" name="rupee">₹ Ruppee</option>
            </select>
        </div>
    );
};
export default Currency;