import { Route, Routes } from 'react-router-dom'
import Header from './Components/Header'
import Home from './Pages/Home'
import Footer from './Components/Footer'
import Error from './Pages/404'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Services from './Pages/Services'
import ML from './Pages/ML'
import './Styles/Index.scss'



function App() {
  
    return (
        <body className='App'>
            <Header />
            <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/Contact' element={<Contact />} />
              <Route path='/Services' element={<Services />} />
              <Route path='/About' element={<About />} />
              <Route path='/ML' element={<ML />} />
              <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
        </body>
      )
    }

export default App