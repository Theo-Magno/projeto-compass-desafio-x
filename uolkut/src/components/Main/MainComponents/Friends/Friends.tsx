import { Link } from 'react-router-dom';

import photoFernando from '../../../../assets/images/friend-fernando.png';
import photoAna from '../../../../assets/images/friend-ana.png';
import photoCarlos from '../../../../assets/images/friend-carlos.png';
import photoVitor from '../../../../assets/images/friend-vitor.png';
import photoMatheus from '../../../../assets/images/friend-matheus.png';
import photoRamos from '../../../../assets/images/friend-ramos.png';
import photoEiji from '../../../../assets/images/friend-eiji.png';
import photoJulia from '../../../../assets/images/friend-julia.png';
import photoCarol from '../../../../assets/images/friend-carol.png';

import './Friends.css';
import Friend from './Friend';
import Card from '../../../Card/Card';

const Friends = (): JSX.Element => {
  return (
    <Card classNameCard="card-friends">
      <div className="header-card-profile">
        <p>Amigos(248)</p>
        {/* <Link to="#"></Link> */}
        <a href="#">Ver todos</a>
      </div>
      <div className="friends-box">
        <div className="friends-row">
          <Friend srcImgFriend={photoFernando} nameFriend="Fernando" />
          <Friend srcImgFriend={photoAna} nameFriend="Ana" />
          <Friend srcImgFriend={photoCarlos} nameFriend="Carlos" />
        </div>
        <div className="friends-row">
          <Friend srcImgFriend={photoVitor} nameFriend="Vitor" />
          <Friend srcImgFriend={photoMatheus} nameFriend="Matheus" />
          <Friend srcImgFriend={photoRamos} nameFriend="Ramos" />
        </div>
        <div className="friends-row">
          <Friend srcImgFriend={photoEiji} nameFriend="Eiji" />
          <Friend srcImgFriend={photoJulia} nameFriend="Julia" />
          <Friend srcImgFriend={photoCarol} nameFriend="Carol" />
        </div>
      </div>
    </Card>
  );
};
export default Friends;
