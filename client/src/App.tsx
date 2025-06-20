import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthStore } from "./store/auth.store";
import Header from "@/components/Header";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Interests from "@/pages/Interests";

export default function App() {
  const token = (useAuthStore.getState() as { token: string | null }).token;

  return (
    <BrowserRouter>
      <Header />
      <div className="p-6">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/interests"
            element={token ? <Interests /> : <Navigate to="/login" />}
          />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};