import './App.css';
import RateTracker from './components/coinRateList/RateTracker';
import {Routes, Route} from 'react-router-dom'
import Layout from './hoc/Layout/Layout'

function App() {
  return (
<Layout>
          <Routes>
              <Route path = "/"  element = {<RateTracker/>}/>
          </Routes>
</Layout>
  );
}

export default App;
