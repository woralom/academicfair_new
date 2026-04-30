// app/(main)/layout.tsx
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Navbar />
            <main className="flex-1 bg-base-200">
                {children}
            </main>
            <Footer />
        </>
    );
}