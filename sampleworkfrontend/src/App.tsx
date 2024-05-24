import './App.css'
import { AppRoutes } from './routes/Routes';
import { ErrorBoundary } from './routes/ErrorBoundary';



function App() {

  return (
    <>
      <ErrorBoundary>
        <AppRoutes />
      </ErrorBoundary>
    </>
  )
}

export default App
