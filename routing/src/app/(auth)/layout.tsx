import { Metadata } from "next" 

export const metadata: Metadata = {
  title: {
    default : 'Authentification Route',
    template: '%s | Authentification'
  },
  description : 'User Authentification page'
}

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body>
            <h1>Welcome to App. Verify your account</h1>
            {children}
        
        </body>
      </html>
    )
  }