import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import { Toaster } from "@/components/ui/toaster";
import AppProvider from "./AppProvider";
import { cookies } from "next/headers";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["vietnamese"] });

export const metadata: Metadata = {
  // title: 'Chợ đồ cũ tốt',
  title: {
    template: "%s | Chợ đồ cũ tốt",
    default: "Chợ đồ cũ tốt",
  },
  description: 'Chợ đồ cũ tốt - Mua bán đồ cũ, đồ secondhand, đồ đã qua sử dụng, đồ cũ giá rẻ, đồ cũ chất lượng tốt nhất tại Việt Nam.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = cookies();
  const sessionToken = cookieStore.get("sessionToken");
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Toaster />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AppProvider initialSessionToken={sessionToken?.value}>
            <Header />
            {/*<div className="w-full flex ">*/}
              <main className="max-w-screen-lg m-auto my-6 w-full px-3 lg:px-0 min-h-chill pt-[80px]">
                {children}
              </main>
            {/*</div>*/}
            <Footer />
          </AppProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
