
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget, dispatch, currency } = useContext(AppContext);
    // const [value, setValue] = useState(budget);
    const handleSaveClick = (value) => {
		dispatch({
			type: 'SET_BUDGET',
			payload: value,
		});
	};
    return (
        <div className='alert alert-secondary' style={{display:'flex', alignItems:'center'}}> 
            <span>Budget: {currency}</span>
            <input
                required='required'
                class='w-80'
                style={{ marginLeft: '1rem', border:'none' }}
                type='number'
                id='name'
                value={budget}
                onChange={(event) => handleSaveClick(event.target.value)}>
            </input>
        </div>
    );
};
export default Budget;