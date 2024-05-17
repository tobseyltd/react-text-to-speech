import { ReactNode, useEffect, useState } from 'react';

interface ErrorBoundaryProps {
    children: ReactNode;
}

const ErrorBoundary = ({ children }: ErrorBoundaryProps) => {
    const [errorMessage, setErrorMessage] = useState<string>('');

    useEffect(() => {
        window.addEventListener('error', handleError);

        return () => {
            window.removeEventListener('error', handleError);
        };
    }, []);

    function handleError(error: ErrorEvent) {
        setErrorMessage(error.message);
        console.error(`Error caught: ${error.message}`);
    }

    if (errorMessage) {
        return (
            <>
                {children}
                <div aria-labelledby='Error Message'>
                    <strong style={{ color: 'red' }}>
                        Something went wrong! Please try again later.
                    </strong>
                </div>
            </>
        );
    }

    return <>{children}</>;
};

export default ErrorBoundary;
