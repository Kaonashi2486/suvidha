import React from 'react';

export default function EventSlider() {
  return (
    <>
      <div className="slide-container">
        <div className="slide-content">
          <div className="card-wrapper">
            <div className="card">
              <div className="image-content">
                <span className="overlay"></span>

                <div className="card-image">
                  <img src="image-url" alt="Image Alt Text" />
                </div>
              </div>
              <div className="card-content">
                <div>
                  <h2 className="name">Tree plantation</h2>
                  <h6 className="description">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Deleniti dignissimos atque, corrupti unde ab quae aliquam
                    rerum corporis ipsum exercitationem eveniet non maiores
                    dicta? Laudantium sint hic asperiores eligendi autem?
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
