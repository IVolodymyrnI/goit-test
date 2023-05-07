import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "layout/SharedLayout";
import { Home, Tweets } from "pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/tweets" element={<Tweets />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;