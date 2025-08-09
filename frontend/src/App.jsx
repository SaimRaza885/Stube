import routes from './route/route';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import { Suspense } from 'react';
import Loading from './components/Loading';

function App() {
  return (
    <Router>
      <Suspense fallback={<Loading/>}>
        <Routes>
          {routes.map(({ path, element, isPrivate }) => (
            <Route
              key={path}
              path={path}
              element={isPrivate ? <ProtectedRoute>{element}</ProtectedRoute> : element}
            />
          ))}
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
