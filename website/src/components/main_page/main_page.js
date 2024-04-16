import React from 'react';
import data from './dummy_data.json'; // Importing the dummy data JSON file
import './main_page.css';

// Component to render each item from the dummy data
function Item({ username, title, description, image }) {
  return (
    <div className="item">
      <h2>{title}</h2>
      <p>{description}</p>
      <p>Uploaded by: {username}</p>
      <img src={image} alt={title} />
    </div>
  );
}

function MainPage() {
  return (
    <div className="main-page">
      <h1>Main Page</h1>
      <div className="items-container">
        {data.map((item, index) => (
          <Item
            key={index}
            username={item.username}
            title={item.title}
            description={item.description}
            image={`./images/${item.image}`} // Assuming images are in an 'images' folder
          />
        ))}
      </div>
    </div>
  );
}

export default MainPage;
