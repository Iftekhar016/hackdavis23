import React, { useState, useEffect } from 'react';
import FlashCard from './flashcard.js';
import 'bootstrap/dist/css/bootstrap.min.css';

async function fetchData(prompt) {
  try {
    const response = await fetch("https://api.openai.com/v1/completions", {
      method: "POST",
      headers: {
        Authorization: "Bearer {APIKEY}",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "text-davinci-003",
        prompt,
        max_tokens: 40
      }),
    });
    const data = await response.json();
    return data.choices?.[0]?.text?.trim() || '';
  } catch (error) {
    console.error(error);
    return '';
  }
}

const APIFetcher = () => {
  const [apiPrompt, setApiPrompt] = useState('');
  const [apiResponse, setApiResponse] = useState('');
  const [apiMessages, setApiMessages] = useState([]);
  const [dictionary, setDictionary] = useState({});

  useEffect(() => {
    console.log("API Messages:", apiMessages);
  }, [apiMessages]);

  useEffect(() => {
    console.log("Dictionary:", dictionary);
  }, [dictionary]);

  const handleAPIClick = async () => {
    const response = await fetchData(apiPrompt);
    setApiResponse(response);
    setApiMessages([...apiMessages, response]);

    try {
      const parsedDictionary = JSON.parse(response);
      setDictionary(parsedDictionary);
    } catch (error) {
      console.error("Error parsing API response:", error);
      // Handle the error condition here
    }
  };

  const handlePromptChange = (event) => {
    setApiPrompt(event.target.value);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1 style={{ marginBottom: '1rem' }}>CARDIFY PRO</h1>
      <input
        type="text"
        value={apiPrompt}
        onChange={handlePromptChange}
        className="form-control mb-3"
        style={{ width: '300px', fontSize: '1rem' }}
      />
      <button onClick={handleAPIClick} className="btn btn-primary mb-3">Test API</button>
      {apiResponse && <p>{apiResponse}</p>}
      {apiMessages.map((message, index) => (
        <p key={index}>{message}</p>
      ))}
      <div>
        <h2>Flashcards:</h2>
        <div className="flashcard-container">
          {Object.entries(dictionary).map(([term, definition]) => (
            <FlashCard key={term} question={term} answer={definition} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default APIFetcher;
