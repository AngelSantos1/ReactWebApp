import { Link } from "react-router-dom";

export default function Home() {
    return (
    <div>
        <h3>Welcome</h3>
        <Link to="/register">Register Account</Link>
    </div>
    );
}