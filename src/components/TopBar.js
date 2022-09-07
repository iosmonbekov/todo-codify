import { Link } from 'react-router-dom';

function TopBar() {
  return (
    <div className='top-bar'>
      <Link to={'/'}>
        <h1>My Store</h1>
      </Link>
        
      <Link to={'/cart'} className='button fancy-button'>
        Checkout
      </Link>
    </div>
  );
}

export default TopBar;
