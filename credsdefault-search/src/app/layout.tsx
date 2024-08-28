import type { Metadata } from "next";
import "@/app/globals.css";
import ClientLayout from "@/app/components/layout/client-layout";

export const metadata: Metadata = {
  title: "CredsDefault Search",
  description: "CredsDefault Search is a web search panel for default credentials, including a comprehensive dataset of services, vendors, systems, OT and IoT devices, routers, and more. Features include infinite scroll, real-time filtering, and CSV export.",
  openGraph: {
    images: 'https://credsdefault.vercel.app/images/credsdefault.jpg',
  },
  keywords: ['default credentials', 'search', 'dataset', 'security', 'IoT', 'OT', 'routers'],
  authors: [
    { name: 'Krystian Bajno', url: 'https://github.com/krystianbajno' }, 
  ],
  metadataBase: new URL('https://github.com/krystianbajno/credsdefault-search'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
