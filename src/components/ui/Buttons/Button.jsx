import styles from './Button.module.css';

export default function Button({ children, onClick, type = "button", variant = "primary", disabled = false }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={ `${styles.button} ${disabled ? styles.disabled : styles[variant]}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}