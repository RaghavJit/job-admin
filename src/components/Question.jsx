// Question.jsx
import React, { useState } from 'react';

const Question = ({ questionId, initialQuestionText, initialOptions }) => {
  const [questionText, setQuestionText] = useState(initialQuestionText);
  const [options, setOptions] = useState(initialOptions);

  const handleQuestionChange = (e) => {
    setQuestionText(e.target.innerText);  // update question text
  };

  const handleOptionChange = (index, e) => {
    const updatedOptions = [...options];
    updatedOptions[index] = e.target.innerText;  // update specific option
    setOptions(updatedOptions);
  };

  return (
    <div className="p-4 border rounded shadow mb-4">
      <p className="font-medium">
        {questionId}. 
        <span 
          contentEditable={true} 
          suppressContentEditableWarning={true}
          onInput={handleQuestionChange}
          className="inline-block p-1 border rounded"
        >
          {questionText}
        </span>
      </p>
      <div className="mt-2">
        {options.map((option, index) => (
          <p key={index} className="flex items-center">
            <input type="radio" name={`question${questionId}`} id={`option${index}`} className="mr-2" />
            <span
              contentEditable={true}
              suppressContentEditableWarning={true}
              onInput={(e) => handleOptionChange(index, e)}
              className="inline-block p-1 border rounded"
            >
              {option}
            </span>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Question;
