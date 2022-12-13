import { useRoutes } from 'react-router-dom';
import ROUTE_CONFIG from '@/router';

function App() {
  const element = useRoutes(ROUTE_CONFIG);

  return (
    <div className="App">
      {element}
    </div>
  )
}

export default App;
