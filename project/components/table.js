import React from 'react';
import styles from './table.module.css';

const Table = () => {
//   const data = [
//     { question: "Question 1", answer: 'Answer 1' },
//     { question: "Question 2", name: 'Answer 2' },
//     { question: "Question 3", name: 'Answer ' },
//   ];

let testObj = {
    "Question 1" : "Answer 1",
    "Question 2" : "Answer 2",
    "Question 3" : "Answer 3",
    "Question 4" : "Answer 4",
    "Question 5" : "Answer 5",
    "Question 6" : "Answer 6",
    "Question 7" : "Answer 7",
    "Question 8" : "Answer 8",
  };

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Questions</th>
          <th>Answers</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(testObj).map(([question, answer]) => (
          <tr key={question}>
            <td>{question}</td>
            <td>{answer}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
