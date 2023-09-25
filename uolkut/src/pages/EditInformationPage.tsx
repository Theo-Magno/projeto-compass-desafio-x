import Footer from '../components/Footer/Footer';
import HeaderProfile from '../components/Header/HeaderProfile';
import EditInformation from '../components/Main/MainComponents/EditInformations';

type Props = {};
const EditInformationPage = (props: Props) => {
  return (
    <div>
      <HeaderProfile />
      <EditInformation />
      <Footer />
    </div>
  );
};
export default EditInformationPage;
