import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar';

function App() {

  document.title = 'MoviesRUs'
  return (
    <div className="App">
      <NavBar />
    </div>
  );
}

export default App;
