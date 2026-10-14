import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, '')}>
      <Routes>
        <Route
          path="/"
          element={
            <div style={{ padding: '30px', color: 'black' }}>
              <h1>ROUTER FUNCIONANDO</h1>
              <p>As rotas estão funcionando!</p>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
