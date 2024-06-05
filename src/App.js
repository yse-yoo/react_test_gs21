import logo from './logo.svg';
import './App.css';
import Message from './Message'

function App() {
  var user = {
    name: "Yohei Yoshikawa",
    age: 48,
    country: "Japan",
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2>Hello My Page</h2>
        <Message user={user} />
      </header>
    </div>
  );
}

export default App;
