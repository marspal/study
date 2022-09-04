import React, { FC } from 'react';
import { UserOutlined } from '@ant-design/icons';
import { MENU_INDEX_CONFIG } from 'common/constants/menu';
import MenuItem from './MenuItem';
import './style.scss';

interface IProps {
    history?: any
}

const Header: FC<IProps> = (props) => {
  const { history } = props;
  const userName = 'andyxmq.xu';
  const handleClick = (url: string) => {
    if (history) {
      history.push(url);
    }
  };
  return (
    <div className="header-component-box">
      <div className="left">
        <div className="logo"> </div>
        <div className="menu">
          {
            MENU_INDEX_CONFIG.map((menuItem, index) => (
              <MenuItem
                menuItemInfo={menuItem}
                isActive={menuItem.isActive}
                key={`index-menu-item${index.toString()}`}
                onClick={(url: string) => handleClick(url)}
              />
            ))
          }
        </div>
      </div>
      <div className="user-info">
        <UserOutlined />
        <span className="user-name">{userName}</span>
      </div>
    </div>
  );
};

export default Header;
