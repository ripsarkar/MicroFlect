import React, { Suspense } from 'react';
const Navbar = React.lazy(() => import("app1/Navbar"));
const App = () => {
  return (
    <div>
      <Suspense fallback={"loading"}>
        <Navbar />
      </Suspense>
    </div>
  );
};

export default App;