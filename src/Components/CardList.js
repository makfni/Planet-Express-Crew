import React from 'react';
import Card from './Card';

const CardList = ({ crew }) => {
  return (
    <div>
      {
        crew.map((user, i) => {
          return (
            <Card
              key={i}
              id={crew[i].id}
              name={crew[i].name}
              race={crew[i].race}
              email={crew[i].email}
              />
          );
        })
      }
    </div>
  );
}

export default CardList;