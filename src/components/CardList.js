import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
  console.log('CardList');
  console.log(robots);
  //Simulate Error
  // if (true) {
  //   throw new Error('Error, Sorry...')
  // }
  return (
    <div>
      {
        robots.map((user, i) => {
          return (
            <Card
              key={i}
              id={robots[i].id}
              name={robots[i].name}
              email={robots[i].email}
            />
          );
        })
      }
    </div>
  );
}

export default CardList;