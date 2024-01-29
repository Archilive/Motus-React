import React, { useContext } from 'react';
import { UserContext } from 'src/components/UserProvider.tsx';

const Navbar = () => {
  const isLogged = useContext(UserContext);
  return (
    <div>
      <span>My app</span>
      <a href="/link1">Link 1</a>
      <a href="/link2">Link 2</a>
      {isLogged ? < /> : <a href="/login">Se connecter</a>}
    </div>
  );
};
