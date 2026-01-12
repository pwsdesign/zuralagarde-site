import "./globals.css";

export const metadata = {
  title: "Zura Lagarde",
  description: "Photography and Works",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}