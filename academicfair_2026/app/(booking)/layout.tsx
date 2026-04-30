// app/(booking)/layout.tsx
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function BookingLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <main className="flex-1 bg-base-200">
                {children}
            </main>
            <Footer />
        </>
    );
}