import { Route, Routes } from "react-router-dom";

import { Home, Tweets } from "pages";
import { SharedLayout } from "layout/SharedLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="tweets" element={<Tweets />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
