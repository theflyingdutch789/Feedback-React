import { FaTimes, FaEdit } from 'react-icons/fa'
import React, {useContext} from 'react';
import Card from './shared/Card';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackItems( {item, handleDelete} ) {
  const {deleteFeedback, editFeedback} = useContext(FeedbackContext);
  return (
    <Card>
    
    <div className='num-display'> {item.rating} </div>
    <button onClick={ () => deleteFeedback(item.id)  } className='close'>
      <FaTimes color='purple'></FaTimes>
    </button>
    <button onClick={ () => editFeedback(item)} className='edit'>
      <FaEdit color='purple'></FaEdit>
    </button>
    <div className='text-display'> {item.text} </div>

    </Card>
  )
}

export default FeedbackItems;   