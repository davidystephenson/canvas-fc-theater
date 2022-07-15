import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

const container = document.getElementById('root')
if (container == null) throw new Error('No container with id "root" found')

const root = ReactDOM.createRoot(container)
const app = (
  <React.StrictMode>
    <App
      width={1600}
      height={900}
      draw={(ctx) => {
        ctx.fillStyle = 'red'
        ctx.fillRect(
          0, 0, ctx.canvas.width, ctx.canvas.height
        )
      }}
    />
  </React.StrictMode>
)
root.render(app)
