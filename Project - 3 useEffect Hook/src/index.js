import React from 'react';
import ReactDOM from 'react-dom/client';
import Countdown from './Countdown';
import Fetch from './Fetch';
import WindowResize from './WindowResize';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <WindowResize />
);