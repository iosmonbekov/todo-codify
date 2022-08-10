import { Link } from 'react-router-dom';

function Menu({ menu }) {
  return (
    <nav className='menu'>
      {menu.map(({ path, text }) => (
        <Link key={path} to={path}>{text}</Link>
      ))}
    </nav>
  );
}

export default Menu;
