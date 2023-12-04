import { useNavigate } from "react-router-dom";

const useSignup = () => {
  const navigate = useNavigate();
  const signup = async (email, password, setIsAuthenticated) => {
    try {
      const response = await fetch("http://localhost:4000/api/user/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      if (response.ok) {
        const user = await response.json();
        sessionStorage.setItem("user", JSON.stringify(user));
        console.log("User signed up successfully!");
        setIsAuthenticated(true);
        navigate("/");
      } else {
        console.error("Signup failed");
      }
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };
  return { signup };
};

export default useSignup;
