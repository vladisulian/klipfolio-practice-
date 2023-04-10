import { Link } from "react-router-dom";
import Image from "./logo.svg";
import { IoIosArrowDown } from "react-icons/io";
export const Navigation = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/" className="logo-image">
            <img src={Image} alt="klipfolio logo" />
          </Link>
        </li>
        <li>
          <Link to="/">Products</Link>
          <IoIosArrowDown />
        </li>
        <li>
          <Link to="/pricing">Pricing</Link>
        </li>
        <li>
          <Link to="/integrations">Integrations</Link>
        </li>
        <li>
          <Link to="/reporting">Client reporting</Link>
          <IoIosArrowDown />
        </li>
        <li>
          <Link to="/learn">Learn</Link>
          <IoIosArrowDown />
        </li>
        <li>
          <Link to="/hire">We're hiring</Link>
        </li>
      </ul>

      <div className="signup">
        <p className="login-text">Log in</p>
        <button type="button">Get started free</button>
      </div>
    </>
  );
};
