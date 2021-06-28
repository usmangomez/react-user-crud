//Libraries
import React from 'react';
import reactDom from 'react-dom';

// Styles
import './styles/style.scss';
import 'bootstrap/dist/css/bootstrap.css';

//Apps
import { UserApp } from './UserApp';

const divRoot = document.querySelector('#root');

reactDom.render(<UserApp />, divRoot);
