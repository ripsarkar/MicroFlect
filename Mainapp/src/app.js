import React, { Suspense } from 'react';
import './App.css';
import ErrorBoundary from './ErrorBoundary'; // Import the ErrorBoundary

const Navbar = React.lazy(() => import("app1/Navbar"));
const Sidebar = React.lazy(() => import("app2/Sidebar"));
const Footer = React.lazy(() => import("app3/Footer"));

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
      </div>
      <ErrorBoundary>
        <Suspense fallback={"loading"}>
          <Footer />
        </Suspense>
      </ErrorBoundary> {/* Footer will stick to the bottom */}
    </div>

  );
};

export default App;