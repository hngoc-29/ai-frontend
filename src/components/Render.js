import React from 'react';

const Render = ({ messages }) => {
    return (
        <div id="render">
            {messages.map((message, index) => (
                <p key={index} dangerouslySetInnerHTML={{ __html: message.replace(/\n/g, '<br>') }}></p>
            ))}
        </div>
    );
};

export default Render;