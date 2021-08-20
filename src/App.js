import './App.css';
import SearchForm from "./features/search/SearchForm";
import MoviesList from "./features/movies/MoviesList";

function App() {
  return (
    <div className="container">
      <h1 className="title">React Movie Search</h1>
      <SearchForm />
      <MoviesList />
    </div>
  );
}

export default App;
