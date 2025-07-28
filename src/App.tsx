import './App.css'
import { Routes, Route } from 'react-router';
import Home from './Home';
import Blog from './Blog';


function App() {
  // const [count, setCount] = useState(0)

  return (

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>

  )
}

export default App
