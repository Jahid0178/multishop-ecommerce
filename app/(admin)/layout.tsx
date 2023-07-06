export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <div>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <li>Dash board</li>
          </div>
          <div>{children}</div>
        </div>
      </body>
    </html>
  );
}
