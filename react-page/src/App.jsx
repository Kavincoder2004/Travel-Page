
import './App.css'
import Nav from './Nav-bar'
import Card from './Card-bar'
import Rating from './Rating';
import 'swiper/css';
import 'swiper/css/navigation';
import Footer from './Footer';
import { Navigation, Pagination } from 'swiper/modules'; 
import { Swiper, SwiperSlide } from 'swiper/react';

function App() {
 const cards=[
  {id:1,title:"Switzerland",img:"/images for tour/Lauterbrutten-Switzerland-821231695031154.jpg", description: "Switzerland is a stunning Alpine nation known for its breathtaking mountains, crystal-clear lakes, and a blend of diverse European cultures."},
  {id:2 ,title:"Kerala",img:"/images for tour/OPENING-Manuia-Beach-Resort-1140x641.jpg",description:"Kerala tour and travel offers enchanting backwaters, lush hill stations, golden beaches, and vibrant culture, making it a true paradise for visitors."},
  {id:3,title:"Maldives",img:"/images for tour/wp11416944.jpg",description:"The Maldives is a tropical paradise of turquoise waters, coral reefs, and luxury resorts, making it one of the world’s most sought-after travel destinations."},
  {id:4,title:"Kanyakumari",img:"/images for tour/Kanyakumari.jpg",description:"Kanyakumari, at the southern tip of India, is famed for its stunning sunrise and sunset views over the confluence of the Arabian Sea, Bay of Bengal, and Indian Ocean"},
  {id:5,title:"Srilanka",img:"/images for tour/srilanka.jpg",description:"Sri Lanka is a beautiful island nation in the Indian Ocean, known for its golden beaches, lush tea plantations, ancient temples, and rich cultural heritage."},
  {id:6,title:"Japan",img:"/images for tour/japan.jpg",description:"Japan tour and travel offers a unique blend of ancient traditions and modern wonders, from serene temples and cherry blossoms to futuristic cities and bullet trains."},
  {id:7,title:"New Zealand",img:"/images for tour/nz.jpg",description:"Experience breathtaking landscapes and adventure in every corner with New Zealand tours.It captures the country’s mix of natural beauty and thrill‑seeking."}
 ];
const ratingCards=[{id:1,location:"Berne",title:"European Hotel",img:"/images for tour/r-1.jpeg",rating:"4.6 (4,675) reviews",price:"$899",duration:"2 Days 3 Nights"},
                    {id:2,location:"Alapuza",title:"Alapuza boat house",img:"/images for tour/r-2.jpeg", rating:"4.3 (3,473) reviews",price:"$699",duration:"3 days 4 Nights"},
                    {id:3,location:"Nagerkovil",title:"Sunrise Horizon Hotel",img:"/images for tour/r-3.jpg",rating:"4.4 (2,432) reviews",price:"$459",duration:"3 Days 4 Nights"},
                    {id:4,location:"Ceylon",title:" Ceyloon Breeze resort",img:"/images for tour/r-4.webp",rating:"4.8 (6,492) reviews",price:"$899",duration:"2 Days 3 Nights"},
                      {id:5,location:"Mt.fugi",title:" Mt Fugi resort",img:"/images for tour/r-5.jpg",rating:"4.2 (5,892) reviews",price:"$799",duration:"3 Days 4 Nights"},
                      {id:6,location:"Shillong",title:"Monsoon Wind resort",img:"/images for tour/r-6.webp",rating:"4.8 (9,892) reviews",price:"$799",duration:"3 Days 4 Nights"},
                      {id:7,location:"Maldives",title:"Ocean Ridge resort",img:"/images for tour/r-7.jpg",rating:"4.6 (4,892) reviews",price:"$999",duration:"3 Days 4 Nights"},
                      {id:6,location:"Ooty",title:"Hill Queen Resort",img:"/images for tour/r-8.webp",rating:"4.5 (4,992) reviews",price:"$499",duration:"3 Days 4 Nights"}
]
  return (
    <>
    <div>
       <div className="hero-section">
    <Nav/>
    <div className="hero-text">
          <h1 className='  text-white fw-bold'>Discover Your Journey</h1>
          <p>   Every step away from home reminds us that your adventure begins where comfort ends. 
            Whether you're chasing sunsets or scaling peaks, travel far, live fully, remember forever. 
            From bustling cities to serene landscapes, from mountains to beaches — we take you there.
          </p>
    <div className="search-box">
          <input type='text' placeholder='Search Places'></input>
          <button className='btn btn-danger'>Explore</button>
    </div> 
    </div>
    </div>
  

    </div>
    <div>
      <h2 className='mt-3 fw-bold ms-3'  > Popular Activites</h2>
    </div>
    <Swiper spaceBetween={0}
        slidesPerView={4}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        modules={[Navigation]}
      >
        {cards.map((card) => (
          <SwiperSlide key={card.id}>
            <Card {...card} />
          </SwiperSlide>
        ))}

      
    </Swiper>
    <div>
      <h2 className='mt-3 fw-bold ms-3'>Destinations</h2>
    </div>
    <div className="tour-grid">
      {ratingCards.map((card)=>(<Rating key={card.id}{...card}/>))}
    </div>
    <div><Footer/></div>
    </>
    
    
  )
}

export default App
