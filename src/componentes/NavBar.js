import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './CartWidget';

const NavBar = () =>{
  return(
        <nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
      <div className='container-fluid'>
        <a className='navbar-brand' href='#'>Proyect</a>
        <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0 nav justify-content-end'>
            <li className='nav-item'>
              <a className='nav-link active' aria-current='page' href='#'>Home</a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='#'>Nosotros</a>
            </li>
            <li className='nav-item dropdown'>
          <a className='nav-link dropdown-toggle' href='#' id='navbarDropdownMenuLink' role='button' data-bs-toggle='dropdown' aria-expanded='false'>
           Productos
          </a>
          <ul className='dropdown-menu' aria-labelledby='navbarDropdownMenuLink'>
            <li><a className='dropdown-item' href='#'>Action</a></li>
            <li><a className='dropdown-item' href='#'>Another action</a></li>
            <li><a className='dropdown-item' href='#'>Something else here</a></li>
          </ul>
        </li>
          </ul>
          <CartWidget/>
        </div>
      </div>
    </nav>
    );
}

export default NavBar;