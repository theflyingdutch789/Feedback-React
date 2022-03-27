import React, {useContext} from 'react';
import FeedbackContext from '../context/FeedbackContext';

function RatingSelect() {
    const {selected, handleChange} = useContext(FeedbackContext);
    const handleChanges = (e) => {
      handleChange(+e.target.value);
    }
    return (
        <ul className='rating'>
          {Array.from({ length: 10 }, (_, i) => (
            <li key={`rating-${i + 1}`}>
              <input
                type='radio'
                id={`num${i + 1}`}
                name='rating'
                value={i + 1}
                onChange={handleChanges}
                checked={selected === i + 1}
              />
              <label htmlFor={`num${i + 1}`}>{i + 1}</label>
            </li>
          ))}
        </ul>
      )
}

export default RatingSelect;