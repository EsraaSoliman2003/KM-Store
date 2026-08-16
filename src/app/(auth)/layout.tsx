import Providers from "@/providers/Providers";
import "./style.css";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Providers>
      {children}
    </Providers>
  );
}