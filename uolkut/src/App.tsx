import HeaderRegister from './components/Header/HeaderRegister';
import HeaderProfile from './components/Header/HeaderProfile';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

import './App.css';

function App(): JSX.Element {
  return (
    <div className="App">
      {/* <HeaderRegister /> */}
      <HeaderProfile />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
