import React, { useState, useEffect } from 'react';
import FlashCard from '../components/flashCard';
import styles from '../components/flashCard.module.css';
import Table from '../components/table';
// import Button from '../components/Button';

const App = () => {

  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/');
        const jsonData = await response.json();
        console.log(jsonData);
        setApiData(jsonData);
      } catch (error) {
        console.error('API request failed:', error);
      }
    };

    fetchData();
  }, []);

  let testObj = {
    "What is the main topic of the given data?": "My friend who lacks social skills but excels in video games",
    "What are some of the allergies mentioned in the data?" : "gluten, eggs, and milk.",
    "how does the person excel in the game league of legends?" : "by unleashing his unique skills and potion, he reigns supreme in the game.",
    "what is the person's aim in the field of chemistry?" : "to master the field and excel in lab experiments and formulas.",
    "how does the person fare in social situations?" : "the data suggests that the person faces a challenge in social realms.",
    "in what area does the person feel that he belongs?" : "in league of legends, where he excels and is at his rightful place.",
    "what kind of reports does the person do frequently?" : "chemistry lab reports, which are a constant chore for the person.",
  }

  for (let key in testObj) {
    if (testObj.hasOwnProperty(key)) {
      const value = testObj[key];
      console.log(`Key: ${key}, Value: ${value}`);
    }
  }
  return (
    <div className={styles.body}>
      <h1>Flash Cards</h1>
      <div className={styles.conentContainer}>
        <div className={styles.flashCardContainer}>
        {Object.entries(testObj).map(([question, answer]) => (
          <FlashCard key={question} question={question} answer={answer} />
        ))}
        </div>
      </div>

      <div>
      </div>

      <div>
        <h1 className={styles.tableHead}>Table Example</h1>
        <Table />
      </div>

    </div>
  );
};

export default App;
