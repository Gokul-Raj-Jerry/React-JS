import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
/* import App from '../src/ReactMemoAndUseCallback/App'; */
import Memo from './useMemo/Memo.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Memo />);