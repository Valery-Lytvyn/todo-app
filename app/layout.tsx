import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/sidebar/Sidebar";
import Providers from "./providers/Providers";
import { auth } from "@clerk/nextjs";

const nunito = Nunito({
  weight: ["400", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My tasks App",
  description:
    "Welcome to the Todo App, a project that embodies the synergy of innovation and productivity. Crafted with Next.js, TypeScript, and Tailwind CSS, this app is not just a to-do list but a showcase of my React development skills.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userId } = auth();

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={nunito.className}>
        <Providers>
          {userId ? <Sidebar /> : null}
          <main className="h-full w-full rounded-2xl border border-light-borderColor bg-light-bg2 p-2 dark:border-dark-borderColor dark:bg-dark-bg2 md:p-8">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
