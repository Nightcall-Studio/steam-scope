export default function LayoutFaq({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <h1 className="text-2xl font-bold mb-4">FAQ Section</h1>
      {children}
    </main>
  );
}
