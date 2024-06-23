// src/components/CustomLayout.js
import Header from './Header';

export default function CustomLayout({ children }) {
  return (
    <div className="bg-background min-h-screen font-sans">
      <Header />
      <main className="container mx-auto p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {children}
      </main>
    </div>
  );
}