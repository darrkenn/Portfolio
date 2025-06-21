"use client"
export default function WelcomeText() {
    return (
<main>
{/*STYLE IS HERE BECAUSE IM FUCKING STUPID!!*/}
<style jsx>{`
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  .animate-fadeIn { animation: fadeIn 1s ease-in-out forwards; }
`}</style>

<div className="flex flex-col items-center justify-center opacity-0 animate-fadeIn h-screen">
  <div>
  {/* Construction texttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt
    <p className="text-2xl text-red-500 tracking-tighter text-center cursor-default">Website still under construction🚧</p> */}
    <h1 className="text-7xl md:text-9xl lg:text-[12rem] text-slate-100 font-extrabold tracking-tighter text-center pb-2">
  {/*Welcome thingy, oh my god this is such a mess*/}
      WELCOME
    </h1>
    <hr className="h-px my-0 bg-emerald-400 border-2 border-emerald-400" />
    {/*Lil nerdy yap fest */}
    <p className="text-lg sm:text-xl md:text-2xl text-slate-200 tracking-tighter text-center pt-2 cursor-default">
      My name is <span className="text-emerald-400 font-bold">Darragh Kennedy</span>, I am a <span className="text-emerald-400 font-bold">17</span> year old <span className="text-emerald-400 font-bold">student</span> from <span className="text-emerald-400 font-bold">Ireland</span>.
    </p>
    <p className="text-lg sm:text-xl md:text-2xl text-slate-200 tracking-tighter text-center cursor-default">
      I enjoy developing and hope to study <span className="text-emerald-400 font-bold">computer science</span> at university.
    </p>
    <p className="text-md sm:text-xl md:text-2xl text-slate-200 tracking-tighter text-center cursor-default opacity-60">
      Scroll to see projects
    </p>
  </div>
</div>
</main>
);
}
