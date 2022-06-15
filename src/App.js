import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <div className='address-balance'>
          <select className='address'>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
          <div className='balance'>balance: <span>100</span></div>
        </div>
        <div className='claim-connect'>
          <button className='btn-claim-enable'>claim</button>
          <button className='btn-connectwallet'>connect metamask</button>
        </div>
      </div>
    </div>
  );
}

export default App;
