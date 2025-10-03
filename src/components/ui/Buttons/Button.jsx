import styles from './Button.module.css';

export default function Button({ children, onClick, className="", type = "button", variant = "primary", disabled = false }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={ `${styles.button} ${className} ${disabled ? styles.disabled : '' }`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}