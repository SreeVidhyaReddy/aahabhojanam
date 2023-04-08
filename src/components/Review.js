import React from 'react';
import vidhya from "../assets/images/vidhya.png" ;
import hsk from "../assets/images/HSK.jpg" ;



class Review extends React.Component{
render(){

	return(

        <React.Fragment>
          <section id="reviews" className="py-5">
        <div id="slider" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                
                <div className="carousel-item active">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10 mx-auto d-flex justify-content-between review-item py-3">
                                
                                <div className="align-self-center ml-3">
                                    <img src={vidhya} alt="" className="rounded-circle review-img"/>
                                </div>
                                
                                <div className="review-text px-5">
                                    <h2 className="text-capitalize mb-3 primary-color">vidhya</h2>
                                    <p className="lead text-muted">great service, great people</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="carousel-item ">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-10 mx-auto d-flex justify-content-between review-item py-3">
                                   
                                    <div className="align-self-center ml-3">
                                        <img src={hsk} alt="" className="rounded-circle review-img"/>
                                    </div>
                                    
                                    <div className="review-text px-5">
                                        <h2 className="text-capitalize mb-3 primary-color">Hari Sai Kumar</h2>
                                        <p className="lead text-muted">I had a lovely meal, thank you </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                  
                <div className="carousel-item ">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-10 mx-auto d-flex justify-content-between review-item py-3">
                                    
                                    <div className="align-self-center ml-3">
                                        <img src="./assets/images/vidhya.png" alt="" className="rounded-circle review-img"/>
                                    </div>
                                    
                                    <div className="review-text px-5">
                                        <h2 className="text-capitalize mb-3 primary-color">Venkata Sai Kumar</h2>
                                        <p className="lead text-muted">Amazing food!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                

                <div className="carousel-item ">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-10 mx-auto d-flex justify-content-between review-item py-3">
                                    
                                    <div className="align-self-center ml-3">
                                        <img src="./assets/images/vidhya.png" alt="" className="rounded-circle review-img"/>
                                    </div>
                                    
                                    <div className="review-text px-5">
                                        <h2 className="text-capitalize mb-3 primary-color">Bala Sai Jayanth </h2>
                                        <p className="lead text-muted">Amazing food!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

            </div>
          
            <a href="#slider" className="carousel-control-prev" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon"></span>
            </a>

            <a href="#slider" className="carousel-control-next" role="button" data-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </a>
        </div>

    </section>

        </React.Fragment>


		)
}

}
export default Review;