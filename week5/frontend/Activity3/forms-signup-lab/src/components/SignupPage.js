import { useState } from "react";

function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nationalityType, setNationalityType] = useState("");
  const [answear, setGreeting] = useState("");

  const onSubmit = (e) => {
    // Prevent the default form behavior so the page doesn't reload.
    e.preventDefault();
    const contactUsInformation = {
      email,
      password,
      nationalityType,
      submittedOn: new Date(),
    };

    console.log(contactUsInformation);
    setEmail("");
    setPassword("");
    setNationalityType("");

    let greeting = "";
    if (nationalityType === "en") {
      greeting = "Hello!";
    } else if (nationalityType === "de") {
      greeting = "Hallo!";
    } else if (nationalityType === "fr") {
      greeting = "Bonjour!";
    }
    setGreeting(greeting);
  };

  return (
    <div className="signup-container">
      <form onSubmit={onSubmit} className="signup-form">
        <h1>Sign Up</h1>
        <div>
          <label htmlFor="email">Email: </label>
          <input
            className="input"
            id="email"
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input
            className="input"
            id="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <div>
          <label htmlFor="nationality">nationality: </label>
          <select
            className="input"
            name="nationalityType"
            onChange={(e) => setNationalityType(e.target.value)}
            value={nationalityType}
          >
            <option value="" disabled>
              Select a Nationality type...
            </option>
            <option>en</option>
            <option>de</option>
            <option>fr</option>
          </select>
        </div>
        <button>Submit</button>
        <h1 className="success">{answear}</h1>;
      </form>
    </div>
  );
}

export default SignupPage;
