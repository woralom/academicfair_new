"use client";

export default function CheckPayment() {
    return (
        <main className="min-h-screen py-16 px-4">
            <div className="max-w-2xl mx-auto">

                {/* Header */}
                <div className="mb-10">
                    <h1 className="text-4xl font-bold text-base-content mb-2">ตรวจสอบการชำระเงิน</h1>
                    <p className="text-base-content/60 text-base">
                        ตรวจสอบสถานะการชำระเงินและข้อมูลในการจอง<br />
                        หากคุณได้ทำการชำระเงินแล้ว กรุณาตรวจสอบสถานะการชำระเงินของคุณที่นี่
                    </p>
                    <div className="mt-4 h-px bg-base-content/10" />
                </div>

                <div className="flex flex-col gap-5">
                    {/* Payment Status Card */}
                    <div className="card bg-base-100 shadow-sm border border-base-content/10">
                        <div className="card-body gap-4">
                            <div>
                                <h2 className="text-xl font-semibold text-base-content">ค้นหาสถานะการชำระเงิน</h2>
                                <p className="text-base-content/50 text-sm">
                                    กรุณาระบุข้อมูลของคุณเพื่อตรวจสอบสถานะการชำระเงิน
                                </p>
                            </div>

                            <div className="divider my-0" />

                            <form className="flex flex-col gap-4">
                                <fieldset className="fieldset">
                                    <legend className="fieldset-legend"><span className="material-symbols-outlined">
                                        phone_enabled
                                    </span>หมายเลขโทรศัพท์</legend>
                                    <input type="text" className="input" placeholder="กรุณากรอกหมายเลขโทรศัพท์" />
                                </fieldset>

                                <fieldset className="fieldset">
                                    <legend className="fieldset-legend"><span className="material-symbols-outlined">
                                        mail
                                    </span>อีเมล</legend>
                                    <input type="email" className="input" placeholder="กรุณากรอกอีเมล" />
                                </fieldset>

                                <div className="flex justify-center">
                                    <button className="btn btn-success text-white">ตรวจสอบสถานะ</button>
                                </div>
                            </form>

                        </div>
                    </div>

                    {/* Payment Display */}
                    <div className="card bg-base-100 shadow-sm border border-base-content/10">
                        <div className="card-body gap-4">
                            <div>
                                <h2 className="text-xl font-semibold text-base-content">ผลการตรวจสอบ</h2>
                                <p className="text-base-content/50 text-sm">
                                    หากคุณได้ทำการชำระเงินแล้ว สถานะการชำระเงินของคุณจะแสดงที่นี่
                                </p>
                            </div>

                            <div className="divider my-0" />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}