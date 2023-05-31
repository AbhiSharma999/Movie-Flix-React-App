import {Component} from 'react';

function MovieCard(props) {

        //console.log(this.props);
        const {movies, addStars, decStars, toggleFav, toggleCart} = props;

        const {title,plot,poster,price,rating,stars,fav,inCart} = props.movies;

        return(
            <div className="main">
                <div className="movie-card">

                    <div className="left">
                        <img alt="Poster" src={poster} />
                    </div>

                    <div className="right">
                        <div className="title"> {title} </div>
                        <div className="plot"> {plot} </div>
                        <div className="price"> INR {price} </div>

                        <div className="footer">
                            <div className="rating"> {rating} </div>
                            <div className="star-dis">

                                <img className="str-btn" alt="dec" src="https://cdn-icons-png.flaticon.com/128/9146/9146915.png" onClick={() => decStars(movies)}/>

                                <img alt="star" src="https://cdn-icons-png.flaticon.com/128/3237/3237420.png" className="stars"/>

                                <img className="str-btn" alt="inc" src="https://cdn-icons-png.flaticon.com/128/1828/1828925.png" onClick={() => {addStars(movies)}}/>

                                <span className="starCount"> {stars} </span>
                            </div>

                            {/* {fav ? <button className="unfavourite-btn" onClick={this.handleFav}>Un-favourite</button> : <button className="favourite-btn" 
                            onClick={this.handleFav}>Favourite</button>} */}

                            <button className= {fav?"unfavourite-btn":"favourite-btn"}
                            onClick={() => toggleFav(movies)}> {fav ? "Unfavourite" : "Favourite"}
                            </button>
                            
                            <button className = {inCart ? "unfavourite-btn":"cart-btn"} 
                            onClick={() => toggleCart(movies)}>
                                {inCart ? "Remove from cart":"Add to cart"}
                            </button>
                            {/* <button className="cart-btn">Add to cart</button> */}
                        </div>
                    </div>
                </div>
            </div>
            
        )
    
}

export default MovieCard;