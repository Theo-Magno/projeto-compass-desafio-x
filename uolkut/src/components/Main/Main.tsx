import Form from "./MainComponents/Form";
import "./Main.css";
import Login from "./MainComponents/Login";
import SecondForm from "./MainComponents/SecondForm";
import RecoverPass from "./MainComponents/RecoverPass";
import NewPass from "./MainComponents/NewPass";

const Main = (): JSX.Element => {
  return (
    <main>
      {/* <Form /> */}
      {<SecondForm />}
      {/*<Login />*/}
      {<RecoverPass />}
      {<NewPass />}
    </main>
  );
};

export default Main;
