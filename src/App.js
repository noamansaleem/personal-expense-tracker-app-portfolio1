//import components files
import Header from './components/Header';
import Balance from './components/Balance';
import { AccountSummary } from './components/AccountSummary';
import { TransactionHistory } from './components/TransactionHistory';
import { AddTransaction } from './components/AddTransaction';

//import Provider
import { GlobalProvider } from './context/GlobalState';

//imports CSS files
import './styles/app.css';

function App() {
  return (
    <GlobalProvider>
      <div className="main-container">
        <Header />
        <Balance />
        <AccountSummary />
        <TransactionHistory />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
