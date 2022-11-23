import React, { useState } from 'react'
import { BrowserRouter, useNavigate } from "react-router-dom";
// import Questions from '../components/Questions';

export const CreatePoll = () => {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState(2);

  const handleFormData = async (e) => {
    e.preventDefault();
    const results = [e.target.title.value];
    for (let i = 1; i <= questions; i++) {
      const answer = `answer${i}`;
      results.push(e.target[answer].value);
    }

    const response = await fetch('./api/poll', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(results)
    });
    const data = await response.json();
    navigate(`/${data}`);
  }

  const numOfQuestions = [];
  for (let i = 1; i <= questions; i++) {
    numOfQuestions.push(
      <div className="pollOption" key={i}>
        <input type="text" name={`answer${i}`} className="form-control border border-info" placeholder={`Option ${i}`} required/>
        <button type="button" onClick={() => setQuestions(questions - 1)} className="input-group-text btn btn-outline-info" >X</button>
      </div>
    )
  }

  return <div className='newPollContainer'>
    <hr id='newPollhr'></hr>
    <h2>Create a Poll</h2>
    <div className='pollFormComponents'>

      <form onSubmit={handleFormData}>
        <label><p>Poll Question:</p></label>
        <div className="newPoll">
          <input  type="text" name="title" className="pollQuestion" placeholder="Type your question here" required/>
        </div>

        <label><p id='answerOptions'>Answer Options:</p></label>
        {numOfQuestions}

        <button className="addOption" type="button" onClick={() => setQuestions(questions + 1)}>Add Option</button>
        <button className="createPoll" type="submit" >Create Poll</button>
      </form>
    </div>
  </div>
}

export default CreatePoll