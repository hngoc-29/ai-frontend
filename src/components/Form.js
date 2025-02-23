import React, { useState } from 'react';

const Form = ({ onSubmit }) => {
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(text);
        setText('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter your message"
                required
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default Form;