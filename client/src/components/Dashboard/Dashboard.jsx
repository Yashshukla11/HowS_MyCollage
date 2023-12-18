import React, { useState } from 'react';
import NavBar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

function Dashboard() {
  const collage = [
    {
      name: 'JSSATEN',
    },
    {
      city: 'NOIDA',
    },
    {
      country: 'India',
    },
    {
      post: [
        {
          owner: 'Yash',
          url: 'https://jssaten.ac.in/assets/a7.jpg',
          title: 'AB-5 Building',
          description: 'Description for Image 1',
        },
        {
          owner: 'Yash',
          url: 'https://jssaten.ac.in/assets/a5.jpg',
          title: 'AB-1 Building',
          description: 'Description for Image 2',
        },
        {
          owner: 'Yash',
          url: 'https://jssaten.ac.in//assets/images/mca/mca.jpg',
          title: 'AB-3 Building',
          description: 'Description for Image 3',
        },
        {
          owner: 'Yash',
          url: 'https://i.postimg.cc/9XdffPHQ/jss-boys-hostel-noida-noida-hostel-for-students-k5bt8x1l9l.jpg',
          title: 'BH(Boys Hostel)',
          description: 'Description for Image 4',
        },
        {
          owner: 'Yash',
          url: 'https://jssaten.ac.in/assets/a5.jpg',
          title: 'AB-1 Building',
          description: 'Description for Image 5',
        },
        {
          owner: 'Yash',
          url: 'https://i.postimg.cc/9XdffPHQ/jss-boys-hostel-noida-noida-hostel-for-students-k5bt8x1l9l.jpg',
          title: 'BH(Boys Hostel)',
          description: 'Description for Image 6',
        },
        {
          owner: 'Yash',
          url: 'https://i.postimg.cc/9XdffPHQ/jss-boys-hostel-noida-noida-hostel-for-students-k5bt8x1l9l.jpg',
          title: 'BH(Boys Hostel)',
          description: 'Description for Image 7',
        },
      ],
    },
  ];

  const [collegeImages, setCollegeImages] = useState(collage[3].post);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [collageName, setCollageName] = useState(collage[0].name);

  const handleSearch = (searchQuery) => {
    setCollegeImages(collage[3].post);
  };

  const openPopup = (image) => {
    setSelectedImage(image);
    setShowPopup(true);
  };

  const closePopup = () => {
    setSelectedImage(null);
    setShowPopup(false);
  };

  return (
    <div style={{ height: '100vh', overflowY: 'auto' }}>
      {/* Navigation Bar */}
      <NavBar handleSearch={handleSearch} />

      {/* Main content */}
      <div className='pb-10'>
        {/* Display Collage Name */}
        <h1 className="text-3xl font-bold text-center mt-4">{collageName}</h1>

        {/* College Images Display */}
        <div className="flex flex-wrap justify-center mt-8">
          {collegeImages.map((image, index) => (
            <div key={index} className="m-4 rounded-lg overflow-hidden border border-gray-300">
              <img
                src={image.url}
                alt={image.title}
                className="w-50 h-50 cursor-pointer rounded-lg"
                style={{ width: '400px', height: '400px' }}
                onClick={() => openPopup(image)}
              />
              <p className="text-center font-poppins text-lg font-semibold underline">{image.title}</p>
            </div>
          ))}
        </div>

        {/* Popup View */}
        {showPopup && (
          <div
            className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50"
            onClick={closePopup}
          >
            <div className="bg-white p-4 rounded-lg shadow-lg flex items-center">
              <div className="flex flex-col w-96 h-96">
                <img
                  src={selectedImage.url}
                  alt={selectedImage.title}
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2">{selectedImage.title}</h2>
                  <p>{selectedImage.description}</p>
                  <p className="text-gray-500">Owner: {selectedImage.owner}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Dashboard;
