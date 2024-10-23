import VedioPlayer from "./vedioPlayerFunction";
import './homepage.css'
import Consoles from "./fetchdata/consoles";
import ProductList from "./fetchdata/getdata";

export default function HomePage () {
    
    
    return(<section className="main-section-container">
        <div className="top-section">
        <VedioPlayer/>
        <div className="article-top-section">
            <div className="img-top-section"> 
            </div>
            <div className="top-section-description-container">
            <h2>Coming Soon In Stock</h2>
            <div className="description">
            <p>PlayStation 5 pro 30th anniversary</p>
            </div>
            </div>
        </div>
        </div>
        <div className="consoles-container">

            <ProductList/>
            </div>
    </section>
    

)
} 