import { lazy, Suspense } from "react";

const LazyLoading = lazy(() => import("./Lazy"));


const App = () => {
  return (
  <Suspense fallback = { <div> Please Wait... </div> } ><LazyLoading/></Suspense>
  );
}

export default App;