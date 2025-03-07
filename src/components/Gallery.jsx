const Gallery = () => {
  return (
    <div className="px-4">
      <p className="text-green-500 font-bold pl-5">সমগ্র ছবির ভান্ডারলঃ</p>
      <section className="py-6 dark:bg-gray-100 dark:text-gray-900">
        <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
          <img
            src="https://i.ibb.co.com/hFXzcBwS/IMG-20250302-134402.jpg"
            alt=""
            className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square"
          />

          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src="https://i.ibb.co.com/23wNJDZT/IMG-20250302-134226.jpg"
          />

          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src="https://i.ibb.co.com/0RVmsPTH/IMG-20250302-134819.jpg"
          />

          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src="https://i.ibb.co.com/Z6Htp4Y9/IMG-20250302-134619.jpg"
          />

          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src="https://i.ibb.co.com/9kcR1Ggw/1.jpg"
          />
          {/* 222222 */}
        </div>
      </section>
    </div>
  );
};

export default Gallery;
