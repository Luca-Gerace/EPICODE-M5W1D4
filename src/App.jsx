import './App.css'
import Card from './components/Card'
import Header from './components/Header'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import items from './items.json'

function App() {
  items.map() // TODO: completare

  return (
    <>
      <Header />
      <Card />
      <Footer />
    </>
  )
}

export default App
