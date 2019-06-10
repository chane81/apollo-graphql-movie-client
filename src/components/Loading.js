import React from 'react';
import classNames from 'classnames/bind';
import styles from '../styles/global.scss';

const cx = classNames.bind(styles);

const Loading = () => (
  <div className={cx('Loading')}>
    <img src="/images/loading.gif" alt="loading" />
  </div>
);

export default Loading;