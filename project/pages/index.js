import React from 'react';
import FlashCard from '../components/flashCard';
import styles from '../components/flashCard.module.css';
import Table from '../components/table';

const App = () => {

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

  for (let key in testObj) {
    if (testObj.hasOwnProperty(key)) {
      const value = testObj[key];
      console.log(`Key: ${key}, Value: ${value}`);
    }
  }
  return (
    <div>
      <h1>Flash Cards</h1>
      <div className={styles.conentContainer}>
      <div className={styles.flashCardContainer}>
      {Object.entries(testObj).map(([question, answer]) => (
        <FlashCard key={question} question={question} answer={answer} />
      ))}
      </div>
      </div>
      <div>
      <h1>Table Example</h1>
      <Table />
    </div>

    </div>
  );
};

export default App;
