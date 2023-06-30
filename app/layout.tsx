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
        <main className="flex flex-col items-center justify-between p-6">
          <div className="container h-full mx-auto xl:px-30 max-w-2xl">
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
