import React, {useContext} from 'react'
import FeedbackItem from "./FeedbackItems"
import FeedbackContext from '../context/FeedbackContext';


function FeedbackList() {
  const {feedback} = useContext(FeedbackContext);
    // console.log(feedback);
  return (
    <div className='feedback-list'>
        {feedback.map( item => <FeedbackItem key = {item.id} item = {item} /> )}
    </div>
  )
}

export default FeedbackList;