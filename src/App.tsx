import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./component/Header/Header";
import { Main } from "./component/Main/Main";
import { MovieCreateForm } from "./component/MovieCreateForm/MovieCreateForm";
import { MovieDetails } from "./component/MovieDetails/MovieDetails";
import { MovieEditForm } from "./component/MovieEditForm/MovieEditForm";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/movies" element={<Main />}>
          <Route path=":id" element={<MovieDetails />} />
          <Route path=":id/edit" element={<MovieEditForm />} />
          <Route path="create" element={<MovieCreateForm />} />
        </Route>
        <Route path="*" element={<Navigate to="/movies" replace />} />
      </Routes>
    </div>
  );
}

export default App;
