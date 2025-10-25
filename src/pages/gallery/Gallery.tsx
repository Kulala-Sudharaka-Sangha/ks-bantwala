import "./Gallery.scss";

const Gallery = () => {
  const galleryData = {
    title: "Gallery",
    description: "Explore our collection of images and videos.",
    images: [
      // Add 200 more images to the gallery
      ...Array.from({ length: 22 }, (_, i) => ({
        id: i,
        src: `/gallery-images/kulala-${i + 1}.webp`,
      })),
    ],
  };

  return (
    <div className="gallery">
      <div className="page-title">Moments & Memories</div>
      {/* <p>
        Explore our collection of images. Enjoy the visual journey through our
        gallery.
      </p> */}
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

export default Gallery;
