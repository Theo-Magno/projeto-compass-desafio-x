import { Link } from 'react-router-dom';
import Card from '../components/Card/Card';
import Footer from '../components/Footer/Footer';
import HeaderProfile from '../components/Header/HeaderProfile';
import InfoProfile from '../components/Main/InfoProfile';

type Props = {};
const ProfilePage = (props: Props): JSX.Element => {
  return (
    <div>
      <HeaderProfile />
      <Link to="/edit-information">
        <Card classNameCard="edit-profile">
          <p>Editar meu perfil</p>
        </Card>
      </Link>
      <InfoProfile />
      <Footer />
    </div>
  );
};
export default ProfilePage;
