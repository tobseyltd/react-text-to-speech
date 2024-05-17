import TextToSpeechInput from './components/TextToSpeechInput/TextToSpeechInput';
import ErrorBoundary from './helpers/ErrorBoundary';
import useSpeechSynthesis from './hooks/useSpeechSynthesis';

const App = () => {
    const { isSpeaking, speakInputText } = useSpeechSynthesis();

    return (
        <>
            <ErrorBoundary>
                <TextToSpeechInput btnDisabled={isSpeaking} startSpeaking={speakInputText} />
            </ErrorBoundary>
        </>
    );
};

export default App;

