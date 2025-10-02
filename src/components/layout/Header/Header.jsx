import styles from '@/components/layout/Header/Header.module.css';

export default function Header() {

  return (
    <div>
        <header >
            <div>DALF</div>
            <nav>
                <ul className={styles.navList}>
                    <li className={styles.navItem}><a href="/">Home</a></li>
                    <li className={styles.navItem}><a href="/login">login</a></li>
                    <li className={styles.navItem}><a href="/register">register</a></li>
                </ul>
            </nav>
        </header>
    </div>
  );
}