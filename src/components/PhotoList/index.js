import React, { useState } from 'react';
import Modal from '../Modal';

const PhotoList = ({ category }) => {

  const [photos] = useState([
    {
      name: 'Grocery aisle',
      category: 'commercial',
      description: 'this is a description',
    },
    {
      name: 'Grocery booth',
      category: 'commercial',
      description: 'this is a description',
    },
    {
      name: 'Building exterior',
      category: 'commercial',
      description: 'this is a description',
    },
    {
      name: 'Restaurant table',
      category: 'commercial',
      description: 'this is a description',
    },
    {
      name: 'Cafe interior',
      category: 'commercial',
      description: 'this is a description',
    },
    {
      name: 'Cat green eyes',
      category: 'portraits',
      description: 'this is a description',
    },
    {
      name: 'Green parrot',
      category: 'portraits',
      description: 'this is a description',
    },
    {
      name: 'Yellow macaw',
      category: 'portraits',
      description: 'this is a description',
    },
    {
      name: 'Pug smile',
      category: 'portraits',
      description: 'this is a description',
    },
    {
      name: 'Pancakes',
      category: 'food',
      description: 'this is a description',
    },
    {
      name: 'Burrito',
      category: 'food',
      description: 'this is a description',
    },
    {
      name: 'Scallop pasta',
      category: 'food',
      description: 'this is a description',
    },
    {
      name: 'Burger',
      category: 'food',
      description: 'this is a description',
    },
    {
      name: 'Fruit bowl',
      category: 'food',
      description: 'this is a description',
    },
    {
      name: 'Green river',
      category: 'landscape',
      description: 'this is a description',
    },
    {
      name: 'Docks',
      category: 'landscape',
      description: 'this is a description',
    },
    {
      name: 'Panoramic village by sea',
      category: 'landscape',
      description: 'this is a description',
    },
    {
      name: 'Domestic landscape',
      category: 'landscape',
      description: 'this is a description',
    },
    {
      name: 'Park bench',
      category: 'landscape',
      description: 'this is a description',
    },
  ]);

  const currentPhotos = photos.filter((photo) => photo.category === category);

  const [currentPhoto, setCurrentPhoto] = useState();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = (image, i) => {
      setCurrentPhoto({...image, index: i})
      setIsModalOpen(true);
  }

  return (
    <div>
        {isModalOpen && <Modal currentPhoto={currentPhoto} />}
       
      <div className="flex-row">
        {currentPhotos.map((image, i) => (
          <img
            src={require(`../../assets/small/${category}/${i}.jpg`).default}
            alt={image.name}
            className="img-thumbnail mx-1"
            onClick={() => toggleModal(image, i)}
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoList;
