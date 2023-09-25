import Form from './MainComponents/Form';
import './Main.css';
import Login from './MainComponents/Login';
import SecondForm from './MainComponents/SecondForm';
import RecoverPass from './MainComponents/RecoverPass';
import NewPass from './MainComponents/NewPass';
import EditInformation from './MainComponents/EditInformations';

const Main = (): JSX.Element => {
  return (
    <main>
      {/* <Form /> */}
      {/* <SecondForm /> */}
      {/*<Login />*/}
      {/*<RecoverPass />*/}
      {/* {<NewPass />} */}
      <EditInformation />
    </main>
  );
};

export default Main;
