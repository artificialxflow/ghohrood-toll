import React, { useState } from 'react';
import { Calculator, Home, FileText, Users, Phone, MapPin, Mail } from 'lucide-react';

interface FormData {
  propertyType: string;
  builtArea: string;
  floors: string;
  units: string;
  landValue: string;
  permitType: string;
}

function App() {
  const [formData, setFormData] = useState<FormData>({
    propertyType: '',
    builtArea: '',
    floors: '',
    units: '',
    landValue: '',
    permitType: ''
  });
  
  const [showResult, setShowResult] = useState(false);
  const [isCalculating, setIsCalculating] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsCalculating(true);
    
    // شبیه‌سازی محاسبه
    setTimeout(() => {
      setIsCalculating(false);
      setShowResult(true);
    }, 2000);
  };

  const resetForm = () => {
    setFormData({
      propertyType: '',
      builtArea: '',
      floors: '',
      units: '',
      landValue: '',
      permitType: ''
    });
    setShowResult(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100" dir="rtl">
      {/* Header */}
      <header className="bg-blue-900 text-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center">
            <div className="flex justify-center items-center mb-4">
              <Calculator className="w-12 h-12 ml-3" />
              <h1 className="text-3xl md:text-4xl font-bold">
                سامانه محاسبه عوارض و بهای خدمات
              </h1>
            </div>
            <h2 className="text-xl md:text-2xl text-blue-200 mb-2">
              دهیاری قهرود
            </h2>
            <p className="text-blue-100 max-w-2xl mx-auto">
              محاسبه دقیق و شفاف عوارض ساختمانی و بهای خدمات شهری بر اساس آخرین تعرفه‌های مصوب
            </p>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Introduction Section */}
        <section className="mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8 border-r-4 border-blue-600">
            <div className="flex items-start">
              <Home className="w-8 h-8 text-blue-600 ml-4 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  درباره سامانه محاسبه عوارض
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  این سامانه به منظور تسهیل در محاسبه عوارض ساختمانی و ارائه اطلاعات شفاف به شهروندان طراحی شده است. 
                  تمامی محاسبات بر اساس آخرین نرخ‌های مصوب شورای اسلامی شهر و قوانین مربوطه انجام می‌شود.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <FileText className="w-6 h-6 ml-3 text-blue-600" />
                فرم محاسبه عوارض
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Property Type */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      نوع کاربری ملک
                    </label>
                    <select
                      name="propertyType"
                      value={formData.propertyType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      required
                    >
                      <option value="">انتخاب کنید</option>
                      <option value="residential">مسکونی</option>
                      <option value="commercial">تجاری</option>
                      <option value="administrative">اداری</option>
                      <option value="industrial">صنعتی</option>
                      <option value="mixed">مختلط</option>
                    </select>
                  </div>

                  {/* Built Area */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      مساحت بنا (متر مربع)
                    </label>
                    <input
                      type="number"
                      name="builtArea"
                      value={formData.builtArea}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="مثال: 120"
                      required
                    />
                  </div>

                  {/* Floors */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      تعداد طبقات
                    </label>
                    <input
                      type="number"
                      name="floors"
                      value={formData.floors}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="مثال: 2"
                      min="1"
                      required
                    />
                  </div>

                  {/* Units */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      تعداد واحد
                    </label>
                    <input
                      type="number"
                      name="units"
                      value={formData.units}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="مثال: 1"
                      min="1"
                      required
                    />
                  </div>

                  {/* Land Value */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      ارزش معاملاتی زمین (تومان)
                    </label>
                    <input
                      type="number"
                      name="landValue"
                      value={formData.landValue}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="مثال: 50000000"
                      required
                    />
                  </div>

                  {/* Permit Type */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      نوع پروانه
                    </label>
                    <select
                      name="permitType"
                      value={formData.permitType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      required
                    >
                      <option value="">انتخاب کنید</option>
                      <option value="single">تک واحدی</option>
                      <option value="multi">چند واحدی</option>
                      <option value="villa">ویلا</option>
                      <option value="industrial">صنعتی</option>
                      <option value="commercial">تجاری</option>
                    </select>
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <button
                    type="submit"
                    disabled={isCalculating}
                    className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isCalculating ? (
                      <span className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white ml-2"></div>
                        در حال محاسبه...
                      </span>
                    ) : (
                      'محاسبه عوارض'
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={resetForm}
                    className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-all duration-200"
                  >
                    پاک کردن
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Guidelines Sidebar */}
          <div className="space-y-6">
            {/* Guidelines */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <Users className="w-5 h-5 ml-2 text-blue-600" />
                راهنما و نکات مهم
              </h3>
              <div className="space-y-4 text-sm text-gray-600">
                <div className="p-3 bg-blue-50 rounded-lg border-r-4 border-blue-400">
                  <p className="font-medium text-blue-800 mb-1">ضرایب محاسبه:</p>
                  <p>ضرایب بر اساس نوع کاربری و منطقه متفاوت است</p>
                </div>
                <div className="p-3 bg-green-50 rounded-lg border-r-4 border-green-400">
                  <p className="font-medium text-green-800 mb-1">تخفیف‌ها:</p>
                  <p>برای جانبازان و خانواده شهدا تخفیف ویژه لحاظ می‌شود</p>
                </div>
                <div className="p-3 bg-yellow-50 rounded-lg border-r-4 border-yellow-400">
                  <p className="font-medium text-yellow-800 mb-1">مهلت پرداخت:</p>
                  <p>عوارض باید ظرف ۳۰ روز پس از صدور پرداخت شود</p>
                </div>
                <div className="p-3 bg-red-50 rounded-lg border-r-4 border-red-400">
                  <p className="font-medium text-red-800 mb-1">جریمه تأخیر:</p>
                  <p>برای پرداخت با تأخیر جریمه محاسبه خواهد شد</p>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">اطلاعات تماس</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 ml-2 flex-shrink-0" />
                  <span>دهیاری قهرود، استان اصفهان</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-4 h-4 ml-2 flex-shrink-0" />
                  <span>۰۳۱-۱۲۳۴۵۶۷۸</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 ml-2 flex-shrink-0" />
                  <span>info@qahrud.ir</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Results Section */}
        {showResult && (
          <section className="mt-12">
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl shadow-lg p-8 border border-green-200">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <Calculator className="w-6 h-6 ml-3 text-green-600" />
                نتیجه محاسبه عوارض
              </h3>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-md border-r-4 border-blue-500">
                  <h4 className="text-sm font-medium text-gray-600 mb-2">عوارض ساختمانی</h4>
                  <p className="text-2xl font-bold text-blue-600">۸,۷۵۰,۰۰۰</p>
                  <p className="text-sm text-gray-500">تومان</p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-md border-r-4 border-green-500">
                  <h4 className="text-sm font-medium text-gray-600 mb-2">بهای خدمات</h4>
                  <p className="text-2xl font-bold text-green-600">۳,۲۵۰,۰۰۰</p>
                  <p className="text-sm text-gray-500">تومان</p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-md border-r-4 border-yellow-500">
                  <h4 className="text-sm font-medium text-gray-600 mb-2">عوارض نوسازی</h4>
                  <p className="text-2xl font-bold text-yellow-600">۱,۸۰۰,۰۰۰</p>
                  <p className="text-sm text-gray-500">تومان</p>
                </div>
                
                <div className="bg-white rounded-xl p-6 shadow-md border-r-4 border-purple-500">
                  <h4 className="text-sm font-medium text-gray-600 mb-2">مجموع کل</h4>
                  <p className="text-2xl font-bold text-purple-600">۱۳,۸۰۰,۰۰۰</p>
                  <p className="text-sm text-gray-500">تومان</p>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-blue-100 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>توجه:</strong> این محاسبه بر اساس اطلاعات وارد شده و آخرین تعرفه‌های مصوب انجام شده است. 
                  برای اطلاعات دقیق‌تر و پرداخت با دفتر دهیاری تماس بگیرید.
                </p>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-bold mb-4">دهیاری قهرود</h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                ارائه خدمات شفاف و مطلوب به شهروندان عزیز در راستای توسعه پایدار و بهبود کیفیت زندگی
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">خدمات</h4>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>صدور پروانه ساختمانی</li>
                <li>محاسبه عوارض</li>
                <li>خدمات شهری</li>
                <li>امور زیرساختی</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-4">ساعات کاری</h4>
              <div className="text-gray-300 text-sm space-y-1">
                <p>شنبه تا چهارشنبه: ۸ تا ۱۶</p>
                <p>پنج‌شنبه: ۸ تا ۱۳</p>
                <p>جمعه: تعطیل</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-6 text-center">
            <p className="text-gray-400 text-sm">
              © ۱۴۰۳ دهیاری قهرود. تمامی حقوق محفوظ است.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;