import { useState } from "react";
import users from "../data/users.json";

const useAuth = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const login = (username, password, saveUser) => {
    const user = users.find(
      (u) => u.username === username && u.password === password
    );

    if (user) {
      setCurrentUser(user);
      setShowModal(true);

      if (saveUser) {
        localStorage.setItem("username", username);
      } else {
        localStorage.removeItem("username");
      }

      return true;
    } else {
      alert("Invalid credentials");
      return false;
    }
  };

  return {
    login,
    showModal,
    setShowModal,
    currentUser,
  };
};

export default useAuth;
