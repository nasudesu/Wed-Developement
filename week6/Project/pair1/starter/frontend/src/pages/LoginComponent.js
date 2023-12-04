import useLogin from "../hooks/useLogin";
import useField from "../hooks/useField";

const LoginComponent = ({ setIsAuthenticated }) => {
  const emailField = useField("email");
  const passwordField = useField("password");
  const { login } = useLogin();

  const handleLogin = async (e) => {
    e.preventDefault();
    await login(emailField.value, passwordField.value, setIsAuthenticated);
  };

  return (
    <div>
      <h2>Login</h2>
      <label>
        Username:
        <input {...emailField} />
      </label>
      <br />
      <label>
        Password:
        <input {...passwordField} />
      </label>
      <br />
      <button onClick={handleLogin}>Log In</button>
    </div>
  );
};

export default LoginComponent;
