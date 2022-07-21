
import './App.css';
import Dashboard from './views/Dashboard';
import {Route, Routes} from "react-router-dom"
import CreatePage from './views/CreatePage';
import EditPage from './views/EditPage';
import ViewAuthors from './views/ViewAuthors'

function App() {
  return (
    <div className="container mt-5">
      <h1> Favorite Authors</h1>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/new" element={<CreatePage />} />
        <Route path="/authors/edit/:id" element={<EditPage />} />
        <Route path="/authors/:id" element={<ViewAuthors />} />

      </Routes>
    </div>
  );
}

export default App;
