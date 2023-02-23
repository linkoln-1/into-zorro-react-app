//library
import React from 'react';
import { Routes, Route } from 'react-router-dom';

//components
import HomePage from '../HomePage/HomePage';
import Content from './DetailedDescription/Content';
import AddCafe from '../../Header/AddCafe/AddCafe';
import Registration from '../../Registration/Registration';
import Login from '../../Login';

//styles
import styles from '../../../common/Common.module.css';

function Index(props) {
  return (
    <div className={styles.card}>
      <Routes>
        <Route exact path="/registration" element={<Registration />} />
        <Route exact path="/auth" element={<Login />} />
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/add-cafe" element={<AddCafe />} />
        <Route exact path="/:id?" element={<Content />} />
      </Routes>
    </div>
  );
}

export default Index;
