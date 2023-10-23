import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import "./App.css";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";
import SecondRegisterPage from "./pages/SecondRegisterPage";
import NewPassPage from "./pages/NewPassPage";
import RecoverPassPage from "./pages/RecoverPassPage";
import EditInformationPage from "./pages/EditInformationPage";

import { AuthProvider } from "./context/AuthContext";
import { onAuthStateChanged, User } from "firebase/auth";
import { useAuthentication } from "./hooks/useAuthentication";

import { useState, useEffect } from "react";

function App(): JSX.Element {
  const [user, setUser] = useState<User | null | undefined>(undefined);
  const { auth } = useAuthentication();

  const loadingUser = user === undefined;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, [auth]);

  if (loadingUser) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="App">
      <AuthProvider value={user}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/second-register" element={<SecondRegisterPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route
              path="/profile/edit-information"
              element={
                !user ? <EditInformationPage /> : <Navigate to="/profile" />
              }
            />
            <Route path="/recover-pass" element={<RecoverPassPage />} />
            <Route path="/new-pass" element={<NewPassPage />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
