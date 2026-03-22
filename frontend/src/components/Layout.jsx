import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export default function Layout() {
  return (
    <div className="app-wrapper lowercase">
      <div className="container">
        <Header />
        <main className="main-content mt-8">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}
