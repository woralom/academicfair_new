import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main>
        <section>
          <div
            className="hero min-h-screen"
            style={{ backgroundImage: "url('/cover_1.JPG')" }}
          >
            <div className="hero-overlay"></div>
            <div className="hero-content text-neutral-content">
              <div className="text-center max-w-md">
                <h1 className="mb-5 text-4xl font-bold">
                  นิทรรศการตลาดนัดหลักสูตรอุดมศึกษา ครั้งที่ 28
                </h1>
                <p className="mb-2">เปิดให้จองบูธผ่านช่องทางออนไลน์แล้ว</p>
                <p className="mb-5">
                  **กรุณาชำระเงินจองบูธภายใน วันที่ 15 ก.ค. 2569
                </p>
                <button className="btn btn-success text-white">จองบูธ</button>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 px-5 bg-gradient-to-br from-slate-50 to-slate-100">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="mb-12 text-center">
              <h2 className="text-4xl font-bold mb-2">สถานที่จัดงาน</h2>
              <p className="text-lg text-gray-600">
                ศูนย์ประชุมอเนกประสงค์กาญจนาภิเษก
              </p>
            </div>

            {/* Modern Card */}
            <div className="card bg-base-100 shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image */}
                <figure className="relative h-96 md:h-auto overflow-hidden">
                  <Image
                    src="/Golden_Jubilee_Convention_Hall.png"
                    alt="Golden Jubilee Convention Hall"
                    width={1920}
                    height={1920}
                    className="w-full h-auto hover:scale-105 transition-transform duration-500"
                  />
                </figure>

                {/* Map & Info */}
                <div className="card-body p-8 flex flex-col justify-between">
                  <div>
                    <h3 className="card-title text-2xl mb-4">แผนที่แสดงสถานที่จัดงาน</h3>
                    <p className="text-gray-600 mb-6">
                      ศูนย์ประชุมอเนกประสงค์กาญจนาภิเษก มหาวิทยาลัยขอนแก่น
                      ตำบลในเมือง อำเภอเมืองขอนแก่น ขอนแก่น 40002
                    </p>
                  </div>

                  {/* Embedded Map */}
                  <div className="rounded-lg overflow-hidden shadow-md">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3462.850094194873!2d102.8176271!3d16.4464522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31228aea48206463%3A0xd60b5a369eaf8efa!2z4Lio4Li54LiZ4Lii4LmM4Lib4Lij4Liw4LiK4Li44Lih4Lit4LmA4LiZ4LiB4Lib4Lij4Liw4Liq4LiH4LiE4LmM4LiB4Liy4LiN4LiI4LiZ4Liy4Lig4Li04LmA4Lip4LiBIOC4oeC4q-C4suC4p-C4tOC4l-C4ouC4suC4peC4seC4ouC4guC4reC4meC5geC4geC5iOC4mQ!5e1!3m2!1sth!2sth!4v1777284249840!5m2!1sth!2sth"
                      width="100%"
                      height={300}
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Golden Jubilee Convention Hall Location"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
