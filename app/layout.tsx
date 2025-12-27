import "./globals.css";

export const metadata = {
  title: "Mogsetta",
  description: "Build systems, not hustles.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}