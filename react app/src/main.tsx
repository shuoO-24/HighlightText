import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import '@/static/styles/index.scss'
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

ReactDOM.render(
  // <React.StrictMode>
    <BrowserRouter>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </BrowserRouter>,
  // </React.StrictMode>,
  document.getElementById('root')
)
