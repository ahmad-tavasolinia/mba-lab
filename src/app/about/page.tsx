import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Container, Eyebrow } from '@/components/ui';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export const metadata: Metadata = {
  title: 'About',
  description: 'About Ahmad Tavasolinia and the thinking behind MBA Lab.',
};

export default function AboutPage() {
  return (
    <div>
      <section className="border-b border-rule dark:border-dark-rule">
        <Container className="py-20 md:py-24">
          <Eyebrow>About</Eyebrow>
          <h1 className="mt-3 max-w-2xl font-serif text-5xl font-medium tracking-tight text-ink dark:text-dark-ink md:text-6xl">
            Ahmad Tavasolinia
          </h1>
        </Container>
      </section>

      <section>
        <Container className="grid gap-14 py-16 md:grid-cols-[1fr,320px]">
          <div className="prose-lab max-w-prose text-ink dark:text-dark-ink">
            <p className="font-serif text-xl italic leading-relaxed text-ink/80 dark:text-dark-soft">
              I like solving problems. Not "enjoy" the way you enjoy a puzzle on a Sunday. I mean
              it's the thing that wakes me up.
            </p>
            <p>
              Give me a mess: limited resources, bad information, five people who all want
              something different, and something in me switches on. That's the actual reason I'm
              interested in business. Not the degree. Not the title. Business is just the biggest,
              highest-stakes problem in the room, and someone has to walk in and decide what to do
              anyway.
            </p>
            <p>
              It's also why I'm a little obsessed with calculus. Not math in general, calculus
              specifically. It picks a fight with you. Every problem is daring you to find the
              trick, and there's no faking your way through it. I love that. If something isn't
              willing to challenge me, I get bored of it fast.
            </p>
            <p>
              I was solving cases long before I ever thought about an MBA. Nobody made me. I did
              it because I couldn't not. The MBA came later, once I realized I wanted sharper tools
              for a fight I was already in.
            </p>
            <p>
              So no, I don't read business books to collect them, and I don't sit through a course
              just to say I finished it. A course that doesn't change what I build next is a course
              I wasted. I want to walk away from everything I read with something I can actually
              use: an argument I'll defend, a decision I'll stand behind, a case that holds up when
              someone pushes back on it. If an idea can't survive me trying to use it, I don't care
              how famous the professor was. It wasn't worth much.
            </p>
            <h2>Where this is all going</h2>
            <p>
              Here's what I actually believe about where this is all going, and I'll say it
              plainly. The next decade of business is not a technology story. It's a human one. AI
              is going to eat the routine work, the technical work, the parts of a job that were
              never really about being human to begin with. Good. Let it. What's left, once that
              happens, is time. Time for people to actually be with each other again. Time to
              finally build the thing they always wanted to build instead of running someone else's
              process for forty years.
            </p>
            <p>I don't think that's a side effect of AI. I think it might be the entire point.</p>
            <p>
              We're living in an age where what you knew five years ago is already half wrong. I
              don't find that exhausting. I find it exciting. It means standing still is the actual
              risk now, not moving. But sitting through a lecture isn't learning. Learning is when
              I can take an idea, say it in my own words, drag it somewhere it was never meant to
              go, and see if it survives. That's the bar. That's why I do this in public, cases,
              courses, arguments I haven't fully earned yet, because I'd rather be visibly wrong and
              get corrected than be quietly safe.
            </p>
            <p>
              I know exactly how lucky I am to be alive right now. Not small changes. Not
              adjustments at the edges. Everything we thought we knew about how the world works is
              being torn down and rebuilt from zero, right now, while I'm here to see it. And I am
              excited. Not mildly interested, not cautiously optimistic. Excited in the most
              complete, unreasonable sense of the word. Completely brand new problems are emerging,
              problems nobody has a playbook for yet, and let them come. I am more than ready. I was
              built for exactly this. Let's go.
            </p>
          </div>

          <aside className="space-y-6 md:sticky md:top-24 md:self-start">
            <Image
              src={`${basePath}/me.png`}
              alt="Ahmad Tavasolinia"
              width={200}
              height={200}
              className="mx-auto h-40 w-40 rounded-full object-cover"
              priority
            />
            <div className="rounded-lg border border-rule p-6 dark:border-dark-rule">
              <p className="font-mono text-[11px] uppercase tracking-widest text-ink/40 dark:text-dark-soft/60">
                Areas of interest
              </p>
              <ul className="mt-3 space-y-1.5 text-sm text-ink/70 dark:text-dark-soft">
                <li>Business &amp; entrepreneurship</li>
                <li>Artificial intelligence</li>
                <li>Technology</li>
                <li>Innovation &amp; learning</li>
              </ul>
            </div>
            <Link
              href="/cv"
              className="block rounded-full bg-ink px-6 py-3 text-center font-mono text-[12px] uppercase tracking-widest text-paper transition hover:bg-gold dark:bg-dark-ink dark:text-dark-bg"
            >
              View CV →
            </Link>
            <Link
              href="/mba-lab"
              className="block rounded-full border border-rule px-6 py-3 text-center font-mono text-[12px] uppercase tracking-widest text-ink transition hover:border-gold hover:text-gold dark:border-dark-rule dark:text-dark-ink"
            >
              Explore MBA Lab
            </Link>
          </aside>
        </Container>
      </section>
    </div>
  );
}
