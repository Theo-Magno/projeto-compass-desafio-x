import Form from './MainComponents/Form';
import './Main.css';
import Login from './MainComponents/Login';
import SecondForm from './MainComponents/SecondForm';
import RecoverPass from './MainComponents/RecoverPass';
import NewPass from './MainComponents/NewPass';
import Friends from './MainComponents/Friends/Friends';

const Main = (): JSX.Element => {
  return (
    <main>
      {/* <Form /> */}
      {/* <SecondForm /> */}
      {/* <Login /> */}
      {/* <RecoverPass /> */}
      {/* <NewPass /> */}
      <Friends />
    </main>
  );
};

export default Main;
