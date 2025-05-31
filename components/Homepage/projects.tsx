"use client"
import React, { useEffect, useState, useRef} from "react";
import Link from "next/link";
export default function Projects() {
{/*Appear on scroll code*/}
const [stackVisible, setStackVisible] = useState(false);
const stackRef = useRef(null);
useEffect(() => {
    const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
        if (entry.target === stackRef.current) setStackVisible(entry.isIntersecting);
        });
    },
    { threshold: 0.2 }
    );
    if (stackRef.current) observer.observe(stackRef.current);
    return () => observer.disconnect();
}, [])
return (
    <main>
    
<div id="LearningSection" ref={stackRef} className={`transition-opacity duration-800 ease-in-out ${stackVisible ? "opacity-100" : "opacity-0"}`}>
    <div className="flex flex-col items-center justify-center w-full">
        {/*TITTLE */}
    <div className="flex flex-col text-center pb-8">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-slate-100 font-bold tracking-tighter mb-2">Projects</h1>
    </div>

{/*Rust To-Do List*/}
<Link href={"https://github.com/DarraghKennedy2008/RustTodoList"}>
<div className="p-4 w-full max-w-6xl mx-auto cursor-pointer group">
    <div className="w-full lg:h-72 border-3 border-zinc-700 rounded-2xl flex flex-col lg:flex-row p-6 bg-stone-900 hover:scale-[1.02] transition-transform duration-300 ease-in-out hover:border-emerald-400/30 hover:shadow-lg hover:shadow-emerald-400/10">
        <div className="flex flex-col w-full lg:w-2/3 pr-0 lg:pr-6 justify-between">
            <div>
                <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl text-emerald-400 font-bold tracking-tight mb-3">
                    To-Do List
                </h1>
                <p className="text-base sm:text-lg text-slate-300/90 mb-4 lg:mb-0">
                    Blazing fast to-do list built in <span className="text-orange-500">Rust</span>. Tasks are saved in a TOML file locally. 
                    The TOML file is serialized back into a vector allowing for additions, updates and deletions. Changes are then serialized back into the TOML file on save.
                </p>
            </div>
            <div className="hidden lg:flex gap-3 mt-4 flex-wrap">
                <span className="px-3 py-1 bg-zinc-800 rounded-full text-xs font-mono font-extrabold text-orange-600">Rust</span>
                <span className="px-3 py-1 bg-zinc-800 rounded-full text-xs font-mono font-extrabold text-amber-300">Cargo</span>
                <span className="px-3 py-1 bg-zinc-800 rounded-full text-xs font-mono font-extrabold text-blue-800">TOML</span>
            </div>
        </div>
        <div className="w-full lg:w-1/3 flex flex-col">
            <div className="mt-6 lg:mt-0 flex justify-center items-center overflow-hidden rounded-xl ">
                <img 
                    src="logos/to-do_list.png" 
                    className="w-full h-auto max-h-48 lg:max-h-60 object-contain transition-transform duration-500 group-hover:scale-105" 
                    alt="Arduino circuit with breadboard and components" 
                    loading="lazy"
                />
            </div>
            <div className="flex lg:hidden gap-3 mt-4 flex-wrap justify-center lg:justify-start">
                <span className="px-3 py-1 bg-zinc-800 rounded-full text-xs font-mono font-extrabold text-orange-600">Rust</span>
                <span className="px-3 py-1 bg-zinc-800 rounded-full text-xs font-mono font-extrabold text-amber-300">Cargo</span>
                <span className="px-3 py-1 bg-zinc-800 rounded-full text-xs font-mono font-extrabold text-blue-800">TOML</span>
            </div>
        </div>
    </div>
</div>
</Link>

{/*Embedded systems*/}
<Link href={"https://github.com/DarraghKennedy2008/Embedded-Projects"}>
<div className="p-4 w-full max-w-6xl mx-auto cursor-pointer group">
    <div className="w-full lg:h-72 border-3 border-zinc-700 rounded-2xl flex flex-col lg:flex-row p-6 bg-stone-900 hover:scale-[1.02] transition-transform duration-300 ease-in-out hover:border-emerald-400/30 hover:shadow-lg hover:shadow-emerald-400/10">
        <div className="flex flex-col w-full lg:w-2/3 pr-0 lg:pr-6 justify-between">
            <div>
                <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl text-emerald-400 font-bold tracking-tight mb-3">
                    Embedded Systems
                </h1>
                <p className="text-base sm:text-lg text-slate-300/90 mb-4 lg:mb-0">
                    My Embedded Systems projects/tests. Each project features circuit layouts and technical documentation.
                </p>
            </div>
            <div className="hidden lg:flex gap-3 mt-4 flex-wrap">
                <span className="px-3 py-1 bg-zinc-800 rounded-full text-xs font-mono font-extrabold text-emerald-300">Arduino Mega 2560</span>
                <span className="px-3 py-1 bg-zinc-800 rounded-full text-xs font-mono font-extrabold text-amber-300">C++</span>
                <span className="px-3 py-1 bg-zinc-800 rounded-full text-xs font-mono font-extrabold text-blue-300">Tinkercad</span>
            </div>
        </div>
        <div className="w-full lg:w-1/3 flex flex-col">
            <div className="mt-6 lg:mt-0 flex justify-center items-center overflow-hidden rounded-xl ">
                <img 
                    src="logos/embeddedsys.png" 
                    className="w-full h-auto max-h-48 lg:max-h-60 object-contain transition-transform duration-500 group-hover:scale-105" 
                    alt="Arduino circuit with breadboard and components" 
                    loading="lazy"
                />
            </div>
            <div className="flex lg:hidden gap-3 mt-4 flex-wrap justify-center lg:justify-start">
                <span className="px-3 py-1 bg-zinc-800 rounded-full text-xs font-mono font-extrabolds text-emerald-300">Arduino Mega 2560</span>
                <span className="px-3 py-1 bg-zinc-800 rounded-full text-xs font-mono font-extrabold text-amber-300">C++</span>
                <span className="px-3 py-1 bg-zinc-800 rounded-full text-xs font-mono font-extrabold text-blue-300">Tinkercad</span>
            </div>
        </div>
    </div>
</div>
</Link>

{/* Home server project
<Link href={{ pathname: '/projects/homeserver' }}>
<div className="p-4 w-full max-w-6xl mx-auto cursor-pointer group">
    <div className="w-full lg:h-72 border-3 border-zinc-700 rounded-2xl flex flex-col lg:flex-row p-6 bg-stone-900 hover:scale-[1.02] transition-transform duration-300 ease-in-out hover:border-emerald-400/30 hover:shadow-lg hover:shadow-emerald-400/10">
        <div className="flex flex-col w-full lg:w-2/3 pr-0 lg:pr-6 justify-between">
            <div>
                <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl text-emerald-400 font-bold tracking-tight mb-3">
                    Home Server
                </h1>
                <p className="text-base sm:text-lg text-slate-300/90 mb-4 lg:mb-0">
                    My home server that I built running on CasaOS with a debian base. Used as a NAS/media streaming server.
                </p>
            </div>
            <div className="hidden lg:flex gap-3 mt-4 flex-wrap">
                <span className="px-3 py-1 bg-zinc-800 rounded-full text-xs font-mono text-emerald-300">CasaOS</span>
                <span className="px-3 py-1 bg-zinc-800 rounded-full text-xs font-mono text-amber-300">Docker</span>
                <span className="px-3 py-1 bg-zinc-800 rounded-full text-xs font-mono text-blue-300">Debian</span>
            </div>
        </div>
        <div className="w-full lg:w-1/3 flex flex-col">
            <div className="mt-6 lg:mt-0 flex justify-center items-center overflow-hidden rounded-xl ">
                <img 
                    src="logos/homeserver.png" 
                    className="w-full h-auto max-h-48 lg:max-h-60 object-contain transition-transform duration-500 group-hover:scale-105" 
                    alt="Arduino circuit with breadboard and components" 
                    loading="lazy"
                />
            </div>
            <div className="flex lg:hidden gap-3 mt-4 flex-wrap justify-center lg:justify-start">
                <span className="px-3 py-1 bg-zinc-800 rounded-full text-xs font-mono text-emerald-300">CasaOS</span>
                <span className="px-3 py-1 bg-zinc-800 rounded-full text-xs font-mono text-amber-300">Docker</span>
                <span className="px-3 py-1 bg-zinc-800 rounded-full text-xs font-mono text-blue-300">Debian</span>
            </div>
        </div>
    </div>
</div>
</Link> */}


</div>
</div>



</main>
);
}
