import React from 'react';
import FlashCard from '../components/flashCard';
import styles from '../components/flashCard.module.css';

const YourComponent = () => {
  return (
    <div>
      <h1>Flash Cards</h1>
      <div className={styles.flashCardContainer}>
        <FlashCard
          question="What is the capital of France?"
          answer="Paris"
        />
        <FlashCard
          question="What is the tallest mountain in the world?"
          answer="Mount Everest"
        />
      </div>
    </div>
  );
};

export default YourComponent;
