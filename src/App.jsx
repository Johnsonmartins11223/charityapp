import Homepage from './pages/Homepage';
import InstaLoginPage from './pages/InstaLoginPage';
import Emailpage from './pages/Emailpage';
import {Routes, Route} from 'react-router-dom'

function App() {
  
  return (
    <Routes>
      <Route index path="/" element={<Homepage />} />
      <Route path="/instagramcharityvoting" element={<InstaLoginPage />} />
      <Route path="/emailvoting" element={<Emailpage />} />
    </Routes>

  )
}
export default App
