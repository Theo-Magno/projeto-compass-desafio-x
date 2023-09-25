import { Link } from 'react-router-dom';

import Card from './Card';
import './CardsFC.css';

type Props = {
  children: React.ReactNode;
  typeCard: string;
  link?: string;
};

const CardsFC = ({ children, typeCard, link }: Props): JSX.Element => {
  return (
    <Card classNameCard="card-friends">
      <div className="header-card-profile">
        <p>{typeCard}</p>
        {/* <Link to="#"></Link> */}
        <a href="#">Ver todos</a>
      </div>
      {children}
    </Card>
  );
};

export default CardsFC;
