import React from 'react';
import CardItem from './CardItem';
import { CardItemType } from './types';
import './style.scss';

interface IProps {
    cardData: CardItemType[];
    onChange?: (selectedId: string) => void;
}

const CardTabs: React.FC<IProps> = (props) => {
  const { cardData, onChange } = props;
  const handleChange = (selectedId: string) => {
    if (onChange) {
      onChange(selectedId);
    }
  };
  return (
    <div className="cardtabs-component-box">
      {
        cardData.map((cardItem: CardItemType, index: number) => (
          <CardItem
            name={cardItem.name}
            value={cardItem.value}
            persent={cardItem.persent}
            icon={cardItem.icon}
            isSelected={cardItem.isSelected}
            id={cardItem.id}
            onClick={(selectedId: string) => { handleChange(selectedId); }}
            key={`carditem${index.toString()}`}
          />
        ))
      }
    </div>
  );
};

export default CardTabs;
