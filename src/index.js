import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Web Component 相關引入
import r2wc from "@r2wc/react-to-web-component";
import MyComponent from './MyComponent';

// 創建 Web Component
const WebComponent = r2wc(MyComponent, React, ReactDOM);
customElements.define('demo-dogcatstar-component', WebComponent);

// 原有的 React 應用程式
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Performance measuring
reportWebVitals();
