"use client";

export default function Contact() {
    return (
        <main className="min-h-screen py-16 px-4">
            <div className="max-w-2xl mx-auto">

                {/* Header */}
                <div className="mb-10">
                    <h1 className="text-4xl font-bold text-base-content mb-2">ติดต่อเรา</h1>
                    <p className="text-base-content/60 text-base">
                        หากมีข้อสงสัยเกี่ยวกับการจองบูธหรือการชำระเงิน กรุณาติดต่อหน่วยงานที่เกี่ยวข้องด้านล่าง
                    </p>
                    <div className="mt-4 h-px bg-base-content/10" />
                </div>

                {/* Cards */}
                <div className="flex flex-col gap-5">

                    {/* การจองบูธ */}
                    <div className="card bg-base-100 shadow-sm border border-base-content/10">
                        <div className="card-body gap-4">
                            <div className="flex items-start justify-between gap-4 flex-wrap">
                                <div>
                                    <h2 className="text-xl font-semibold text-base-content"><span className="material-symbols-outlined">
                                        desktop_windows
                                    </span> การจองบูธ</h2>
                                    <p className="text-base-content/50 text-sm mt-0.5">สอบถามข้อมูลและขั้นตอนการจอง</p>
                                </div>
                                <span className="badge badge-soft badge-success badge-lg shrink-0">
                                    หน่วยประชาสัมพันธ์และการตลาด
                                </span>
                            </div>

                            <div className="divider my-0" />

                            <div className="flex flex-col gap-3">
                                <p className="text-xs font-medium text-base-content/40 uppercase tracking-widest">โทรศัพท์</p>
                                <div className="flex flex-col gap-2">
                                    {["098-669-4704", "095-671-6259"].map((phone) => (
                                        <a
                                            key={phone}
                                            href={`tel:${phone.replace(/-/g, "")}`}
                                            className="flex items-center gap-3 group"
                                        >
                                            <div className="w-9 h-9 rounded-full bg-success/10 flex items-center justify-center shrink-0 group-hover:bg-success/20 transition-colors">
                                                <span className="material-symbols-outlined text-success" style={{ fontSize: 18 }}>call</span>
                                            </div>
                                            <span className="text-base-content font-medium group-hover:text-success transition-colors">
                                                {phone}
                                            </span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* การเงิน */}
                    <div className="card bg-base-100 shadow-sm border border-base-content/10">
                        <div className="card-body gap-4">
                            <div className="flex items-start justify-between gap-4 flex-wrap">
                                <div>
                                    <h2 className="text-xl font-semibold text-base-content">
                                        <span className="material-symbols-outlined">
                                            payments
                                        </span> การเงิน</h2>
                                    <p className="text-base-content/50 text-sm mt-0.5">สอบถามเรื่องการชำระเงินและใบเสร็จ</p>
                                </div>
                                <span className="badge badge-soft badge-info badge-lg shrink-0">
                                    การเงิน
                                </span>
                            </div>

                            <div className="divider my-0" />

                            <div className="flex flex-col gap-5">
                                <div className="flex flex-col gap-3">
                                    <p className="text-xs font-medium text-base-content/40 uppercase tracking-widest">โทรศัพท์</p>
                                    <a
                                        href="tel:043202817"
                                        className="flex items-center gap-3 group"
                                    >
                                        <div className="w-9 h-9 rounded-full bg-info/10 flex items-center justify-center shrink-0 group-hover:bg-info/20 transition-colors">
                                            <span className="material-symbols-outlined text-info" style={{ fontSize: 18 }}>call</span>
                                        </div>
                                        <span className="text-base-content font-medium group-hover:text-info transition-colors">
                                            043-202817
                                        </span>
                                    </a>
                                </div>

                                <div className="flex flex-col gap-3">
                                    <p className="text-xs font-medium text-base-content/40 uppercase tracking-widest">LINE</p>
                                    <a
                                        href="https://line.me/ti/p/~@514utcun"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 group"
                                    >
                                        <div className="w-9 h-9 rounded-full bg-info/10 flex items-center justify-center shrink-0 group-hover:bg-info/20 transition-colors">
                                            <span className="material-symbols-outlined text-info" style={{ fontSize: 18 }}>chat</span>
                                        </div>
                                        <span className="text-base-content font-medium group-hover:text-info transition-colors">
                                            @514utcun
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    );
}