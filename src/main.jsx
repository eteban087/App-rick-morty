import React from 'react'
import ReactDOM from 'react-dom/client'
import { RickAndMortyApp } from './RickAndMortyApp'
import '../src/styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RickAndMortyApp />
  </React.StrictMode>,
)
