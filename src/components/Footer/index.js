import Navbar from "../Navbar";
import './index.css'

const Footer = () => (
    <>
        <Navbar />
        <div className="overall-footer">
            <div className="Footer-container">
                <div  className="below-cards">
                    <h1>Yodora</h1>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M3 10.2V14.1875C3 16.8181 3 18.1334 3.59458 19.0984C3.92224 19.6301 4.36988 20.0778 4.90164 20.4054C5.86658 21 7.18189 21 9.8125 21H13.8C16.7998 21 18.2997 21 19.3511 20.2361C19.6907 19.9893 19.9893 19.6907 20.2361 19.3511C21 18.2997 21 16.7998 21 13.8V10.2C21 7.20021 21 5.70032 20.2361 4.64886C19.9893 4.30928 19.6907 4.01065 19.3511 3.76393C18.2997 3 16.7998 3 13.8 3H10.2C7.20021 3 5.70032 3 4.64886 3.76393C4.30928 4.01065 4.01065 4.30928 3.76393 4.64886C3 5.70032 3 7.20021 3 10.2Z" stroke="#2B2730" stroke-width="1.5" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.638 9.49555C14.2538 9.89017 14.2778 10.2119 14.2778 10.8986V11.9809H16.8333L16.3125 14.1455H14.2778V21H11.9444V14.1455H10V11.9809H11.9444V10.8986C11.9444 10.1423 12.0484 8.92591 12.9064 8.04465C13.8734 7.05154 15.0556 6.79439 17 7.15515V9.31974C15.4916 8.9381 14.8412 9.28681 14.638 9.49555Z" fill="#2B2730" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M3 18.099C15.8681 21.7976 19.0851 13.219 19.0851 8.46739L21 6.54106L19.0851 7L20.234 5L17.9362 5.77053C13.034 3.61304 11.8085 7.44001 11.8085 9.62319C9.35745 11.1642 5.68085 7.69686 4.14894 5.77053C3.53617 7.31159 4.91489 9.49476 5.68085 10.3937H3.38298C3.68936 11.3184 5.80851 12.8337 6.82979 13.4758L4.91489 14.2464C5.52766 16.0957 7.7234 16.3011 8.74468 16.1727C8.4383 17.0973 4.78723 17.8422 3 18.099Z" stroke="#2B2730" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M10.2 21H13.8C16.7998 21 18.2997 21 19.3511 20.2361C19.6907 19.9893 19.9893 19.6907 20.2361 19.3511C21 18.2997 21 16.7998 21 13.8V10.2C21 7.20021 21 5.70032 20.2361 4.64886C19.9893 4.30928 19.6907 4.01065 19.3511 3.76393C18.2997 3 16.7998 3 13.8 3H10.2C7.20021 3 5.70032 3 4.64886 3.76393C4.30928 4.01065 4.01065 4.30928 3.76393 4.64886C3 5.70032 3 7.20021 3 10.2V13.8C3 16.7998 3 18.2997 3.76393 19.3511C4.01065 19.6907 4.30928 19.9893 4.64886 20.2361C5.70032 21 7.20021 21 10.2 21Z" stroke="#2B2730" stroke-width="1.5" />
                            <circle cx="12" cy="12" r="4" stroke="#2B2730" stroke-width="1.5" />
                            <circle cx="17" cy="7" r="1" fill="#2B2730" />
                        </svg>
                    </div>
                </div>
                <div className="below-cards">
                    <h1>About</h1> 
                    <div>
                        <p>How it works</p>
                        <p>Company</p>
                        <p>Help & support</p>
                    </div>
                </div>
                <div  className="below-cards">
                    <h1>For creators</h1> 
                    <div>
                        <p>How can i get paid</p>
                        <p>Become a creator</p>
          
                    </div>
                </div>
                <div  className="below-cards">
                    <h1>Learn</h1> 
                    <div>
                        <p>Blog</p>
                        <p>Cookies policy</p>
                        <p>Privacy policy</p>
                    </div>
                </div>
                <div  className="below-cards"> 
                    <h1>Support</h1> 
                    <div>
                        <p>Services</p>
                        <p>Report abuse</p>
                        <p>
                            Dispute a payment
                        </p>
                    </div>
                </div>
            </div>
        </div>

    </>

)


export default Footer