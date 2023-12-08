import logo from './logo.svg';
import './App.css';
import Portfolio from './Components/Portfolio';
import Transactions from './Components/Transactions';
import Followers from './Components/Followers';
import Following from './Components/Following';

function App() {
  return (
    <div>
      <Followers />
      <Following />
    </div>
  );
}

export default App;
