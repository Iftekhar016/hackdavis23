import React from 'react';
import FlashCard from '../components/flashCard';
import styles from '../components/flashCard.module.css';

const App = () => {

  let testObj = {
    "Question 1" : "Answer 1",
    "Question 2" : "Answer 2",
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
      <div className={styles.flashCardContainer}>
      {Object.entries(testObj).map(([question, answer]) => (
        <FlashCard key={question} question={question} answer={answer} />
      ))}
      </div>
    </div>
  );
};

export default App;
