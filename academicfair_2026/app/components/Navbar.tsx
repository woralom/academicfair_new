"use client";

import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    return (
        <nav className="navbar bg-base-100 shadow-black/30 shadow-md px-5">
            <div className="flex-1">
                {/* <h1 className="font-bold text-xl text-base-content">Academic Fair</h1> */}
                <Image src="/logo.png" alt="Academic Fair Logo" width={80} height={80} />
            </div>
            {/* Desktop view*/}
            <div className="hidden lg:block flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <Link href="/">หน้าหลัก</Link>
                    </li>
                    <li>
                        <Link href="/book-booth">จองบูธ</Link>
                    </li>
                    <li>
                        <Link href="/check-payment">ตรวจสอบการชำระเงินและข้อมูลการจอง</Link>
                    </li>
                    <li>
                        <Link href="/contact">ติดต่อเรา</Link>
                    </li>
                </ul>
            </div>
            {/* Mobile view */}
            <div className="lg:hidden">
                <div className="dropdown dropdown-end">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn bg-base-200 text-base-content hover:bg-base-300"
                    >
                        <svg
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex={-1}
                        className="menu dropdown-content bg-base-100 text-base-content rounded-lg rounded-t-none shadow-xl shadow-black/40 w-52"
                    >
                        <li>
                            <Link href="/">หน้าหลัก</Link>
                        </li>
                        <li>
                            <Link href="/book-booth">จองบูธ</Link>
                        </li>
                        <li>
                            <Link href="/check-payment">
                                ตรวจสอบการชำระเงินและข้อมูลการจอง
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact">ติดต่อเรา</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
