
import React from 'react';
import './CardGrid.css';
import Card from './Card';
import heart from './assets/heart.png';
import family from './assets/family.png';
import doctor from './assets/doctor.png';
import money from './assets/money.png';
import superman from './assets/superman.png';
import clock from './assets/clock.png';
import form from './assets/form.png';
import tree from './assets/tree.png';
import nose from './assets/nose.png';
import dog from './assets/dog.png';
import door from './assets/door.png';
import child from './assets/child.png';
import right from './assets/right.png';

const cardsData = [
  { id: 1 , text: 'It is affecting my health', imageUrl: heart },
  { id: 2, text: 'For my family or friends', imageUrl: family },
  { id: 3, text: 'My doctor recommended quitting', imageUrl: doctor },
  { id: 4, text: 'To save money', imageUrl: money },
  { id: 5, text: 'To set a good example', imageUrl: superman },
  { id: 6, text: 'To have a better future', imageUrl: clock },
  { id: 7, text: 'To take back control', imageUrl: form },
  { id: 8, text: 'For the environment', imageUrl: tree },
  { id: 9, text: 'To look and smell better', imageUrl: nose },
  { id: 10, text: 'For my pets', imageUrl: dog },
  { id: 11, text: 'its hard to find places to smoke', imageUrl: door },
  { id: 12, text: 'Baby on the way', imageUrl: child },
];

const CardGrid = () => {
  return (
    <div className="card-grid">
      {cardsData.map((card) => (
        <Card key={card.id} {...card} />
      ))}
    </div>
  );
};

export default CardGrid;
