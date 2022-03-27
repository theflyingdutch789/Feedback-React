import React from 'react'
import Card from './shared/Card'
import Button from './shared/Button';
import RatingSelect from './RatingSelect';
import { useState, useContext, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackForm() {
    const {updateFeedback, selected, handleChange, feedbackEdit, feedback} = useContext(FeedbackContext);
    const [showButton, setShowButton] = useState(true);
    const [text, setText] = useState('');
    const [message, setMessage] = useState('');

    useEffect( () => {
        if (feedbackEdit.edit === true){
            setShowButton(false);
            handleChange(feedbackEdit.item.rating);
            setText(feedbackEdit.item.text);
        }
    }, [feedbackEdit]);


    const handleChanges = (e) => {
        setText(e.currentTarget.value);
        
        if (text.trim().length < 10){
            setShowButton(true);
            setMessage('Text must be atleast 10 characters');
        }
        else{
            setShowButton(false);
            setMessage(null);
        }
        
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (feedbackEdit.edit === true){
            const update = {
                id : feedbackEdit.item.id,
                rating: selected,
                text
            };
            updateFeedback(feedback.map( (item) => (item.id === feedbackEdit.item.id ? update : item)));
            console.log(feedback.map( (item) => (item.id === feedbackEdit.item.id ? update : item)));
            setText('');
            handleChange(10);
        }
        else if (text.trim().length>10){
            const newFeedback = {
                id: uuidv4(),
                rating: selected,
                text
            }
            updateFeedback(newFeedback);
            setText('');
            handleChange(10);
        }
    }
  return (
    <Card>
        <form onSubmit={handleSubmit}>
            <h2>How would you rate our service?</h2>
            <RatingSelect />
            <div className='input-group'>
                <input onChange={handleChanges} type='text' placeholder='Write a review' value={ text }></input>
                <Button isDisabled={showButton}>Submit</Button>
            </div>
            {message && <div className='message'>{message}</div>}
        </form>
    </Card>      
  )
}

export default FeedbackForm