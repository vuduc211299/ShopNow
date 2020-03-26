import React from 'react'
import '../../css/footer.css'
const Footer = () => {
    return ( 
        <section id="footer">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
                        <ul className="list-unstyled list-inline social text-center">
                            <li className="list-inline-item"><a href="https://www.facebook.com/vuduc2112" target='blank'><i className="i-white fa fa-facebook"></i></a></li>
                            <li className="list-inline-item"><a href="https://twitter.com/leojack992112" target='blank'><i className="i-white fa fa-twitter"></i></a></li>
                            <li className="list-inline-item"><a href="https://github.com/vuduc211299" target='blank'><i className="i-white fa fa-github"></i></a></li>
                        </ul>
                    </div>
                    
                </div>	
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
                        Developed by Duc Vu
                    </div>
                </div>	
            </div>
	    </section>
    )
}


export default Footer