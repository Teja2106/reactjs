import { useState } from "react"
import About from "./components/About"
import Navbar from "./components/Navbar"
import TextForm from "./components/TextForm"
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'

function App() {
  const [mode, setMode] = useState('light');
  
  const [myStyle, setMyStyle] = useState({
    color: 'black',
    backgroundColor: 'white'
  })
  const [textColor, setMyTextColor] = useState({
    color: 'black'
  })

  const [alert, setAlert] = useState(null);

  const showAlert = (message: string, type: string) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000)
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'black'
      setMyStyle({
        color: 'white',
        backgroundColor: 'black'
      })
      setMyTextColor({
        color: 'white'
      })
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      setMyStyle({
        color: 'black',
        backgroundColor: 'white'
      })
      setMyTextColor({
        color: 'black'
      })
    }
  }
  return (
    <>
    <Router>
      <Navbar title="TextUtils" about="About" mode={mode} toggleMode={toggleMode} textColor={ textColor } />
      <Alert alert={ alert } />
      <Routes>
        <Route path="/" element={ <TextForm heading="Enter the text to analyze" textColor={ textColor } mode={ mode } showAlert={ showAlert } /> }/>
        <Route path="/about" element={ <About theme={ myStyle } textColor={ textColor } /> }/>
      </Routes>
    </Router>
    </>
  )
}

export default App