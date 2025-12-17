import { BrowserRouter, Routes, Route } from "react-router-dom";
import Feed from "./pages/Feed";
import Header from "./components/shared/Header";
import AuthModal from "./components/auth/AuthModal";
import { AuthSection } from "./components/shared/AuthSection";
import { PostsProvider } from "./context/PostsContext";
import { AuthProvider } from "./context/AuthContex";

export default function App() {
  return (
    <AuthProvider>
      <PostsProvider>
        <BrowserRouter>
          <Header />
          <AuthModal />
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/auth" element={<AuthSection />} />
          </Routes>
        </BrowserRouter>
      </PostsProvider>
    </AuthProvider>
  );
}
