import data from './data';
import banners from './logo';

function App() {
  return (
    <div className="grid-container">
    <header>
        <div className="banner">
            {banners.banner.map((banner) =>
            <><img src={banner.logo} alt="Logo" /><img src={banner.ad} alt="Banner" /></>
            )}
        </div>
        <div className="menubar">
            <a href="/">Home</a>
            <a href="/All Products">All Products</a>
            <a href="/My Accounts">My Accounts</a>
            <a href="/Sign Up">Sign Up</a>
            <a href="/Shopping Cart">Shopping Cart</a>
            <a href="/Contact Us">Contact Us</a>
            <div>
            <form action="data.js" method="get" encType="multipart/form-data">
                <input type="text" name="user_query" placeholder="Search a product" />
                <input type="submit" name="search" value="Search" />
            </form>
                
            </div>
        </div>

    </header>
    <main id="main-container">
        <div>
            <div>
                <div className="sidebar">
                    <div className="Cat"><b>Categories</b></div>
                    <div className="sub-cat">
                         <a href="">Laptops</a>
                         <a href="">Cameras</a>
                         <a href="">Mobiles</a>
                         <a href="">Computers</a>
                         <a href="">iPads</a>
                         <a href="">iPhones</a>

                    </div>
                    <div className="Brand"><b>Brand</b></div>
                    <div className="sub-brnd">
                         <a href="">HP</a>
                         <a href="">DELL</a>
                         <a href="">LG</a>
                         <a href="">Samsung</a>
                         <a href="">Sony</a>
                         <a href="">Toshiba</a>

                    </div>
                </div>

            </div> 
            <ul className="products">
                {data.products.map((product) =>
                <li>
                <div key={product._id} className="product">
                    <a href={`/product/${product._id}`}>{product.name}</a>
                    <a href={`/product/${product._id}`}>
                        <img className="medium" src={product.image} alt={product.name}/>
                    </a>
                    <div className="pro-body">
                        <div className="product-price">
                            <b>${product.price}</b> 
                        </div>
                        <div>
                            <details>{product.details}</details>
                        </div>
                        <div>
                            <button>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </li>   
                )}
            </ul>
      

        </div>

    </main>
    <footer>All rights reserved @ 2022</footer>
</div> 
 
  );
}

export default App;
