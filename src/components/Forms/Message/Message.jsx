import styles from './Message.module.css';
import Text from '@/components/ui/Text/Text'; 

export default function Message({ children,  tag = "p", className = "" }) {
  const Tag = tag;

  return (
    <Tag className={`${children ? styles.message : ''} ${className}`}>
      {children}
    </Tag>
  );
}