import React from 'react';
import {IoBarChartSharp} from 'react-icons/io5';
import {MdQueryStats} from 'react-icons/md';
import {FaWpforms} from 'react-icons/fa';
import {ImProfile} from 'react-icons/im';
import {MdAdminPanelSettings} from 'react-icons/md';

const links = [
  {
    text: 'Legg til jobb',
    path: '.',
    icon: <FaWpforms />
  },
  {
    text: 'Alle jobber',
    path: 'all-jobs',
    icon: <MdQueryStats />
  },
  {
    text: 'Status',
    path: 'stats',
    icon: <IoBarChartSharp />
  },
  {
    text: 'Profile',
    path: 'profile',
    icon: <ImProfile />
  },
  {
    text: 'Admin',
    path: 'admin',
    icon: <MdAdminPanelSettings />
  },
]

export default links