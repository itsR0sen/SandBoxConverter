import { useState } from "react";

function Home() {
    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            setFile(event.target.files[0]);
        }
    };

    const removeFile = () => {
        setFile(null);
    };

    return (
        <main className="flex-grow flex flex-col items-center justify-center p-6">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-extrabold text-slate-100 tracking-tight">
                    Convert Files Locally
                </h2>
                <p className="text-slate-400 mt-2 text-sm">
                    100% private. Your files never leave your computer.
                </p>
            </div>

            <div className="w-full max-w-xl bg-slate-800 rounded-2xl p-8 border border-slate-700 shadow-xl">
                {!file ? (
                    <label className="border-2 border-dashed border-slate-600 hover:border-blue-500 rounded-xl p-12 flex flex-col items-center justify-center cursor-pointer bg-slate-800/30 transition-colors">
                        <span className="text-slate-200 font-medium group-hover:text-blue-400">
                            Click to upload a file
                        </span>
                        <input
                            type="file"
                            className="hidden"
                            accept="image/*"
                            onChange={handleFileChange}
                        />
                    </label>
                ) : (
                    <div className="flex items-center justify-between p-4 bg-slate-700/50 rounded-xl border border-slate-600">
                        <div className="flex flex-col">
                            <span className="text-sm font-semibold text-blue-400">
                                {file.name}
                            </span>
                            <span className="text-xs text-slate-400 mt-1">
                                {(file.size / (1024 * 1024)).toFixed(2)} MB
                            </span>
                        </div>
                        <button
                            onClick={removeFile}
                            className="text-slate-400 hover:text-red-400 font-bold px-2 transition-colors"
                        >
                            X
                        </button>
                    </div>
                )}
            </div>
        </main>
    );
}

export default Home;
