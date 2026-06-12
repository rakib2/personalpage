import { StatusBar } from "@/components/hud/StatusBar";
import { Footer } from "@/components/sections/Footer";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <StatusBar />
      {children}
      <Footer />
    </>
  );
}
