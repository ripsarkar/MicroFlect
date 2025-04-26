import React, { Suspense } from 'react';
import './App.css';
import ErrorBoundary from './ErrorBoundary'; // Import the ErrorBoundary

const Navbar = React.lazy(() => import("app1/Navbar"));
const Sidebar = React.lazy(() => import("app2/Sidebar"));

const App = () => {
  return (
    <div>
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
      <div className='main-content'></div>
    </div>
  );
};

export default App;