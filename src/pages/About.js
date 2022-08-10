import Menu from '../components/Menu';
import {Outlet} from 'react-router-dom';

const menu = [
  {path: 'todo', text: "todoList"},
  {path: 'bye', text: "bye"},
]

function About() {

  return (
    <div className='container'>
      <h1>About Component</h1>

      <Menu menu={menu} />
      <Outlet />
    </div>
  );
}

export default About;
