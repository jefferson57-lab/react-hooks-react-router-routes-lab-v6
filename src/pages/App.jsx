import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { Suspense } from "react";
import NavBar from "../components/NavBar"; // Fixed import

export default function App() {
  return (
    <BrowserRouter>
      <>
        <NavBar />
        <Suspense fallback={<p>Loading...</p>}>
          <Routes>
            <Route path="*" element={<p>Error: Page not found</p>} />
          </Routes>
        </Suspense>
      </>
    </BrowserRouter>
  );
}