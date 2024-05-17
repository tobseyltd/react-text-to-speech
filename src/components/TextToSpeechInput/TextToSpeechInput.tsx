import React, { useState } from 'react';
import './textToSpeech.css'

type InputChangeEvent = React.ChangeEvent<HTMLTextAreaElement>;

interface userInput {
    btnDisabled: boolean;
    startSpeaking: (userInput: string) => void;
}

const TextToSpeechInput = ({ btnDisabled, startSpeaking }: userInput) => {
    const [inputText, setInputText] = useState<string>('');

    function handleUserInput(event: InputChangeEvent) {
        const { value } = event.target;
        setInputText(value);
    }
    return (
        <div className='text-input-wrapper'>
            <h1>Text to Speech App</h1>

            <textarea
                autoFocus
                aria-label='Enter Text to be spoken'
                aria-required
                onInput={handleUserInput}
                placeholder='Please enter Text'
                required
                value={inputText}
            ></textarea>

            <button
                aria-label={btnDisabled ? 'Speaking...' : 'Speak'}
                aria-disabled={btnDisabled}
                disabled={!inputText || btnDisabled}
                onKeyDown={() => startSpeaking(inputText)}
                onClick={() => startSpeaking(inputText)}
                tabIndex={0}
            >
                {btnDisabled ? 'Speaking...' : 'Speak'}
            </button>
        </div>
    );
};

export default TextToSpeechInput;
