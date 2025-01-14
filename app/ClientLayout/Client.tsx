import { ThemeProvider } from "@/app/components/Theme-provider";
import Navbar from "@/app/components/Header/Nav";
import Prvider from '@/app/Redux/Provider'

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
 

  return (
       <Prvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="Dark"
        enableSystem
        disableTransitionOnChange
      >
        <Navbar />
        {children}
      </ThemeProvider>
      </Prvider>
  );
}
