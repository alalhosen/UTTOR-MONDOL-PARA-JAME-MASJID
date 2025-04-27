import React from 'react';

const ElectricBill = () => {
    return (
        <div>
            <div>
                <p>মাসিক বিদ্যুৎ বিল পরিশোধকারী ব্যক্তিগণের নামের তালিকাঃ-</p>
            </div>
            <div>
            <div className="">
          <table className="table text-center mt-6 mb-32">
            <thead>
              <tr className="">
                <th className="text-2xl text-purple-400">ক্রমিক নং</th>
                <th className="text-2xl text-purple-400">নাম</th>
                <th className="text-2xl text-purple-400">বিদ্যুৎ বিলের পরিমান</th>
                <th className="text-2xl text-purple-400">মাসের নামে</th>
              </tr>
            </thead>
            <tbody className="">
              <tr className="font-bold">
                <th>১</th>
                <td>মোঃ আমজাদ + মসলিম</td>
                <td>১৫০০</td>
                <td>জানুয়ারী</td>
              </tr>

              <tr className="font-bold">
                <th>২</th>
                <td>মোঃ সইফল + আনোয়ার + হাসিম</td>
                <td>১৫০০</td>
                <td>ফেব্রুয়ারী</td>
              </tr>

              <tr className="font-bold">
                <th>৩</th>
                <td>মোঃ মাসুম</td>
                <td>১৫০০</td>
                <td>মার্চ</td>
              </tr>
              <tr className="font-bold">
                <th>৪</th>
                <td>মোঃ আঃ ওহাব</td>
                <td>১৫০০</td>
                <td>এপ্রিল</td>
              </tr>
              <tr className="font-bold">
                <th>৫</th>
                <td>মোঃ নিজাম+নাজিম</td>
                <td>১৫০০</td>
                <td>মে</td>
              </tr>
              <tr className="font-bold">
                <th>৬</th>
                <td>মোঃ বিপ্লব</td>
                <td>১৫০০</td>
                <td>জুন</td>
              </tr>
              <tr className="font-bold">
                <th>৭</th>
                <td>মোঃ আনছারুল + আনোয়ার</td>
                <td>১৫০০</td>
                <td>জুলাই</td>
              </tr>
              <tr className="font-bold">
                <th>৮</th>
                <td>মোঃ দবিরুল</td>
                <td>১৫০০</td>
                <td>আগস্ট</td>
              </tr>
              <tr className="font-bold">
                <th>৯</th>
                <td>মোঃ সামসুল</td>
                <td>১৫০০</td>
                <td>সেপ্টেম্বর</td>
              </tr>
              <tr className="font-bold">
                <th>১০</th>
                <td>মোঃ </td>
                <td>১৫০০</td>
                <td>অক্টোবর</td>
              </tr>
              <tr className="font-bold">
                <th>১১</th>
                <td>মোঃ </td>
                <td>১৫০০</td>
                <td>নভেম্বর</td>
              </tr>
              <tr className="font-bold">
                <th>১২</th>
                <td>মোঃ </td>
                <td>১৫০০</td>
                <td>ডিসেম্বর</td>
              </tr>

              <tr className="font-extrabold text-xl text-green-500">
                <th></th>
                <td>মোট বিল</td>
                <td>00</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
            </div>
        </div>
    );
};

export default ElectricBill;