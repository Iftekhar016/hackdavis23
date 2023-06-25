import React, { useState } from 'react';
/*I want you to generate flashcards of the following in json format {term:definition}
cat: feline, dog:canine, raiyan:bengali */
const APIKEY = /**paste in key here */

async function fetchData(prompt, suffix) {
  try {
    const response = await fetch("https://api.openai.com/v1/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${APIKEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "text-davinci-003",
        prompt,
        suffix,
        max_tokens:100
      }),
    });
    const data = await response.json();
    return data.choices?.[0]?.text?.trim() || '';
  } catch (error) {
    console.error(error);
    return '';
  }
}

const CaseInverter = () => {
  const [inputText, setInputText] = useState('');
  const [invertedText, setInvertedText] = useState('');
  const [apiPrompt, setApiPrompt] = useState('');
  const [apiResponse, setApiResponse] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleInvertClick = () => {
    const invertedString = inputText
      .split('')
      .map((char) => {
        if (char === char.toUpperCase()) {
          return char.toLowerCase();
        } else {
          return char.toUpperCase();
        }
      })
      .join('');

    setInvertedText(invertedString);
  };

  const handleAPIClick = async () => {
    const response = await fetchData(apiPrompt, "what is your name");
    setApiResponse(response);
  };

  const handlePromptChange = (event) => {
    setApiPrompt(event.target.value);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1 style={{ marginBottom: '1rem' }}>CASE INVERTER</h1>
      <input
        type="text"
        value={inputText}
        onChange={handleInputChange}
        style={{ width: '300px', height: '40px', fontSize: '1rem', marginBottom: '1rem' }}
      />
      <button onClick={handleInvertClick}>Invert Case</button>
      <p>{invertedText}</p>
      <input
        type="text"
        value={apiPrompt}
        onChange={handlePromptChange}
        style={{ width: '300px', height: '40px', fontSize: '1rem', marginBottom: '1rem' }}
      />
      <button onClick={handleAPIClick}>Test API</button>
      {apiResponse && <p>{apiResponse}</p>}
    </div>
  );
};

export default CaseInverter;
