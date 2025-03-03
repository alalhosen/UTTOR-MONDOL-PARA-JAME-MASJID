const Ramadan = () => {
  return (
    <div>
        <div className="mt-9 mb-4">
            <p className="text-3xl bg-lime-400 text-center font-extrabold text-orange-500 p-4 mx-5 rounded-se-full">মসজিদে ইফতারের নামের তালিকাঃ</p>
        </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-xl font-extrabold">
              <th>রমজান</th>
              <th>ইংরেজি তারিখ</th>
              <th>নাম</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr className="font-bold">
              <th>১</th>
              <td>২ মার্চ</td>
              <td>মোঃ নিজামুদ্দিন</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Ramadan;
