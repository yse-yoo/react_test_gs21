import logo from './logo.svg';
import './App.css';
import Message from './Message'
import CountPage from './CountPage'
import Information from './Information';

function App() {
  var user = {
    name: "Yohei",
    age: 48,
    country: "Japan",
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2>Hello My Page</h2>
        <Message user={user} />
        <CountPage />
        <Information />
      </header>
    </div>
  );
}

export default App;
