export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body>
          {children}
          <div>
            <h1>Similar Products </h1>
          </div>
          </body>
      </html>
    )
  }