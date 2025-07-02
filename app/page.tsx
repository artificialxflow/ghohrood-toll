'use client';

import { useState } from "react";

export default function Home() {
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState("مبلغ عوارض: ۱۲,۳۰۰,۰۰۰ تومان");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowResult(true);
    setResult("مبلغ عوارض: ۱۲,۳۰۰,۰۰۰ تومان"); // نمونه خروجی فرضی
  };

  return (
    <div className="container py-5" style={{ minHeight: '100vh' }}>
      {/* Header */}
      <header className="mb-5 text-center">
        <h1 className="fw-bold display-5 mb-3" style={{ letterSpacing: "-1px" }}>
          سامانه محاسبه عوارض و بهای خدمات دهیاری قهرود
        </h1>
        <p className="lead text-secondary mb-2" style={{ fontWeight: 500 }}>
          محاسبه سریع، دقیق و شفاف عوارض ساختمانی و خدمات روستایی
        </p>
        <hr className="mx-auto" style={{ width: "80px", borderTop: "3px solid #0d6efd", opacity: 0.2 }} />
      </header>

      {/* Intro */}
      <section className="mb-4 text-center">
        <p className="text-muted" style={{ fontSize: "1.08rem" }}>
          در این سامانه می‌توانید با وارد کردن اطلاعات ملک و نوع درخواست، مبلغ تقریبی عوارض و بهای خدمات را مشاهده کنید. این محاسبه بر اساس دفترچه عوارض سال ۱۴۰۴ انجام می‌شود.
        </p>
      </section>

      {/* Main Form */}
      <section className="card p-4 shadow-lg mb-4 border-0" style={{ borderRadius: "18px", maxWidth: 1100, margin: "0 auto" }}>
        <form onSubmit={handleSubmit}>
          <div className="row g-4 align-items-end">
            <div className="col-md-4">
              <label className="form-label fw-semibold">نوع کاربری ملک</label>
              <select className="form-select" required>
                <option value="">انتخاب کنید...</option>
                <option>مسکونی</option>
                <option>تجاری</option>
                <option>اداری</option>
                <option>صنعتی</option>
                <option>ویلا</option>
              </select>
            </div>
            <div className="col-md-2">
              <label className="form-label fw-semibold">مساحت بنا (متر مربع)</label>
              <input type="number" className="form-control" min="1" required />
            </div>
            <div className="col-md-2">
              <label className="form-label fw-semibold">تعداد طبقات</label>
              <input type="number" className="form-control" min="1" required />
            </div>
            <div className="col-md-2">
              <label className="form-label fw-semibold">تعداد واحد</label>
              <input type="number" className="form-control" min="1" required />
            </div>
            <div className="col-md-2">
              <label className="form-label fw-semibold">ارزش معاملاتی زمین (تومان)</label>
              <input type="number" className="form-control" min="1" required />
            </div>
            <div className="col-md-4">
              <label className="form-label fw-semibold">نوع پروانه</label>
              <select className="form-select" required>
                <option value="">انتخاب کنید...</option>
                <option>تک واحدی</option>
                <option>چند واحدی</option>
                <option>ویلا</option>
                <option>صنعتی</option>
              </select>
            </div>
            <div className="col-12 text-center mt-3">
              <button type="submit" className="btn btn-primary px-5 py-2 fs-5 shadow-sm" style={{ borderRadius: "8px" }}>
                محاسبه
              </button>
            </div>
          </div>
        </form>
      </section>

      {/* Result Box */}
      {showResult && (
        <section className="result-box text-center animate__animated animate__fadeIn" style={{ maxWidth: 600, margin: "2rem auto 0 auto", borderRadius: "16px", boxShadow: "0 2px 16px #0002" }}>
          <h5 className="fw-bold mb-3" style={{ fontSize: "1.25rem" }}>نتیجه محاسبه</h5>
          <div className="fs-4 fw-bold text-success" style={{ letterSpacing: "1px" }}>{result}</div>
        </section>
      )}

      {/* Help/Guide Box */}
      <section className="help-box" style={{ background: "#f1f3f6", borderRadius: "10px", maxWidth: 900, margin: "2.5rem auto 0 auto", boxShadow: "0 1px 8px #0001" }}>
        <strong className="mb-2 d-block" style={{ fontSize: "1.08rem" }}>راهنما:</strong>
        <ul className="mb-0 ps-3" style={{ lineHeight: 2 }}>
          <li>تمام ضرایب و ارقام بر اساس دفترچه عوارض سال ۱۴۰۴ دهیاری قهرود است.</li>
          <li>در صورت نیاز به راهنمایی بیشتر، با دهیاری تماس بگیرید.</li>
          <li>این سامانه صرفاً جهت شفافیت و اطلاع‌رسانی است و محاسبه نهایی توسط دهیاری انجام می‌شود.</li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="mt-5" style={{ background: "#23272b", borderRadius: "10px 10px 0 0", color: "#fff", fontWeight: 500, fontSize: "1.05rem" }}>
        <div className="py-3">دهیاری قهرود &copy; ۱۴۰۴ | تماس: ۰۳۱۵۵۲۲۲۲۲۲</div>
      </footer>
    </div>
  );
}
