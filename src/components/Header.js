import { Link } from "react-router-dom";

const Header = () => (
  <header>
    <Link to="/">Home</Link>
    <br />
    <Link to="/posts">Blog</Link>
  </header>
);

export default Header;
