/**
 * v0 by Vercel.
 * @see https://v0.dev/t/eqb0DOY7Xk0
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 py-4 lg:py-10 flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <Link className="flex items-center gap-2" href="#">
            <ShieldCheckIcon className="h-6 w-6" />
            <span className="font-semibold">Security Club</span>
          </Link>
          <Button size="sm" variant="outline">
            Join the Club
          </Button>
        </div>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Events
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Resources
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Team
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container flex flex-col items-center justify-center px-4 space-y-4 md:px-6">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Welcome to the Security Club
              </h1>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Where you can learn about cybersecurity, network with
                professionals, and compete in capture the flag events.
              </p>
            </div>
            <form className="flex flex-col gap-2 min-[400px]:flex-row">
              <Input
                className="max-w-sm flex-1"
                placeholder="Enter your email"
                type="email"
              />
              <Button size="lg">Sign Up for Updates</Button>
            </form>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 bg-gray-100 dark:bg-gray-800">
          <div className="container grid items-center gap-4 px-4 text-center md:px-6 lg:gap-10">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl/none">
                Upcoming Events
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Check out our calendar of events and RSVP to reserve your spot.
              </p>
            </div>
            <div className="mx-auto w-full max-w-3xl grid gap-4 [&>div]:grid sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col gap-1">
                <img
                  alt="Event"
                  className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                  height="400"
                  src="/placeholder.svg"
                  width="600"
                />
                <div className="flex flex-col gap-1">
                  <h3 className="font-semibold">
                    Introduction to Ethical Hacking
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    February 21, 2023
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <img
                  alt="Event"
                  className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                  height="400"
                  src="/placeholder.svg"
                  width="600"
                />
                <div className="flex flex-col gap-1">
                  <h3 className="font-semibold">
                    Cybersecurity Capture the Flag Competition
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    March 15, 2023
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <img
                  alt="Event"
                  className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                  height="400"
                  src="/placeholder.svg"
                  width="600"
                />
                <div className="flex flex-col gap-1">
                  <h3 className="font-semibold">
                    Panel Discussion: Careers in Cybersecurity
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    April 5, 2023
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24">
          <div className="container grid items-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl/none">
                Resources
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Learn the basics of cybersecurity with our online tutorials and
                resources.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <Link
                className="flex items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                href="#"
              >
                View Tutorials
                <ChevronsRightIcon className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 bg-gray-100 dark:bg-gray-800">
          <div className="container grid items-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl/none">
                Meet the Team
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Our club is led by a dedicated team of students passionate about
                cybersecurity.
              </p>
            </div>
            <div className="mx-auto w-full max-w-3xl grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col gap-2">
                <img
                  alt="Avatar"
                  className="mx-auto rounded-full overflow-hidden aspect-square object-cover object-center border border-gray-200 dark:border-gray-800"
                  height="400"
                  src="/placeholder.svg"
                  width="400"
                />
                <div className="space-y-1 text-center">
                  <h3 className="font-semibold">Emily Johnson</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    President
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <img
                  alt="Avatar"
                  className="mx-auto rounded-full overflow-hidden aspect-square object-cover object-center border border-gray-200 dark:border-gray-800"
                  height="400"
                  src="/placeholder.svg"
                  width="400"
                />
                <div className="space-y-1 text-center">
                  <h3 className="font-semibold">Alex Lee</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Vice President
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <img
                  alt="Avatar"
                  className="mx-auto rounded-full overflow-hidden aspect-square object-cover object-center border border-gray-200 dark:border-gray-800"
                  height="400"
                  src="/placeholder.svg"
                  width="400"
                />
                <div className="space-y-1 text-center">
                  <h3 className="font-semibold">Sophia Brown</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Treasurer
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <img
                  alt="Avatar"
                  className="mx-auto rounded-full overflow-hidden aspect-square object-cover object-center border border-gray-200 dark:border-gray-800"
                  height="400"
                  src="/placeholder.svg"
                  width="400"
                />
                <div className="space-y-1 text-center">
                  <h3 className="font-semibold">Ethan Clark</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Secretary
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 Security Club. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Facebook
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Twitter
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Instagram
          </Link>
        </nav>
      </footer>
    </div>
  );
}

function ChevronsRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 17 5-5-5-5" />
      <path d="m13 17 5-5-5-5" />
    </svg>
  );
}

function ShieldCheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}
