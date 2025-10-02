import styles from './Title.module.css';

export default function Title({ children,  heading = "h1", className = "" }) {
  const HeadingTag = heading;

  return (
    <HeadingTag className={`title-${HeadingTag} ${className}`}>
      {children}
    </HeadingTag>
  );
}