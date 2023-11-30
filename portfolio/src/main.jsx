import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import { AuthContextProvider } from './auth/context/AuthContextProvider.jsx'
import { ProjectContextProvider } from './projects/context/ProjectContextProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthContextProvider>
      <ProjectContextProvider>
        <App />
      </ProjectContextProvider>
    </AuthContextProvider>
  </BrowserRouter>,
)
