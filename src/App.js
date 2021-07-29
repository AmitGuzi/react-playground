import DayOfWeek from './DayOfWeek/DayOfWeek';
import './App.css';
import Initials from './Initials/Initials';
import Article from './Article/Article';
import Menu from './Menu/Menu';
import MenuItem from './Menu/MenuItem/MenuItem';
import Counter from './Counter/Counter';
import RandomColorSquare from './RandomColorSquare/RandomColorSquare';
import reactDom from 'react-dom';

function App() {
  function clickHandler() {
    console.log('you clicked');
  }
  return (
    <div>
      <button onClick={clickHandler}>Click me</button>
      <Counter />
      <RandomColorSquare />

      <Menu>
        <MenuItem>
          <a href="/">
            <img /> Homepage
          </a>
        </MenuItem>
        <MenuItem >
          <a href="/">
            <img /> Gallery
          </a>
        </MenuItem>
        <MenuItem >
          <a href="/">
            <img /> Contacts
          </a>
        </MenuItem>

      </Menu>
      <Initials name='Amit Guzi' />
      <DayOfWeek day={1} />
      <Article title="Why the world needs superman" content="long article" />

    </div>
  );
}

export default App;
