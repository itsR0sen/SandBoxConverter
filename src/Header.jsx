import { Link } from "react-router-dom";
import Logo from "./Logo";
import Navbar from "./Navbar";

function Header() {
    return (
        // The Header owns the background color and the bottom border
        <header className="w-full bg-slate-900 border-b border-slate-800">
            {/* justify-between pushes the Logo to the left, and the Navbar to the right */}
            <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
                {/* LEFT COMPONENT: The Logo */}
                <div className="flex items-center">
                    <Link to="/">
                        <Logo className="h-8 w-auto" />
                    </Link>
                </div>

                {/* RIGHT COMPONENT: The Navbar */}
                <Navbar />
            </div>
        </header>
    );
}

export default Header;
