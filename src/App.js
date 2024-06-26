// App.js
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FormPage from './Components/Page1';
import Page2 from './Components/page2';

function App() {
  const [data, setData] = useState([]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={<FormPage setData={setData} />}
          />
          <Route
            path='/page2'
            element={<Page2 data={data} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
