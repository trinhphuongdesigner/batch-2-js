import logo from './logo.svg';
import Profile from './components/Profile.jsx';
import KnowLedge from './components/knowLedge.jsx';


import './App.css';
import './style.css';
import Button from './components/buttonGroup/button.jsx';

function App() {
  const looping = (n) => {
    let jsx = [];
    for (let i = 1; i <= n; ++i) {
      jsx.push(<Profile key={i} />)
    }

    return jsx;
  }

  const skills = [
    'HTML',
    'CSS',
    'Javascript',
    'ReactJS',
    'ABC',
    'XYZ',
    'BBB',
    'XXX',
  ]

  return (
    <div className="App">
      <Button />
      <h1>Knowledge</h1>
      <ul>
        {/* <li className='know-ledge'>HTML</li> */}
        {/* <KnowLedge skill="HTML" />
        <KnowLedge skill="CSS" />
        <KnowLedge skill="Javascript" />
        <KnowLedge skill="ReactJS" />
        <KnowLedge skill="ABC" />
        <KnowLedge skill="XYZ" />
        <KnowLedge skill="BBB" />
        <KnowLedge skill="XXX" /> */}
      </ul>
      {/* {looping(10)} */}
      {/* <Profile key={i} /> */}
      {/* <Profile></Profile> */}
    </div>
  );
}

export default App;
