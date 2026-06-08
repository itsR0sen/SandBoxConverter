import { Link } from "react-router-dom";

function Navbar() {
    return (
        // We removed all the background and layout stuff.
        // Now it's just a pure Flexbox container for your links!
        <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link
                to="/about"
                className="text-slate-400 hover:text-blue-400 transition-colors"
            >
                How it Works
            </Link>
            <a
                href="https://github.com/itsr0sen"
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-slate-100 transition-colors"
            >
                GitHub
            </a>
        </nav>
    );
}

export default Navbar;
