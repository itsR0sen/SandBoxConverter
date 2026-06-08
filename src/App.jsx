// 1. Import the routing tools from the library we installed
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// 2. Import our Lego blocks (Components)
import Header from "./Header";
import Home from "./Home";
import About from "./About";

function App() {
    return (
        // <Router> is the master wrapper that watches the URL bar
        <Router>
            <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col font-sans">
                {/* The Header stays OUTSIDE the <Routes> so it is visible on every single page! */}
                <Header />

                {/* <Routes> is the traffic cop. Only ONE of the things inside here will show at a time */}
                <Routes>
                    {/* If the URL is exactly "/", show the Home component */}
                    <Route path="/" element={<Home />} />

                    {/* If the URL is "/about", show the About component */}
                    <Route path="/about" element={<About />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
