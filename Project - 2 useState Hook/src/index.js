import React from 'react';
import ReactDOM from 'react-dom/client';
import Counter from './Counter';
import ReadingInputValue from "./ReadingInputValue"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ReadingInputValue />
  </React.StrictMode>
);