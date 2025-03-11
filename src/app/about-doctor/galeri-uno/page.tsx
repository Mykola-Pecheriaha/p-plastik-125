import GaleriUno from '../../../components/GaleriUno/GaleriUno';

export default function GaleriUnoPage() {
  const images = [
    '/images/image1.jpg',
    '/images/image2.jpg',
    '/images/image3.jpg',
    // Додайте більше зображень за потреби
  ];

  return (
    <div className="container mx-auto p-4">
      <GaleriUno images={images} />
    </div>
  );
}
