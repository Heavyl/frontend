import styles from '@/components/layout/Sidebar/Sidebar.module.css';
import Link from 'next/link';
import Button from '@/components/ui/Buttons/Button';
import Title from '@/components/ui/Titles/Title';
export default function Sidebar() {

    return (
        <aside className={styles.sidebar}> 
            <Title heading="h2" className="text-center mb-4">User Menu</Title>
            <Button href="/">Create character</Button>
            <Button href="/">Join game</Button>
        </aside>
    );
}