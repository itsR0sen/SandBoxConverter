function About() {
    return (
        <main className="flex-grow flex flex-col items-center justify-center p-6 text-center">
            <h2 className="text-3xl font-extrabold text-slate-100 mb-4">
                How It Works
            </h2>
            <p className="text-slate-400 max-w-2xl leading-relaxed">
                Unlike traditional converters that force you to upload your
                sensitive documents to a random cloud server, SandBoxConvert
                uses WebAssembly to process your files directly inside your
                browser. It is zero-trust, infinitely scalable, and
                mathematically impossible for us to steal your data.
            </p>
        </main>
    );
}

export default About;
