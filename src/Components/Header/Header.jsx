// // eslint-disable-next-line no-unused-vars
// import React from 'react'

// const Header = () => {
//   return (
//     <div>Header</div>
//   )
// }

// export default Header



// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <header className="p-4 text-black bg-white">
      <nav className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <a href="/">
            <img src="/logoprogrammeleadership.png" alt="Logo de l'entreprise" className="mr-4 h-14" />
          </a>

          <Link to="/" className="font-semibold">Home</Link>
          <Link to="/Dashboard" className="font-semibold">Dashboard</Link>
        </div>
        <div className="flex items-center space-x-2">
          {/* <Button
            component={Link}
            to="/connexion"
            color="error"
            variant="contained"
            style={{ color: 'white' }}
          >
            Connexion
          </Button> */}

          <button className="px-3 py-1 font-semibold border border-black rounded">
            English
          </button>
          <button className="px-3 py-1 ml-2 font-semibold border border-black rounded">
            Français
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
