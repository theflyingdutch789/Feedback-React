import { createContext, useState } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: "Could be better use of context",
            rating: 6
        },
        {
            id: 2,
            text: "Could 2 be better use of context",
            rating: 2
        }
    ]);
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    });
    const [selected, setSelected] = useState(10);
    const editFeedback = (item) => {
        setFeedbackEdit({
            item, 
            edit: true
        });
    }
    const handleChange = (id) => {
        setSelected(id);
    }
    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure to Delete?'))
          setFeedback(feedback.filter( (feedback) => (feedback.id !== id)))
    }
    const updateFeedback = (newFeedback) => {
        if (feedbackEdit.edit === true){
            setFeedback(newFeedback);
            setFeedbackEdit({
                edit:false
            })
        }   
        else
            setFeedback([newFeedback,...feedback]);
    }

    return ( <FeedbackContext.Provider value={{
        feedback,
        deleteFeedback,
        updateFeedback,
        selected,
        handleChange, 
        editFeedback,
        feedbackEdit
    }}>
        {children}
    </FeedbackContext.Provider> );
}

export default FeedbackContext;