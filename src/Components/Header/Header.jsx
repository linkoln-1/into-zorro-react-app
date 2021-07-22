import React, { useState } from "react";
import styles from "../../common/Common.module.css";
import LogoText from "./LogoText";
import { NavLink } from "react-router-dom";
import { Container, Menu, MenuItem } from "semantic-ui-react";

function Header() {
  const [show, setShow] = useState(false);
  const toggleShow = () => {
    setShow(!show);
  };
  const handleClick = () => {
    console.log("MenuItem click");
    toggleShow();
  };
  return (
    <div className="Parent-Block">
      <div className={styles.header}>
        <LogoText />

        {/* Тут будут кнопки входа и регистрации, поэтому просто напишу текст */}
        <div className={styles.SignUpLogin}>
          <Container>
            <div className={styles.Wrapper}>
              <div className={styles.UserCircle} onClick={toggleShow}>
                drop-down menu
              </div>
              {show && (
                <div className={styles.Popover}>
                  <div className={styles.Cover} onClick={toggleShow} />
                  <div className={styles.WrapperContent}>
                    <Menu className={styles.Menu}>
                      <MenuItem
                        className={styles.MenuItem}
                        onClick={handleClick}
                      >
                        <NavLink
                          className={styles.Href}
                          exact
                          to="/Registration"
                        >
                          Зарегестрироваться
                        </NavLink>
                      </MenuItem>
                      <MenuItem
                        className={styles.MenuItem}
                        onClick={handleClick}
                      >
                        <NavLink className={styles.Href} exact to="/Login">
                          Войти
                        </NavLink>
                      </MenuItem>
                      <MenuItem
                        className={styles.MenuItem}
                        onClick={handleClick}
                      >
                        <NavLink className={styles.Href} exact to="/add-cafe">
                          Добавить Заведение
                        </NavLink>
                      </MenuItem>
                    </Menu>
                  </div>
                </div>
              )}
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default Header;
