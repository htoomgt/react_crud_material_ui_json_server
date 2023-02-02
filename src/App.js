import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AddUser from './components/AddUser';
import AllUsers from './components/AllUsers';
import CodeForInterview from './components/CodeForInterview';
import EditUser from './components/EditUser';

// components 
import NavBar from './components/NavBar';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">
      

      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<CodeForInterview />} />
          <Route path="/all" element={<AllUsers />} />
          <Route path="/add" element={<AddUser />} />
          <Route path="/edit/:id" element={<EditUser />} />
          <Route element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
