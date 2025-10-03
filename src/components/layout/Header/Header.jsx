'use client'

import styles from '@/components/layout/Header/Header.module.css';
import useAuth from '@/hooks/useAuth';
import Link from 'next/link';
import Button from '@/components/ui/Buttons/Button';


export default function Header() {
    const { user, logout, loading } = useAuth();
    if (loading) return null; 

    return (
        <div>
            <header >
                <div>DALF</div>
                <nav>
                    <ul className={styles.navList}>
                        <li className={styles.navItem}><Link href="/">Home</Link></li>
                        {user ? 
                        (
                            <>
                            <li className={styles.navItem}><Link href="/profile">profile</Link></li>
                            <Button variant='logout' onClick={logout}>⏻</Button>
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