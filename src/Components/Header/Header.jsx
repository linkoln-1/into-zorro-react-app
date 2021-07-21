import React, { useState } from "react";
import styles from "../../common/Common.module.css";
import LogoText from "./LogoText";
import { NavLink, useHistory } from "react-router-dom";
import { Container, Menu, MenuItem } from "semantic-ui-react";

function Header() {
  const history = useHistory();
  const handleClicked = () => {
    history.push("/add-cafe");
  };
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
                        <NavLink exact to="/Registration">Зарегестрироваться</NavLink>
                      </MenuItem>
                      <MenuItem
                        className={styles.MenuItem}
                        onClick={handleClick}
                      >
                        <NavLink exact to="/Login">Войти</NavLink>
                      </MenuItem>
                      <MenuItem
                        className={styles.MenuItem}
                        onClick={handleClick}
                      >
                        <button className={styles.Button} onClick={handleClicked}>
                          <span>добавить новое заведение</span>
                        </button>
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
