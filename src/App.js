//import components files
import Header from './components/Header';
import Balance from './components/Balance';
import { AccountSummary } from './components/AccountSummary';
import { TransactionHistory } from './components/TransactionHistory';
import { AddTransaction } from './components/AddTransaction';

//import Provider
import { GlobalProvider } from './context/GlobalState';

//imports CSS files
import './styles/bootstrap.css';
import './styles/app.css';


function App() {
  return (
    <GlobalProvider>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 offset-lg-4 col-md-8 offset-md-2">
            <Header />
            <Balance />
            <AccountSummary />
            <TransactionHistory />
            <AddTransaction />
          </div>
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
