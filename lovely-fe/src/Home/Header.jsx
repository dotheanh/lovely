import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Menu, Row, Col, Icon, Button, Popover, Badge } from 'antd';


const searchEngine = 'Google';

export default class Header extends React.Component {
  static propTypes = {
    isFirstScreen: PropTypes.bool,
    isMoblie: PropTypes.bool,
  }
  state = {
    menuVisible: false,
  };
  onMenuVisibleChange = (visible) => {
    this.setState({
      menuVisible: visible,
    });
  }
  handleShowMenu = () => {
    this.setState({
      menuVisible: true,
    });
  }

  handleHideMenu = () => {
    this.setState({
      menuVisible: false,
    });
  }

  handleSelectFilter = (value, option) => {
    const optionValue = option.props['data-label'];
    return optionValue === searchEngine ||
      optionValue.indexOf(value.toLowerCase()) > -1;
  }

  render() {
    const { isFirstScreen, isMoblie } = this.props;
    const { menuVisible } = this.state;
    const menuMode = isMoblie ? 'inline' : 'horizontal';
    const headerClassName = classNames({
      clearfix: true,
      'home-nav-white': !isFirstScreen,
    });

    const menu = [
      <Button className="header-lang-button" ghost size="small" key="lang">
        English
      </Button>,
      <Menu mode={menuMode} defaultSelectedKeys={['home']} id="nav" key="nav">
        <Menu.Item key="home">
          TIME LINE
        </Menu.Item>
        <Menu.Item key="docs/spec">
          FEED
        </Menu.Item>
        <Menu.Item key="docs/react">
          PLAY
        </Menu.Item>
      </Menu>,
    ];

    return (
      <header id="header" className={headerClassName}>
        {menuMode === 'inline' ? (
          <Popover
            overlayClassName="popover-menu"
            placement="bottomRight"
            content={menu}
            trigger="click"
            visible={menuVisible}
            arrowPointAtCenter
            onVisibleChange={this.onMenuVisibleChange}
          >
            <Icon
              className="nav-phone-icon"
              type="menu"
              onClick={this.handleShowMenu}
            />
          </Popover>
        ) : null}
        <Row>
          <Col lg={4} md={5} sm={24} xs={24}>
            <a id="logo">
              <img alt="logo" src="https://scontent.fsgn5-8.fna.fbcdn.net/v/t1.6435-9/139260309_2249341975209810_1633963821834950038_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=h0ZtcJkFhHQAX_yeg-d&_nc_ht=scontent.fsgn5-8.fna&oh=e19f19b741d191aee0d670ec0615e679&oe=61A9C7CF" />
              <span>THE ANH</span>
            </a>
            <a id="logo">
              <span>LAN HUONG</span>
              <img alt="logo" src="https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-6/237935115_2033781410107415_7418908367087038463_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=-1NIqwzuh5oAX8ULao6&_nc_ht=scontent.fsgn5-5.fna&oh=b79b84e79660797af39f1e7bd4f51734&oe=618BD3CF" />
            </a>
          </Col>
          <Col lg={20} md={19} sm={0} xs={0}>
            {menuMode === 'horizontal' ? menu : null}
          </Col>
        </Row>
      </header>
    );
  }
}
