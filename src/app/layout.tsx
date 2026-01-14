import "./globals.css";

export const metadata = {
  title: "Zura Lagarde",
  description: "Photography and Works",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/uzi7nqu.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
