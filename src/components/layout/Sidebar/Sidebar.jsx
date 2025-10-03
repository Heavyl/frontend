import styles from '@/components/layout/Sidebar/Sidebar.module.css';
import Link from 'next/link';
import Button from '@/components/ui/Buttons/Button';
import Title from '@/components/ui/Titles/Title';
export default function Sidebar({children}) {

    return (
        <aside className={styles.sidebar}> 
            <Title heading="h2" className="text-center mb-4">User Menu</Title>
            {children}
        </aside>
    );
}