import React, {useContext} from 'react'
import FeedbackContext from '../context/FeedbackContext';
function FeedbackStats(){
  const {feedback} = useContext(FeedbackContext);
    let average = feedback.reduce( (prev, cur) => (prev+cur.rating), 0) / feedback.length;
    average = average.toFixed(1).replace(/[.,]0$/,'');
  return (
    <div className='feedback-stats'>
        <h4>{feedback.length} Reviews</h4>
        <h4>Rating : {average}</h4>
    </div>
  )
}

export default FeedbackStats;