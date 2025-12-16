import "./globals.css";
import { Inter } from "next/font/google";
import AppShell from "@/components/layout/AppShell";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* darker canvas */}
        <div className="min-h-screen bg-slate-100">
          <AppShell>{children}</AppShell>
        </div>
      </body>
    </html>
  );
}
