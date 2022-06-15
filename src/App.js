import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <div className='address-balance'>
          <select className='address'>
            <option>address-1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
          <div className='balance'>balance: <span>100</span></div>
        </div>
        <div className='claim-connect'>
          <input type="text" className="amount"/>
          <button className='btn-claim-enable'>claim</button>
        </div>
        <button className='btn-connectwallet'>connect metamask</button>
      </div>
    </div>
  );
}

export default App;
