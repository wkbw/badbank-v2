import { NavLink } from "react-router-dom";  

const NavUnlisted = styled.ul`

  display: flex;

  a {
    text-decoration: none;
  }

  li {
    color: red;
    margin: 0 0.8rem;
    font-size: 1.3rem;
    position: relative;
    list-style: none;
  }

  .current {
    li {
      border-bottom: 2px solid black;
    }
  }
`;


function Nav() {
  return (
    <NavUnlisted>
      <NavLink to="/" activeClassName="current" exact>
        <li>Home</li>
      </NavLink>
      <NavLink to="/about" activeClassName="current" exact>
        <li>About</li>
      </NavLink>
    </NavUnlisted>
  );
}
function NavBar(){
  
   return(
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
         <div className="container-fluid">
            <Link className="navbar-brand nav-link primary" aria-current="page" to="/"><img src="./banksm.png" alt="Logo" class="d-inline-block align-text-middle" /> Bad Bank</Link>
            <div className="collapse navbar-collapse" id="navbarNav">
               <ul className="nav nav ">
                  <li className="nav-item">
                     <Link className="nav-link" to="/createaccount/">Create Account</Link>
                  </li>
                   <li className="nav-item">
                     <Link className="nav-link" to="/deposit/">Deposit</Link>
                  </li>
                  <li className="nav-item">
                     <Link className="nav-link" to="/withdraw/">Withdraw</Link>
                  </li>
                  <li className="nav-item">
                     <Link className="nav-link" to="/alldata/">All Data</Link>
                  </li>
               </ul>
            </div>
         </div>
      </nav>
   );
}

