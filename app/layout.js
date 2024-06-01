import "./globals.css"

export const metadata = {
  title: "Reign of Chaos",
  description: "Space Hood Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
