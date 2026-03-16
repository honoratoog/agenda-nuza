import "./globals.css";

export const metadata = {
  title: "AgendaNuza",
  description: "Sistema de agendamento para salão",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}