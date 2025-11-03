export default function aboutPage({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <h1 className="text-2xl font-bold mb-4">About Section</h1>
      {children}
    </main>
  );
}
