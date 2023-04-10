import { Link } from "react-router-dom";
import Image from "./Frame.svg";
export const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/" className="logo-image">
            <img src={Image} alt="klipfolio logo" />
          </Link>
        </li>
        <li>
          <Link to="/">Products</Link>
        </li>
        <li>
          <Link to="/pricing">Pricing</Link>
        </li>
        <li>
          <Link to="/integrations">Integrations</Link>
        </li>
        <li>
          <Link to="/reporting">Client reporting</Link>
        </li>{" "}
        <li>
          <Link to="/learn">Learn</Link>
        </li>{" "}
        <li>
          <Link to="/hire">We're hiring</Link>
        </li>
      </ul>

      <div className="signup">
        <p>Log in</p>
        <button type="button">Get started</button>
      </div>
    </nav>
  );
};
