import './App.css'
import Header from './components/Header'
import Greeting from './components/Greetings'
import Counter from './components/Counter'
import ColorPicker from './components/ColorPick'
import ThemeToggle from './components/Theme'
import Clicker from "./components/Clicker";
import Inputer from './components/Input'



function App() {
  return (
    <>
    <ThemeToggle/>
    <Greeting name = "Mohamed" surname = "Hassan" />
    <Counter/>
    <Header/>
    <ColorPicker/>
    <Clicker/>
    <Inputer/>
    </>
  )
}

export default App
