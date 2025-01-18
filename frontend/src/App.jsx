import { Route, Routes } from "react-router-dom";

import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import PageNotFound from "./pages/PageNotFound";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        {/* <Route path="/project" element={<ProjectPage />} /> */}
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Toaster />
    </Layout>
  );
}

export default App;
