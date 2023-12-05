import './button.css';

function Button({ isLightMode, title, icon }) {
  return (
    <button className={`button-c ${isLightMode ? 'btn-light' : ''}`}>
      <span className="icon">
        {icon}
      </span>

      <span className="text">{title}</span>
    </button>
  );
}

export default Button;
