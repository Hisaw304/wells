import { createContext, useContext, useState, useEffect } from "react";
import users from "../data/users.json";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true); // ✅ NEW

  useEffect(() => {
    const savedUser = localStorage.getItem("wf-user");

    if (savedUser && savedUser !== "undefined") {
      setCurrentUser(JSON.parse(savedUser));
    }

    setLoading(false); // ✅ DONE LOADING
  }, []);

  const login = (identifier, password, saveUser) => {
    const user = users.find(
      (u) =>
        (u.username === identifier || u.email === identifier) &&
        u.password === password
    );

    if (user) {
      setCurrentUser(user);
      setShowModal(true);

      localStorage.setItem("wf-user", JSON.stringify(user));

      if (saveUser) {
        localStorage.setItem("username", identifier);
      } else {
        localStorage.removeItem("username");
      }

      return true;
    } else {
      alert("Invalid credentials ❌");
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem("wf-user");
    localStorage.removeItem("isLoggedIn");
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        showModal,
        setShowModal,
        currentUser,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
