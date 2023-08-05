import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from 'pages/Root';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Root />, document.getElementById('root'));
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
serviceWorker.unregister();
