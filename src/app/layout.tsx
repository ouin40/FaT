import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FaT | Facts about Cat",
  description: "It's a fact!!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <div
          className="bg-white relative flex items-center justify-center"
          style={{ height: "50vh" }}
        >
          <div>
            <img
              src="/pawleft.png" //left paw image
              alt="paw-left"
              className="paw-image1 absolute left-0 ml-12"
            />
            <div className="text-black  flex flex-col items-center justify-center relative">
              {" "}
              {/*title*/}
              <h1 className="text-9xl font-bold mb-4">FaT</h1>
              <h3 className="text-lg">Facts about Cats</h3>
            </div>
            <img
              src="/pawright.png" //right paw image
              alt="paw-right"
              className="paw-image2 absolute right-0 mr-12"
            />
          </div>
        </div>

        <div
          className="flex items-center justify-center"
          style={{ height: "50vh" }}
        >
          {children}
        </div>
      </body>
    </html>
  );
}
