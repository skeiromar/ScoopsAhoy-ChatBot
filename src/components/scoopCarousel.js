import React, {useState} from 'react';
import "../styles/scoopCaraousel.css";

function ScoopCarousel() {
    const [images, setImages] = useState(
        ['https://s3-prod.adage.com/s3fs-public/styles/800x600/public/Netflix-Stranger-Things_Baskin-Robbins--Scoops-Ahoy-Transformation_3X2.JPG', 
        'https://milwaukeerecord.com/wp-content/uploads/2019/07/ScoopsAhoy1.jpg',
        'https://myburbank.com/wp-content/uploads/2019/07/Scoops-Ahoy-1.jpg',
        'https://criticalpopcorn.files.wordpress.com/2019/07/scoopsahoy5.jpg?w=610&h=407']
    ); 
    const [imgIndex, setImgIndex] = useState(0);
    const [imgText, setImgText] = useState({
        0: ['Los Angeles', 'Come try our new flavors!'], 
        1: ['Inside', 'Meet our great staff'],
        2: ['Menu', 'Explore unqiue combinations'],
        3: ['Scoop Trucks', 'Try our varietes from out various trucks']
    });

    const handleNext = () => {
        if (imgIndex < images.length - 1) {
            setImgIndex(imgIndex + 1);
        }
    };  
    const handlePrev = () => {
        if (imgIndex > 0) {
            setImgIndex(imgIndex - 1);
        }
    };

    return (    
        <div className="carousel slide">

            <ol className="carousel-indicators">
                <li className={`${imgIndex === 0 ? 'active' : ''}`}></li>
                <li className={`${imgIndex === 1 ? 'active' : ''}`}></li>
                <li className={`${imgIndex === 2 ? 'active' : ''}`}></li>
                <li className={`${imgIndex === 3 ? 'active' : ''}`}></li>
            </ol>

            <div className="carousel-inner">
                <div className="item active img-container">
                    <img src={`${images[imgIndex]}`} alt="stuff" id="img"/>
                    <div className="carousel-caption">
                        <h3>{`${imgText[imgIndex][0]}`}</h3>
                        <h4>{`${imgText[imgIndex][1]}`}</h4>
                    </div>
                </div>
            </div>

            <a className="left carousel-control" onClick={() => handlePrev()} style={{cursor: 'pointer'}}>
                <span className="glyphicon glyphicon-chevron-left"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="right carousel-control" onClick={() => handleNext()} style={{cursor: 'pointer'}}>
                <span className="glyphicon glyphicon-chevron-right"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    )
}

export default ScoopCarousel;
