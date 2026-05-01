"use client";

import provinces from "@/data/provinces.json";

export default function BookBooth() {
    return (
        <main className="min-h-screen py-16 px-4">
            <section className="max-w-2xl mx-auto">
                <div className="text-center">
                    <h3 className="text-xl font-bold">แบบจองคูหานิทรรศการ
                        งานนิทรรศการตลาดนัดหลักสูตรอุดมศึกษา<br />
                        ครั้งที่ 24 ระหว่างวันที่ 30-31 มกราคม 2569
                        ณ ศูนย์ประชุมอเนกประสงค์กาญจนาภิเษก มหาวิทยาลัยขอนแก่น</h3>
                    <p className="text-sm">กรุณากรอกข้อมูลให้ครบถ้วน</p>
                </div>
                <form className="mt-10 flex flex-col gap-10">
                    <div className="card bg-base-100 shadow-sm border-l-4 border-orange-500">
                        <div className="card-body">
                            <div className="card-title">ชื่อหน่วยงาน/สถาบัน</div>
                            <div className="divider"></div>
                            <fieldset className="fieldset">
                                <legend className="fieldset-label">ชื่อสถาบัน*</legend>
                                <input className="input validator" type="text" required placeholder="มหาวิทยาลัยขอนแก่น" />
                                <div className="validator-hint">กรุณากรอกชื่อสถาบัน</div>
                            </fieldset>
                            <fieldset className="fieldset">
                                <legend className="fieldset-label">จังหวัด*</legend>
                                <select className="select validator" required>
                                    <option disabled selected>เลือกจังหวัด</option>
                                    {provinces.map((province) => (
                                        <option key={province.PROVINCE_ID} value={province.PROVINCE_ID}>
                                            {province.PROVINCE_NAME}
                                        </option>
                                    ))}
                                </select>
                                <div className="validator-hint">กรุณากรอกชื่อจังหวัด</div>
                            </fieldset>
                            <fieldset className="fieldset">
                                <legend className="fieldset-label">ชื่อหน่วยงาน</legend>
                                <input className="input" type="text" />
                            </fieldset>
                            <fieldset className="fieldset">
                                <legend className="fieldset-label">โทรศัพท์</legend>
                                <input className="input" type="text" />
                            </fieldset>
                            <fieldset className="fieldset">
                                <legend className="fieldset-label">ที่อยู่</legend>
                                <textarea className="textarea" ></textarea>
                            </fieldset>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-sm border-l-4 border-lime-500">
                        <div className="card-body">
                            <div className="card-title">ข้อมูลผู้ประสานงาน</div>
                            <div className="divider"></div>
                            <fieldset className="fieldset">
                                <legend className="fieldset-label">คำนำหน้า</legend>
                                <select className="select">
                                    <option disabled selected>เลือกคำนำหน้า</option>
                                    <option>นาย</option>
                                    <option>นาง</option>
                                    <option>นางสาว</option>
                                </select>
                                <div className="validator-hint">กรุณาเลือกคำนำหน้า</div>
                            </fieldset>
                            <fieldset className="fieldset">
                                <legend className="fieldset-label">ชื่อ*</legend>
                                <input className="input validator" type="text" required placeholder="John Doe" />
                                <div className="validator-hint">กรุณากรอกชื่อ</div>
                            </fieldset>
                            <fieldset className="fieldset">
                                <legend className="fieldset-label">นามสกุล*</legend>
                                <input className="input validator" type="text" required placeholder="Doe" />
                                <div className="validator-hint">กรุณากรอกนามสกุล</div>
                            </fieldset>
                            <fieldset className="fieldset">
                                <legend className="fieldset-label">ตำแหน่ง*</legend>
                                <input className="input validator" type="text" required placeholder="Manager" />
                                <div className="validator-hint">กรุณากรอกตำแหน่ง</div>
                            </fieldset>
                            <fieldset className="fieldset">
                                <legend className="fieldset-label">อีเมล*</legend>
                                <input className="input validator" type="email" required placeholder="john.doe@example.com" />
                                <div className="validator-hint">กรุณากรอกอีเมล</div>
                            </fieldset>
                            <fieldset className="fieldset">
                                <legend className="fieldset-label">โทรศัพท์*</legend>
                                <input className="input validator" type="text" required placeholder="081-234-5678" />
                                <div className="validator-hint">กรุณากรอกหมายเลขโทรศัพท์</div>
                            </fieldset>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-sm border-l-4 border-teal-500">
                        <div className="card-body">
                            <div className="card-title">ประเภทอาหาร</div>
                            <div className="divider"></div>
                            <fieldset className="fieldset">
                                <legend className="fieldset-label">ท่านที่ 1</legend>
                                <select className="select">
                                    <option disabled selected>เลือกประเภทอาหาร</option>
                                    <option>อาหารปกติ</option>
                                    <option>อาหารมังสวิรัติ/อาหารเจ</option>
                                    <option>อาหารมุสลิม</option>
                                </select>
                                <div className="validator-hint">กรุณาเลือกประเภทอาหาร</div>
                            </fieldset>
                            <fieldset className="fieldset">
                                <legend className="fieldset-label">ท่านที่ 2</legend>
                                <select className="select">
                                    <option disabled selected>เลือกประเภทอาหาร</option>
                                    <option>อาหารปกติ</option>
                                    <option>อาหารมังสวิรัติ/อาหารเจ</option>
                                    <option>อาหารมุสลิม</option>
                                </select>
                                <div className="validator-hint">กรุณาเลือกประเภทอาหาร</div>
                            </fieldset>
                            <fieldset className="fieldset">
                                <legend className="fieldset-label">ท่านที่ 3</legend>
                                <select className="select">
                                    <option disabled selected>เลือกประเภทอาหาร</option>
                                    <option>อาหารปกติ</option>
                                    <option>อาหารมังสวิรัติ/อาหารเจ</option>
                                    <option>อาหารมุสลิม</option>
                                </select>
                                <div className="validator-hint">กรุณาเลือกประเภทอาหาร</div>
                            </fieldset>
                        </div>
                    </div>
                </form>


            </section>

        </main>
    );
}

/* 
<fieldset className="fieldset">
    <legend className="fieldset-label"></legend>
    <input type="text" required />
    <div className="validator-hint"></div>
</fieldset>
*/