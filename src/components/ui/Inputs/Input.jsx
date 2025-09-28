import styles from './Input.module.css';

export default function Input({ autoComplete = 'on',  value, placeholder, onChange, name, type, variant = "primary", disabled = false }) {
  return (
    <input name={name} 
      value={value}
      placeholder={placeholder}
      type={type}
      onChange={onChange}
      className={ `${styles.input} ${disabled ? styles.disabled : styles[variant]}`}
      disabled={disabled}
      autoComplete = {autoComplete}
    ></input>
  );
}