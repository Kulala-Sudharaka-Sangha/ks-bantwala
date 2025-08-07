import "./Gallery.scss";

export const Gallery = () => {
  const galleryData = {
    title: "Gallery",
    description: "Explore our collection of images and videos.",
    images: [
      // Add 200 more images to the gallery
      ...Array.from({ length: 25 }, (_, i) => ({
        id: i,
        src: `/sample-images/horse-${i + 1}.jpg`,
      })),
    ],
  };

  return (
    <div className="gallery">
      <div className="page-title">Moments & Memories</div>
      <div className="gallery-content">
        {galleryData.images.map((image) => (
          <img
            key={image.id}
            src={image.src}
            alt={`Gallery image ${image.id}`}
            className="gallery-image"
          />
        ))}
      </div>
    </div>
  );
};
