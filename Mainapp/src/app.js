import React, { Suspense } from 'react';
import './App.css';
import ErrorBoundary from './ErrorBoundary'; // Import the ErrorBoundary

const Navbar = React.lazy(() => import("app1/Navbar"));
const Sidebar = React.lazy(() => import("app2/Sidebar"));
const Footer = React.lazy(() => import("app3/Footer"));
const MainContent = React.lazy(() => import("app4/MainContent"));

const App = () => {
  return (
    <div id="root">
      {/* Other components like Navbar, Sidebar, etc. */}
      <ErrorBoundary>
        <Suspense fallback={"loading"}>
          <Navbar />
        </Suspense>
      </ErrorBoundary>
      <ErrorBoundary>
        <Suspense fallback={"loading"}>
          <Sidebar />
        </Suspense>
      </ErrorBoundary>
      <div className="main-content">
        {/* Main content of the app */}
        <div className='main-content-container'>
          <ErrorBoundary>
            <Suspense fallback={"loading"}>
              <MainContent />
            </Suspense>
          </ErrorBoundary>
        </div>

      </div>
      {/* Footer will stick to the bottom */}
      <ErrorBoundary>
        <Suspense fallback={"loading"}>
          <Footer />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
};

export default App;