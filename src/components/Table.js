import React from 'react';

class Table extends React.Component{
    render(){
        return(
            <React.Fragment>
                <div className="container">
			<main className="row">
				<div className="col m6 offset-m3"id="inner">
					<div className="row">
						<div className="col m2 offset-m1 topControl">
							<a href="#"><i className="fa fa-chevron-left fa-2x" aria-hidden="true"></i></a>

						</div>
						<div className="col m2 offset-m6 topControl">
							<a href="#"><i className="fa fa-search fa-2x" aria-hidden="true"></i></a>

						</div>
						
						<div className="col m6 offset-m3 inText">
							<p>BOOKING FORM</p>
                            <p>select time</p>
                             <input type="time" placeholder ="pick a time" min="10:00" max="22:30"/>
     
                        </div>


						<div className="col m6 offset-m3 inText">
							<p>Table for</p>
                            <input type="number" placeholder ="number of people" id="num" min="1"/>
						</div>
					     </div>
					
						<div className="col m6 offset-m3 inText">
							<p>Choose Date </p>
						</div>
						<div className="col m6 offset-m3">
							<input className="date-picker" type="date" name="" id="date"/>
        					</div>
						<div className="col m8 offset-m2 submit">
                            <button type="submit" id="submit" className="btn" onclick="mybooking()">Confirm</button>
                            
                        </div>

                        



                </div>
			</main>
		</div>
            </React.Fragment>
        )
    }
}
export default Table;