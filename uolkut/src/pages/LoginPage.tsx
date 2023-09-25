import Login from '../components/Main/MainComponents/Login';
import HeaderRegister from '../components/Header/HeaderRegister';
import Footer from '../components/Footer/Footer';

type Props = {};
const LoginPage = (props: Props): JSX.Element => {
  return (
    <div>
      <HeaderRegister />
      <Login />
      <Footer />
    </div>
  );
};
export default LoginPage;
