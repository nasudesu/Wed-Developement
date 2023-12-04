import useSignup from "../hooks/useSignup";
import useField from "../hooks/useField";

const SignupComponent = ({ setIsAuthenticated }) => {
  const { signup } = useSignup();
  const emailField = useField("email");
  const passwordField = useField("password");
  const confirmPasswordField = useField("password");

  const handleSignup = async (e) => {
    if (passwordField.value !== confirmPasswordField.value) {
      alert("Passwords do not match!");
      return;
    }
    e.preventDefault();
    await signup(emailField.value, passwordField.value, setIsAuthenticated);
  };

  return (
    <div>
      <h2>Signup</h2>
      <label>
        email:
        <input {...emailField} />
      </label>
      <br />
      <label>
        Password:
        <input {...passwordField} />
      </label>
      <br />
      <label>
        Confirm Password:
        <input {...confirmPasswordField} />
      </label>
      <br />
      <button onClick={handleSignup}>Sign Up</button>
    </div>
  );
};

export default SignupComponent;
