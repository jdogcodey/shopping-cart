import { Link } from 'react-router-dom';

export default function Homepage() {
    return <main>
        <p>Welcome!</p>
        <Link to='/shopping'>Let&apos;s Shop!</Link>
    </main>
}