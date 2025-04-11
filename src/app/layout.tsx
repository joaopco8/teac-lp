import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";

const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "TEAC - Tecnologia Espiritual Ascensional Canopeana",
  description: "Acesse sua conexão multidimensional sem intermediários. Descubra a metodologia que está transformando a espiritualidade.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${rubik.variable} font-sans antialiased`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
