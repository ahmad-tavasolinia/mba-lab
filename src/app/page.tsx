// src/app/page.tsx
'use client';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Hero Background - exact same view as your new image */}
      <div className="relative h-screen w-full overflow-hidden">
        <Image
          src="/images/home-hero.jpg"           // ← place your exact new hero image here
          alt="Dramatic mountain lake view at dusk"
          fill
          priority
          className="object-cover object-center"
          quality={100}
        />
        
        {/* Dark overlay for perfect contrast */}
        <div className="absolute inset-0 bg-black/70" />
        
        {/* Floating desk & elements (overlayed on the image) */}
        <div className="absolute inset-0 pointer-events-none">
          {/* The desk / workspace container */}
          <div className="absolute bottom-0 left-0 right-0 h-[520px] bg-gradient-to-t from-black/95 via-black/90 to-transparent" />
          
          {/* The actual desk */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-[980px] h-[420px] bg-zinc-900/90 border border-zinc-700 rounded-3xl overflow-hidden shadow-2xl">
            
            {/* Books stack */}
            <div className="absolute bottom-[90px] left-8 flex flex-col gap-3">
              <div className="bg-zinc-800 p-4 rounded-2xl shadow-inner">
                <div className="text-[10px] font-mono text-zinc-400 mb-1">BUSINESS</div>
                <div className="text-[10px] font-mono text-zinc-400 mb-1">TECHNOLOGY</div>
                <div className="text-[10px] font-mono text-zinc-400"> text-zinc-400">HUMANITY</div>
              </div10px] font-mono text-zinc-400">HUMANITY</div>
              </div>
              <div className="h-2 w-3 bg-zinc-600 rounded-full" />
            </div>

            {/* Laptop */}
            <div className="absolute bottom-[110px] left-1/2 -translate-x-1/2 w-[620px] bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl">
              <div className="h-5 bg-zinc-900 flex items-center justify-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="aspect-video bg-[radial-gradient(at_center,#27272a_1px,transparent_1px)] bg-[length:20px_20px] relative">
                <Image
                  src="/laptop-screen.png"           // optional subtle screen content
                  alt="Laptop screen"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Coffee mug */}
            <div className="absolute bottom-[165px] left-[110px] w-10 h-12 bg-zinc-800 rounded-xl flex items-center justify-center shadow-inner">
              <div className="w-6 h-5 bg-zinc-700 rounded-t-xl flex items-end">
                <div className="w-2 h-2 bg-amber-300 rounded-full" />
              </div>
            </div>

            {/* Plant / branch */}
            <div className="absolute top-12 right-12 w-28 h-28 opacity-30">
              <Image src="/plant.png" alt="Decorative plant" width={112} height={112} />
            </div>
          </div>
        </div>

        {/* Text overlay - exactly like your new image */}
        <div className="absolute inset-0 flex flex-col justify-center px-16">
          <div className="max-w-3xl">
           0.92] tracking-[-0.04em]">
              Ideas today.
0.92] tracking-[-0.04em]">
              Ideas today.
            </h1>
            <h1 className="text-8xl font-light text-[#c8a35f] leading-[0.92] tracking-[-0.04em]">
              Impact tomorrow.
            </h1>

            <p className="mt-8 max-w-lg text-xl text-zinc-300 font-light">
              A personal intellectual workspace to study ideas, build knowledge, and prepare for what’s next.
            </p>

            <button
              onClick={() => document.getElementById('mba-lab')?.scrollIntoView({ behavior: 'smooth' })}
              className="mt-12 px-10 py-4 border border-white/70 hover:border-white/90 text-white text-lg tracking-widest transition-all hover:bg-white/5"
            >
              EXPLORE MBA LAB →
            </button>
          </div>
        </div>
      </div>

      {/* Rest of your page (sections, courses, lab, etc.) */}
      {/* ... your existing content ... */}
    </main>
  );
}
