import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useLogout = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const logout = () => {
    setLoading(true);
    try {
      localStorage.removeItem("token"); // Clear token
      localStorage.removeItem("user"); // Clear user info
      navigate("/login"); // Redirect to login
      window.location.reload(); // Refresh page
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      setLoading(false);
    }
  };

  return { logout, loading };
};

export default useLogout;
