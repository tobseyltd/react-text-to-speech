import { useEffect, useState } from 'react';

const useSpeechSynthesis = () => {
    const [isSpeaking, setIsSpeaking] = useState<boolean>(false);

    const speakInputText = (inputText: string) => {
        setIsSpeaking(true);

        const synthesis = new SpeechSynthesisUtterance();

        synthesis.text = inputText;
        synthesis.lang = 'de-DE';

        synthesis.onerror = ({ error }: SpeechSynthesisErrorEvent) => {
            setIsSpeaking(false);
            throw new Error(`Speech Synthesis Error: ${error}`);
        };

        synthesis.onend = () => setIsSpeaking(false);

        speechSynthesis.speak(synthesis);
    };

    // Cleanup
    useEffect(() => {
        if (isSpeaking) {
            return () => {
                speechSynthesis.cancel();
            };
        }
    }, [isSpeaking]);

    return { isSpeaking, speakInputText };
};

export default useSpeechSynthesis;
