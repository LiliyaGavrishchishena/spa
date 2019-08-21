import React, { useState, useCallback } from 'react';
import update from 'immutability-helper';

import Card from './Card';

// styles
import styles from './Services.module.css';

const Services = () => {
  const [cards, setCards] = useState([
    {
      id: 1,
      iconClass: 'far fa-calendar-alt',
      title: 'Planning',
      description:
        'Mauris vitae turpis ut sem blandit consequat et at ligula. Suspendisse quam lectus, tristique dapibus sapien et, tempus suscipit nisl.'
    },
    {
      id: 2,
      iconClass: 'fas fa-crop',
      title: 'Design',
      description:
        'Nulla eu metus faucibus, vehicula tortor quis, venenatis odio. Nullam purus mauris, feugiat in odio vitae, posuere volutpat libero. Sed et convallis libero.'
    },
    {
      id: 3,
      iconClass: 'fas fa-code',
      title: 'Development',
      description:
        'Ut ornare vitae enim a rhoncus. Nullam aliquet tristique scelerisque. Sed volutpat dictum risus ac laoreet. Suspendisse id lorem in enim sollicitudin varius.'
    }
  ]);

  const moveCard = useCallback(
    (dragIndex, hoverIndex) => {
      const dragCard = cards[dragIndex];
      setCards(
        update(cards, {
          $splice: [[dragIndex, 1], [hoverIndex, 0, dragCard]]
        })
      );
    },
    [cards]
  );

  const renderCard = (card, index) => {
    return (
      <Card
        index={index}
        id={card.id}
        iconClass={card.iconClass}
        title={card.title}
        description={card.description}
        moveCard={moveCard}
      />
    );
  };

  return (
    <ul className={styles.services}>
      {cards.map((card, i) => (
        <li key={card.id}> {renderCard(card, i)}</li>
      ))}
    </ul>
  );
};

export default Services;
