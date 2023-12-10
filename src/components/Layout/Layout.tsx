import Footer from './Footer';
import Header from './Header';
import { Outlet } from 'react-router-dom';

export default function Layout() {
    return (
        <>
            <header>
                <Header />
            </header>
            <main>
                {/* 2️⃣ Render the app routes via the Layout Outlet */}
                <Outlet />
            </main>
            <Footer />
        </>
    );
}
