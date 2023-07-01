import Header from '@/components/Header'
import './globals.css'

export const metadata = {
  title: 'Rick and Morty database',
  description: 'Get info about Rick and Morty universe',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-bg text-gray font-opensans min-h-screen">
        <Header />
        <main className="flex flex-col items-center justify-between">
          <div className="container h-full mx-auto  max-w-2xl p-4">
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
