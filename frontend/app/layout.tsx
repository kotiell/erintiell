import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <header className="container h-52 flex flex-col  justify-center">
          <h1 className="text-6xl mt-4 font-extralight">Erin Tiell</h1>
          <p className="text-lg font-light">Marketing and communications professional with more than 10 years of proven results.</p>
        </header>
        {children}
      </body>
    </html>
  )
}
