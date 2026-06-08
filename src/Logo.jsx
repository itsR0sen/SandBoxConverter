// We don't need 'import React' anymore in modern React/Vite setups!

// We create a function called Logo.
// It accepts one setting (called a prop): 'className', so we can resize it later.
function Logo({ className = "h-8 w-auto" }) {
    return (
        // <svg> is the main container, telling the browser "Here comes math-based art!"
        // xmlns is required so browsers handle the vector math correctly.
        // viewBox defines the virtual "canvas size" (here it's 300 units wide, 80 high).
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 300 80"
            className={className} // This is where we apply the external Tailwind size.
        >
            {/* 1. DEFINE COLORS (The Palette) */}
            {/* <defs> stores hidden settings, like linear gradients. */}
            <defs>
                {/* We create a blue-to-teal gradient used in the image theme. */}
                {/* We give it an id of 'logoGradient' so we can reference it later. */}
                <linearGradient
                    id="logoGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                >
                    <stop
                        offset="0%"
                        style={{ stopColor: "#60a5fa", stopOpacity: 1 }}
                    />{" "}
                    {/* Blue-400 */}
                    <stop
                        offset="100%"
                        style={{ stopColor: "#2dd4bf", stopOpacity: 1 }}
                    />{" "}
                    {/* Teal-400 */}
                </linearGradient>
            </defs>

            {/* 2. THE ICON (The abstract shifting arrows) */}
            {/* We group elements with <g> so we can move them together. */}
            {/* 'fill="url(#logoGradient)"' applies the gradient we defined above. */}
            <g transform="translate(10, 15)" fill="url(#logoGradient)">
                {/* These 'paths' are direct instructions: "Move to x,y, draw line to x,y..." */}
                {/* Abstract Box 1 */}
                <path
                    d="M5,5 h30 v40 h-30 z M0,0 v50 h40 v-50 z"
                    opacity="0.8"
                />
                {/* Arrow / Shift Line */}
                <path d="M35,20 h15 v10 h-15 z" />
                {/* Abstract Box 2 */}
                <path d="M45,35 v15 h20 v-15 z" opacity="0.6" />
            </g>

            {/* 3. THE TEXT (The brand name) */}
            {/* We use <text> instead of paths so screen readers can read it. */}
            <g
                transform="translate(85, 52)"
                fontFamily="Inter, sans-serif"
                fontWeight="800"
                fontSize="32"
            >
                {/* "SandBox" is raw white (#f1f5f9 / slate-100) */}
                <text x="0" y="0" fill="#f1f5f9">
                    SandBox
                </text>
                {/* "Convert" uses the gradient (#logoGradient) */}
                {/* <text x="145" y="0" fill="url(#logoGradient)">
                    Convert
                </text> */}
            </g>
        </svg>
    );
}

// export default makes this function available to other files (like App.jsx)
export default Logo;
