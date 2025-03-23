import './globals.css';

export const metadata = {
  title: "SECURE UNDERGROUND NETWORK",
  description: "Token verification required for access",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
