import "./globals.css";
import Providers from "./_redux/Providers";
export const metadata = {
  title: "Next/App",
  description: "Gì ai biết đâu",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
