
import './App.css'
import { Cards } from './Cards/Cards'
import { Comments } from './Comments/Comments'
import { Content } from './Content/Content'
import { Footer } from './Footer/Footer'

function App() {

  return (
    <>
    <main className='Main'>
    <Content/>
    <Cards/>
    <Comments/>
    <Footer/>
    </main>
    </>
  )
}

export default App
