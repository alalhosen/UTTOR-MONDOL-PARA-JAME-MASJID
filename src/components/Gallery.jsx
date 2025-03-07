const Gallery = () => {
  return (
    <div>
      <p>Gallery</p>
      <section className="py-6 dark:bg-gray-100 dark:text-gray-900">
	<div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
		<img src="https://i.ibb.co.com/hFXzcBwS/IMG-20250302-134402.jpg" alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square" />

		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp" />

		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?2" />

		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?3" />

		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://i.ibb.co.com/hFXzcBwS/IMG-20250302-134402.jpg" />
		{/* 222222 */}
		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://i.ibb.co.com/hFXzcBwS/IMG-20250302-134402.jpg" />

		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://i.ibb.co.com/hFXzcBwS/IMG-20250302-134402.jpg" />

		<img alt="" className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square" src="https://i.ibb.co.com/hFXzcBwS/IMG-20250302-134402.jpg" />
		<img src="https://i.ibb.co.com/hFXzcBwS/IMG-20250302-134402.jpg" alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 dark:bg-gray-500 aspect-square" />
	</div>
</section>
    </div>
  );
};

export default Gallery;
