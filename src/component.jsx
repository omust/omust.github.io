/**
 * v0 by Vercel.
 * @see https://v0.dev/t/bTcLMRDBz3N
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Component() {
  return (
    <div
      key="1"
      className="flex flex-col min-h-[100dvh] bg-gray-950 text-white"
    >
      <header className="fixed top-0 left-0 right-0 z-50 px-4 lg:px-6 py-4 lg:py-10 flex flex-col gap-2 bg-gray-950">
        <div className="flex items-center gap-2">
          <Link className="flex items-center gap-2 text-white" href="#">
            <ShieldCheckIcon className="h-6 w-6" />
            <span className="font-semibold">
              大阪公立大学セキュリティサークル omust
            </span>
          </Link>
        </div>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4 text-gray-400"
            href="#"
          >
            About
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4 text-gray-400"
            href="#"
          >
            Activities
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4 text-gray-400"
            href="#"
          >
            Sponsor
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4 text-gray-400"
            href="#"
          >
            History
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4 text-gray-400"
            href="#"
          >
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1 pt-[100px]">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container flex flex-col items-center justify-center px-4 space-y-4 md:px-6">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                <span className="inline-block opacity-0 animate-[fadeIn_1s_ease-in-out_forwards]">
                  Welcome to OMU Security Club
                </span>
              </h1>
              <p className="mx-auto max-w-[600px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                <span className="inline-block opacity-0 animate-[fadeIn_1s_ease-in-out_0.5s_forwards]">
                  Where you can learn about cybersecurity, network with friends,
                  and compete in capture the flag events.
                </span>
              </p>
            </div>
            <form className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300">
                Toggle Dark Mode
              </Button>
            </form>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 bg-gray-800">
          <div className="container grid items-center gap-4 px-4 text-center md:px-6 lg:gap-10">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl/none">
                Upcoming Events
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
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
                    第19回情報危機管理コンテスト
                  </h3>
                  <p className="text-xs text-gray-400">May 4, 2024</p>
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
                  <h3 className="font-semibold">DEF CON CTF予選2024</h3>
                  <p className="text-xs text-gray-400">May 4, 2024</p>
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
                  <h3 className="font-semibold">第一回omust総会</h3>
                  <p className="text-xs text-gray-400">June 5, 2024</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24">
          <div className="container grid items-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl/none">
                Learning
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Learn the basics of cybersecurity with our online tutorials.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <Link
                className="flex items-center justify-center rounded-md border border-gray-800 bg-gray-950 px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-800 hover:text-gray-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-300 disabled:pointer-events-none disabled:opacity-50"
                href="#"
              >
                View Tutorials
                <ChevronsRightIcon className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 bg-gray-800">
          <div className="container grid items-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl/none">
                Team Member
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our club consists of six students
              </p>
            </div>
            <div className="mx-auto w-full max-w-3xl grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col gap-2">
                <img
                  alt="Avatar"
                  className="mx-auto rounded-full overflow-hidden aspect-square object-cover object-center border border-gray-800"
                  height="400"
                  src="/placeholder.svg"
                  width="400"
                />
                <div className="space-y-1 text-center">
                  <h3 className="font-semibold">tratiger</h3>
                  <p className="text-xs text-gray-400">President</p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <img
                  alt="Avatar"
                  className="mx-auto rounded-full overflow-hidden aspect-square object-cover object-center border border-gray-800"
                  height="400"
                  src="/placeholder.svg"
                  width="400"
                />
                <div className="space-y-1 text-center">
                  <h3 className="font-semibold">Akira</h3>
                  <p className="text-xs text-gray-400">Vice President</p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <img
                  alt="Avatar"
                  className="mx-auto rounded-full overflow-hidden aspect-square object-cover object-center border border-gray-800"
                  height="400"
                  src="/placeholder.svg"
                  width="400"
                />
                <div className="space-y-1 text-center">
                  <h3 className="font-semibold">4equest</h3>
                  <p className="text-xs text-gray-400">Helper</p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <img
                  alt="Avatar"
                  className="mx-auto rounded-full overflow-hidden aspect-square object-cover object-center border border-gray-800"
                  height="400"
                  src="/placeholder.svg"
                  width="400"
                />
                <div className="space-y-1 text-center">
                  <h3 className="font-semibold">occidentalis</h3>
                  <p className="text-xs text-gray-400">
                    Helper
                    {
                      "\n                                                              "
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
          <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-800">
            <p className="text-xs text-gray-400">
              © 2024 大阪公立大学セキュリティサークル omust. All rights
              reserved.
            </p>
            <nav className="sm:ml-auto flex gap-4 sm:gap-6">
              <Link
                className="text-xs hover:underline underline-offset-4 text-gray-400"
                href="#"
              >
                Facebook
              </Link>
              <Link
                className="text-xs hover:underline underline-offset-4 text-gray-400"
                href="#"
              >
                Twitter
              </Link>
              <Link
                className="text-xs hover:underline underline-offset-4 text-gray-400"
                href="#"
              >
                Instagram
              </Link>
            </nav>
          </footer>
        </section>
      </main>
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
