export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className=' text-white'>
      {children}
    </main>
  );
}
