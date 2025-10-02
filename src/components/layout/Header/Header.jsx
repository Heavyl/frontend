'use client'
import styles from '@/components/layout/Header/Header.module.css';
import useAuth from '@/hooks/useAuth';
import Link from 'next/link';
import Button from '@/components/ui/Buttons/Button';


export default function Header() {
  const auth = useAuth();

  return (
    <div>
        <header >
            <div>DALF</div>
            <nav>
                <ul className={styles.navList}>
                    <li className={styles.navItem}><a href="/">Home</a></li>
                    {auth.user ? 
                    (
                        <>
                        <li className={styles.navItem}><Link href="/profile">profile</Link></li>
                        <li><Button className={styles.navItem} onClick={auth.logout}>Déconnection</Button></li>
                        </>
                    ) : (
                        <>
                        <li className={styles.navItem}><Link href="/login">login</Link></li>
                        <li className={styles.navItem}><Link href="/register">register</Link></li>
                        </>
                    )}
                    
                    
                </ul>
            </nav>
        </header>
    </div>
  );
}