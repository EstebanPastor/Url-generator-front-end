import "./navbar.scss";

import {useNavigate} from "react-router-dom"

const Navbar = () => {

    const navigate = useNavigate()

  return (
    <div className="navbar">
        <span onClick={() => navigate("/")}>Url generator</span>
    </div>
  )
}

export default Navbar