import React from 'react';
import PropTypes from 'prop-types';

import styles from './button.module.css';

// function button({ icon, title }) {
function Button(props) {
  const {
    count,
    icon,
    title,
    buttonClass,
    iconClass,
    titleClass,
    onClick,
    style,
    isRevert,
    disabled,
  } = props;

  return (
    <button
      className={`${styles.button} ${styles[`${buttonClass}`]}`}
      onClick={onClick}
      style={{
        ...style,
        opacity: disabled ? .5 : 1,
      }}
      disabled={disabled}
    >
      {isRevert ? (
        <div className={styles.btnBlock}>
          <span className={`${styles.title} ${styles[`${titleClass}`]}`}>
            {title}
          </span>
          <span className={`${styles.icon} ${styles[`${iconClass}`]}`}>
            {icon}
          </span>
        </div>
      ) : (
        <div className={styles.btnBlock}>
          <span className={`${styles.icon} ${styles[`${iconClass}`]}`}>
            {icon}
          </span>

          <span className={`${styles.title} ${styles[`${titleClass}`]}`}>
            {title}
          </span>
        </div>
      )}
      {count !== 0 && (
        <span
          className={`${styles.title} ${
            count < 0 ? styles.red : styles[`${titleClass}`]
          }`}
        >
          {count}
        </span>
      )}
    </button>
  );
}

Button.propTypes = {
  count: PropTypes.number,
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  buttonClass: PropTypes.oneOf(['button_primary', 'button_secondary']),
  iconClass: PropTypes.oneOf(['icon_primary', 'icon_secondary']),
  titleClass: PropTypes.oneOf(['title_primary', 'title_secondary']),
  style: PropTypes.object,
  isRevert: PropTypes.bool,
};

Button.defaultProps = {
  isRevert: false,
  count: 0,
  buttonClass: 'button_primary',
  iconClass: 'icon_primary',
  titleClass: 'title_primary',
};

export default Button;
