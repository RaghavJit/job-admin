// QuestionSet.jsx
import React from 'react';
import Question from './Question';

const QuestionSet = ({ questions }) => {
  return (
    <div className="question-set">
      {questions.map((q, index) => (
        <Question 
          key={q.id} 
          questionId={index + 1} 
          initialQuestionText={q.text} 
          initialOptions={q.options}
        />
      ))}
    </div>
  );
};

export default QuestionSet;
