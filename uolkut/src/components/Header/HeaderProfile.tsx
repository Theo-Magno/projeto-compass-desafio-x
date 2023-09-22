// import { Link } from 'react-router-dom';

import './HeaderProfile.css';
import Expansive from '../Icons/Expansive';
import ProfileImg from '../../assets/images/profile-img.png';

const HeaderProfile = (): JSX.Element => {
  return (
    <header id="header-profile">
      <h1 className="title-header-profile">UOLkut</h1>
      <nav className="navbar">
        {/* <Link to="#">Início</Link>
        <Link to="#">Perfil</Link>
        <Link to="#">Comunidades</Link>
        <Link to="#">Jogos</Link> */}
        <a href="#">Início</a>
        <a href="#">Perfil</a>
        <a href="#">Comunidades</a>
        <a href="#">Jogos</a>
      </nav>
      <div className="search">
        <input
          type="text"
          className="search input"
          placeholder="Pesquisar no UOLkut"
        />
      </div>
      <div className="profile-header">
        <img src={ProfileImg} alt="Foto de perfil" className="profile-img" />
        <p>Linus Torvalds</p>
        <Expansive />
      </div>
    </header>
  );
};
export default HeaderProfile;
