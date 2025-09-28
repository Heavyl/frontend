import styles from '@/components/ui/Forms/Form.module.css';

export default function Form({ children, onSubmit }) {
  return (
    <form onSubmit={onSubmit} 
        className={styles.form}>
        {children}
    </form>
  );
}