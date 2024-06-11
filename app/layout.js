import "@/styles/globals.css"

export const metadata = {
  title: "Reign of Steel",
  description: "Space Hood Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
