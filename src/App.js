import './App.css';
import CreditCardForm from 'components/CreditCardForm';

function App() {
  return (
    <div className="App">
      <header>Credit Card Form</header>
      <CreditCardForm price={198} />
    </div>
  );
}

export default App;
