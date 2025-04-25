const Financing = () => {
  return (
    <div className="mt-16">
      <div className="text-center text-amber-600 pl-6 lg:pl-12">
        <div className="flex space-x-3 font-extrabold text-center mt-36">
          <p>১৪৪৬ হিজরি</p>
          <p className="px-24 underline">আল্লাহ মহান</p>
          <p>২০২৫ খ্রিস্টাব্দ</p>
          <button className="btn btn-neutral">Electric Bill</button>
        </div>
      </div>

      {/* Yearly monthly taka adai  Yearly monthly taka adai   */}
      <div>
        <div className="mt-9 mb-4">
          <p className="text-3xl bg-lime-800 w-full text-center font-extrabold text-orange-500 p-4 rounded-xl scroll-mx-0 hover:text-purple-500">
            বাৎসরিক টাকা আদায়ের হিসাব ২০২৫ঃ-
            <br />
            <p className="text-white text-2xl hover:text-red-500">
              ০১/০১/২০২৫ - ৩১/১২/২০২৫ পর্যন্ত
            </p>
          </p>
        </div>
        <div className="justify-self-end w-3/5 ">
          <p className="bg-lime-200 text-end text-xl lg:text-2xl rounded-s-full p-4">
            প্রতিমাসে প্রদেয় বেতন
          </p>
        </div>

        <div className="">
          <table className="table text-center mt-6 mb-32">
            <thead>
              <tr className="">
                <th className="text-2xl text-purple-400">ক্রমিক নং</th>
                <th className="text-2xl text-purple-400">নাম</th>
                <th className="text-2xl text-purple-400">টাকার পরিমান</th>
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

              <tr className="font-extrabold text-xl text-green-500">
                <th></th>
                <td>মোট টাকা</td>
                <td>১৩৫০০</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="border-2 border-dotted border-black "></div>

        {/* Yearly taka adai  Yearly taka adai  Yearly taka adai   */}

        <div>
          <div className="mt-9 mb-4">
            <p className="text-3xl bg-lime-400 w-full text-center font-extrabold text-orange-500 p-4 rounded-xl scroll-mx-0 hover:text-slate-100">
              বাৎসরিক টাকার আদায়ের হিসাব ২০২৫ঃ-
              <br />
              <p className="text-white text-2xl hover:text-red-500">
                ০১/০১/২০২৫ - ৩১/১২/২০২৫ পর্যন্ত
              </p>
            </p>
          </div>

          <div>
            <table className="table mt-6 mb-32 text-center">
              <thead>
                <tr className="">
                  <th className="text-2xl text-purple-800">ক্রমিক নং</th>
                  <th className="text-2xl text-purple-800">নাম</th>
                  <th className="text-2xl text-purple-800">টাকার পরিমান</th>
                </tr>
              </thead>
              <tbody className="text-center">
                <tr className="font-bold">
                  <th>১</th>
                  <td>মোঃ আমজাদ</td>
                  <td>১০০০</td>
                </tr>
                <tr className="font-bold">
                  <th>২</th>
                  <td>মোঃ এহসানুল</td>
                  <td>৫০০</td>
                </tr>
                <tr className="font-bold">
                  <th>৩</th>
                  <td>মোঃ মুক্তা</td>
                  <td>৫০০</td>
                </tr>
                <tr className="font-bold">
                  <th>৪</th>
                  <td>মোঃ ইসারুল</td>
                  <td>৫০০</td>
                </tr>
                <tr className="font-bold">
                  <th>৫</th>
                  <td>মোঃ ইলিয়াস</td>
                  <td>৫০০</td>
                </tr>
                <tr className="font-bold">
                  <th>৬</th>
                  <td>মোঃ মুনসুর</td>
                  <td>৪০০</td>
                </tr>
                <tr className="font-bold">
                  <th>৭</th>
                  <td>মোঃ সিরাজুল</td>
                  <td>৩০০</td>
                </tr>
                <tr className="font-bold">
                  <th>৮</th>
                  <td>মোঃ জালাল</td>
                  <td>৫০০</td>
                </tr>
                <tr className="font-bold">
                  <th>৯</th>
                  <td>মোঃ শহিদ</td>
                  <td>৪০০</td>
                </tr>
                <tr className="font-bold">
                  <th>১০</th>
                  <td>মোঃ আশরাফুল</td>
                  <td>৪০০</td>
                </tr>
                <tr className="font-bold">
                  <th>১১</th>
                  <td>মোঃ আজমুল</td>
                  <td>৩০০</td>
                </tr>
                <tr className="font-bold">
                  <th>১২</th>
                  <td>মোঃ মেজারুল</td>
                  <td>৫০০</td>
                </tr>
                <tr className="font-bold">
                  <th>১৩</th>
                  <td>মোঃ ইসমাইল</td>
                  <td>৫০০</td>
                </tr>
                <tr className="font-bold">
                  <th>১৪</th>
                  <td>মোঃ সমসের</td>
                  <td>৪০০</td>
                </tr>
                <tr className="font-bold">
                  <th>১৫</th>
                  <td>মোঃ আমান</td>
                  <td>৩০০</td>
                </tr>
                <tr className="font-bold">
                  <th>১৬</th>
                  <td>মোঃ সজিব</td>
                  <td>৩০০</td>
                </tr>
                <tr className="font-bold">
                  <th>১৭</th>
                  <td>মোঃ রশিদুল</td>
                  <td>৪০০</td>
                </tr>
                <tr className="font-bold">
                  <th>১৮</th>
                  <td>মোঃ মহসিম</td>
                  <td>৩০০</td>
                </tr>
                <tr className="font-bold">
                  <th>১৯</th>
                  <td>মোঃ মুসা</td>
                  <td>৫০০</td>
                </tr>
                <tr className="font-bold">
                  <th>২০</th>
                  <td>মোঃ নিশান</td>
                  <td>৩০০</td>
                </tr>
                <tr className="font-bold">
                  <th>২১</th>
                  <td>মোঃ কামরুল</td>
                  <td>৫০০</td>
                </tr>
                <tr className="font-bold">
                  <th>২২</th>
                  <td>মোঃ রমজান</td>
                  <td>৩০০</td>
                </tr>
                <tr className="font-bold">
                  <th>২৩</th>
                  <td>মোঃ শরিফ</td>
                  <td>৪০০</td>
                </tr>
                <tr className="font-bold">
                  <th>২৪</th>
                  <td>মোঃ সোহাগ</td>
                  <td>৪০০</td>
                </tr>
                <tr className="font-bold">
                  <th>২৫</th>
                  <td>মোঃ সইদুল</td>
                  <td>৩০০</td>
                </tr>
                <tr className="font-bold">
                  <th>২৬</th>
                  <td>মোঃ মাসুদ</td>
                  <td>৩০০</td>
                </tr>
                <tr className="font-bold">
                  <th>২৭</th>
                  <td>মোঃ নজরুল</td>
                  <td>৫০০</td>
                </tr>
                <tr className="font-bold">
                  <th>২৮</th>
                  <td>মোঃ আঃ রহমান</td>
                  <td>৮০০</td>
                </tr>
                <tr className="font-bold">
                  <th>২৯</th>
                  <td>মোঃ জিয়ারুল</td>
                  <td>৪০০</td>
                </tr>

                <tr className="font-extrabold text-xl text-green-500">
                  <th></th>
                  <td>মোট টাকা</td>
                  <td>১২৭০০</td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="border-2 border-dotted border-black "></div>

      {/* tarabi taka adai  tarabi taka adai  tarabi taka adai */}

      <div>
        <div className="mt-9 mb-4">
          <p className="text-3xl bg-lime-400 w-full text-center font-extrabold text-orange-500 p-4 rounded-xl scroll-mx-0 hover:text-slate-100">
            তারাবি নামাযের টাকা আদায়ের হিসাব ২০২৫ঃ-
          </p>
        </div>

        <div>
          <table className="table text-center mt-6 mb-32">
            <thead>
              <tr className="">
                <th className="text-2xl text-purple-400">ক্রমিক নং</th>
                <th className="text-2xl text-purple-400">নাম</th>
                <th className="text-2xl text-purple-400">টাকার পরিমান</th>
                <th className="text-2xl text-purple-400">জমা</th>
              </tr>
            </thead>
            <tbody className="">
              <tr className="font-bold">
                <th>১</th>
                <td>মোঃ আমজাদ</td>
                <td>১০০০</td>
                <td>১০০০</td>
              </tr>
              <tr className="font-bold">
                <th>২</th>
                <td>মোঃ মসলিম উদ্দীন</td>
                <td>৫০০</td>
                <td>৫০০</td>
              </tr>
              <tr className="font-bold">
                <th>৩</th>
                <td>মোঃ সইফল</td>
                <td>৪০০</td>
                <td>৪০০</td>
              </tr>
              <tr className="font-bold">
                <th>৪</th>
                <td>মোঃ আনোয়ার</td>
                <td>৩০০</td>
                <td>৩০০</td>
              </tr>
              <tr className="font-bold">
                <th>৫</th>
                <td>মোঃ হাসিম</td>
                <td>৩০০</td>
                <td>৩০০</td>
              </tr>
              <tr className="font-bold">
                <th>৬</th>
                <td>মোঃ মাসুম</td>
                <td>৫০০</td>
                <td>৫০০</td>
              </tr>
              <tr className="font-bold">
                <th>৭</th>
                <td>মোঃ আঃ ওহাব</td>
                <td>২০০০</td>
                <td>২০০০</td>
              </tr>
              <tr className="font-bold">
                <th>৮</th>
                <td>মোঃ নাজিম</td>
                <td>৭০০</td>
                <td>৭০০</td>
              </tr>
              <tr className="font-bold">
                <th>৯</th>
                <td>মোঃ বিপ্লব</td>
                <td>৫০০</td>
                <td>৫০০</td>
              </tr>
              <tr className="font-bold">
                <th>১০</th>
                <td>মোঃ আনোয়ার</td>
                <td>৫০০</td>
                <td>৫০০</td>
              </tr>
              <tr className="font-bold">
                <th>১১</th>
                <td>মোঃ দবিরুল</td>
                <td>৩০০</td>
                <td>৩০০</td>
              </tr>
              <tr className="font-bold">
                <th>১২</th>
                <td>মোঃ সামসুল</td>
                <td>৫০০</td>
                <td>৫০০</td>
              </tr>
              <tr className="font-bold">
                <th>১৩</th>
                <td>মোঃ এহসানুল</td>
                <td>৫০০</td>
                <td>৫০০</td>
              </tr>
              <tr className="font-bold">
                <th>১৪</th>
                <td>মোঃ মুক্তা</td>
                <td>৪০০</td>
                <td>৪০০</td>
              </tr>
              <tr className="font-bold">
                <th>১৫</th>
                <td>মোঃ ইসারুল</td>
                <td>৫০০</td>
                <td>৫০০</td>
              </tr>
              <tr className="font-bold">
                <th>১৬</th>
                <td>মোঃ ইলিয়াস</td>
                <td>৫০০</td>
                <td>৫০০</td>
              </tr>
              <tr className="font-bold">
                <th>১৭</th>
                <td>মোঃ মুনসুর</td>
                <td>৫০০</td>
                <td>৫০০</td>
              </tr>
              <tr className="font-bold">
                <th>১৮</th>
                <td>মোঃ শাহিন</td>
                <td>৩০০</td>
                <td>৩০০</td>
              </tr>
              <tr className="font-bold">
                <th>১৯</th>
                <td>মোঃ জালাল</td>
                <td>২০০</td>
                <td>২০০</td>
              </tr>
              <tr className="font-bold">
                <th>২০</th>
                <td>মোঃ শহিদ</td>
                <td>৪০০</td>
                <td>৪০০</td>
              </tr>
              <tr className="font-bold">
                <th>২১</th>
                <td>মোঃ আসরাফুল</td>
                <td>৩০০</td>
                <td>৩০০</td>
              </tr>
              <tr className="font-bold">
                <th>২২</th>
                <td>মোঃ আজমুল</td>
                <td>৪০০</td>
                <td>৪০০</td>
              </tr>
              <tr className="font-bold">
                <th>২৩</th>
                <td>মোঃ মেজারুল</td>
                <td>৫০০</td>
                <td>৫০০</td>
              </tr>
              <tr className="font-bold">
                <th>২৪</th>
                <td>মোঃ ইসমাইল</td>
                <td>৫০০</td>
                <td>৫০০</td>
              </tr>
              <tr className="font-bold">
                <th>২৫</th>
                <td>মোঃ সমসের</td>
                <td>৩০০</td>
                <td>৩০০</td>
              </tr>
              <tr className="font-bold">
                <th>২৬</th>
                <td>মোঃ রশিদুল</td>
                <td>৩০০</td>
                <td>৩০০</td>
              </tr>
              <tr className="font-bold">
                <th>২৭</th>
                <td>মোঃ মহসিম</td>
                <td>৩০০</td>
                <td>৩০০</td>
              </tr>
              <tr className="font-bold">
                <th>২৮</th>
                <td>মোঃ রিপন</td>
                <td>৩০০</td>
                <td>৩০০</td>
              </tr>
              <tr className="font-bold">
                <th>২৯</th>
                <td>মোঃ কামরুল</td>
                <td>৫০০</td>
                <td>৫০০</td>
              </tr>
              <tr className="font-bold">
                <th>৩০</th>
                <td>মোঃ সইদুল</td>
                <td>২০০</td>
                <td>২০০</td>
              </tr>
              <tr className="font-bold">
                <th>৩১</th>
                <td>মোঃ মাসুদ</td>
                <td>৩০০</td>
                <td>৩০০</td>
              </tr>
              <tr className="font-bold">
                <th>৩২</th>
                <td>মোঃ নজরুল</td>
                <td>৫০০</td>
                <td>৫০০</td>
              </tr>
              <tr className="font-bold">
                <th>৩৩</th>
                <td>মোঃ আঃ রহমান</td>
                <td>১০০০</td>
                <td>১০০০</td>
              </tr>
              <tr className="font-bold">
                <th>৩৪</th>
                <td>মোঃ নুরুল</td>
                <td>৩০০</td>
                <td>৩০০</td>
              </tr>
              <tr className="font-bold">
                <th>৩৫</th>
                <td>মোঃ সোহেল</td>
                <td>২০০</td>
                <td></td>
              </tr>
              <tr className="font-bold">
                <th>৩৬</th>
                <td>মোঃ আবদুল্লা</td>
                <td></td>
                <td></td>
              </tr>
              <tr className="font-bold">
                <th>৩৭</th>
                <td>মোঃ মোমিন</td>
                <td>২০০</td>
                <td></td>
              </tr>
              <tr className="font-bold">
                <th>৩৮</th>
                <td>মোঃ নিশান</td>
                <td>২০০</td>
                <td></td>
              </tr>
              <tr className="font-bold">
                <th>৩৯</th>
                <td>মোঃ তরিকুল</td>
                <td>২০০</td>
                <td>২০০</td>
              </tr>
              <tr className="font-bold">
                <th>৪০</th>
                <td>মোঃ জিয়ারুল</td>
                <td>৪০০</td>
                <td>৪০০</td>
              </tr>
              <tr className="font-bold">
                <th>৪১</th>
                <td>মোঃ নিজাম</td>
                <td>৩০০</td>
                <td>৩০০</td>
              </tr>
              <tr className="font-bold">
                <th>৪২</th>
                <td>মোঃ আমান</td>
                <td>২০০</td>
                <td></td>
              </tr>
              <tr className="font-bold">
                <th>৪৩</th>
                <td>মোঃ সোহাগ</td>
                <td></td>
                <td></td>
              </tr>
              <tr className="font-extrabold text-xl text-green-500">
                <th></th>
                <td>মোট টাকা</td>
                <td>১৮২০০</td>
                <td></td>
              </tr>
            </tbody>
            <tr>
              <th>ইমামকে প্রদান টাকা ডানে hover=</th>
              <th className="font-extrabold text-xl text-white hover:text-lime-400">
                মোট প্রদেয় টাকা= ১০০০০+৭৫০০+৫০০=১৮০০০
              </th>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Financing;
