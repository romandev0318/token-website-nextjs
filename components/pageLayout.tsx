import React, { ReactNode } from 'react';
import { ToastContainer } from 'react-toastify';
import colors from 'tailwindcss/colors';
import 'react-toastify/dist/ReactToastify.css';
import 'react-tooltip/dist/react-tooltip.css';
import Navbar from './molecules/navbar';
import Footer from './molecules/footer';
import TopBanner from './molecules/top-banner';

interface LayoutProps {
  children: ReactNode;
}

const PageLayout = ({ children }: LayoutProps) => {
  return (
    // <div className="container m-auto">
    <main className="h-full flex-grow">
      <div className="fixed top-0 z-[99] w-full">
        <TopBanner />

        <Navbar />
      </div>

      {children}

      <Footer />

      <ToastContainer
        toastStyle={{ backgroundColor: colors.slate[800], fontSize: '14px' }}
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </main>
    // </div>
  );
};

export default PageLayout;
