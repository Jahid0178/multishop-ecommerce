export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <div style={{ backgroundColor: "#FFFFFF" }}>{children}</div>
      </body>
    </html>
  );
}
