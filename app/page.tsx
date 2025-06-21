import type { Metadata } from "next";
import WelcomeText from "@/components/Homepage/welcome";
import Projects from "@/components/Homepage/projects";

{/*Metadata for the page duhhh*/}
export const metadata: Metadata = {
  title: "Welcome | darrkenn",
  description: "Welcome page for darrkenn's portfolio",
  keywords: [
    "embedded systems",
    "darrkenn portfolio",
    "portfolio",
    "developer",
    "Next.js",
    "darrkenn"
  ],
  openGraph: {
    title: "Welcome | darrkenn",
    description: "Welcome page for darrkenn's portfolio",
    type: "website",
    url: "https://portfolio.darrkenn.com",
    images: [
      {
        url: "/daisypic.jpg",
        width: 1200,
        height: 630,
        alt: "darrkenn's portfolio"
      },
    ],
  },
}


export default function Home() {
return (
<main>
{/*This is the "Welcome blah blah blah"*/}
<WelcomeText />
{/*Projcetssss*/}
<Projects />

</main>
);
}
