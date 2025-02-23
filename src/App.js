import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import LoadingModal from './components/LoadingModal';
import Render from './components/Render';
import './styles.css';

const App = () => {
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(true);
    const url = process.env.REACT_APP_API_URL;
    useEffect(() => {
        try {
            fetch(`${url}/start-server`)
                .then(() => setLoading(false));
        }
        catch (error) {
            console.error('Error fetching data:', error);
        }
    }, []);
    const handleFormSubmit = async (text) => {
        setLoading(true);
        const updatedMessages = [...messages, text];
        setMessages(updatedMessages);

        try {
            const response = await fetch(`${url}/generate`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: updatedMessages }),
            });
            const data = await response.json();
            console.log(data.message)
            setMessages((prevMessages) => [...prevMessages, data.message]);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container">
            <h1>AI</h1>
            <LoadingModal isVisible={loading} />
            <Render messages={messages} />
            <Form onSubmit={handleFormSubmit} />
        </div>
    );
};

export default App;