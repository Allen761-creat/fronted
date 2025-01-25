import ImageGallery from 'react-image-gallery'
import "react-image-gallery/styles/css/image-gallery.css";
import '../Stylesheet/image.css';  

const Gallery = ({images}) => {
    console.log(images)
  

const galleryimages = images && images.map(image => ({
  original: image,
  thumbnail: image,
}))
console.log(galleryimages)
  return (
   
      <ImageGallery items={galleryimages} showFullscreenButton={true} />
   
  )
}

export default Gallery





// import React from 'react';
// import ImageGallery from 'react-image-gallery';
// import "react-image-gallery/styles/css/image-gallery.css";
// import '../Stylesheet/image.css';  
// import ReactImageMagnify from 'react-image-magnify';

// const Gallery = ({ images }) => {
  //  Map the images to the format required by ImageGallery
//   const galleryImages = images && images.map(image => ({
//     original: image.url,
//     thumbnail: image.url,
//     description: image.description // Optional, if you have description data
//   }));

//    Function to render the magnified image
//   const renderMagnifiedImage = (img) => (
//     <ReactImageMagnify
//       {...{
//         smallImage: {
//           alt: 'Image alt text',
//           isFluidWidth: true,
//           src: img.original, // Correctly reference the original image
//         },
//         largeImage: {
//           src: img.original, // Use the same source for the zoomed image
//           width: 1200,
//           height: 1800,
//         },
//         enlargedImagePosition: 'right', // Place the zoomed image to the right
//         lensStyle: { 
//           backgroundColor: 'rgba(0, 0, 0, 0.6)' 
//         },
//         zoomPosition: 'right', // This can help you move the zoom lens to the right side
//       }}
//     />
//   );

//   return (
//     <div>
//       <ImageGallery 
//         items={galleryImages} 
//         showFullscreenButton={true}
//         renderItem={(img) => (
//           <div className="image-gallery-image">
//             {renderMagnifiedImage(img)} 
//           </div>
//         )}
//       />
//     </div>
//   );
// };

// export default Gallery;
