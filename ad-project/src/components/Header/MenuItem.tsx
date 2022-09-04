import React from 'react';
import { MenuItemInfoType } from './types';
import './style.scss';

interface IProps {
    isActive?: boolean;
    // eslint-disable-next-line no-unused-vars
    onClick?: (url: string) => void;
    menuItemInfo: MenuItemInfoType;
}

const MenuItem: React.FC<IProps> = (props) => {
  const { onClick, menuItemInfo, isActive } = props;
  const handleMenuClick = (url: string) => {
    if (onClick) {
      onClick(url);
    }
  };

  return (
    <div className="index-menuItem-component-box">
      <div className="menu-item-title" onClick={() => handleMenuClick(menuItemInfo.url)}>
        {menuItemInfo.name}
        {
          menuItemInfo.menuChildren.length > 0 && (<span className="arrow-icon"> </span>)
        }
      </div>
      <div className="bottom-line"> </div>
      {
        isActive && (<div className="bottom-line-active"> </div>)
      }
      {
        menuItemInfo.menuChildren.length > 0 && (
          <div className="menu-children-box">
            {
              menuItemInfo.menuChildren.map((menuChild, index) => (
                <div
                  className="menu-child"
                  key={`menu-child${index.toString()}`}
                >
                  <span onClick={() => handleMenuClick(menuChild.url)}>{menuChild.label}</span>
                </div>
              ))
            }
          </div>
        )
      }
    </div>
  );
};

export default MenuItem;
