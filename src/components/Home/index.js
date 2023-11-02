import { Component } from 'react'
import Navbar from '../Navbar'
import Company  from '../Company'
import Footer from '../Footer'
import './index.css'

class Home extends Component {


    renderExplorePage = () => (
        <>
            <div className='explore-main-container'>
                <div className='explore-first-container'>
                    <h1 className='learn-heading'>Learn from your
                        favorite creators
                        about <span>fantasy reports</span></h1>
                    <div className='video-calls-first'>

                        <div className='video-calls-second'>

                            <h1>1:1</h1>
                            <p>Video calls</p>

                        </div>


                    </div>
                </div>
                <div className='second-container'>
                    <img src="https://res.cloudinary.com/rajaramanikanta/image/upload/v1698942871/kod6dvw0b1ohxg9hwqxf.png" className='second-image'  alt="imges"/>

                </div>

            </div>
            <div className='explore-third-container'>

                <div className='cards-heading-container' >

                    <div>
                        <h1 className='get-direct-heading'><span>Get direct</span> knowledge and insight.</h1>
                    </div>
                    <div className='cards-container'>
                        <div>
                        <img src="https://res.cloudinary.com/rajaramanikanta/image/upload/v1698944244/nrb37i6vyarm8ysqaidl.png" className='card-image'  alt="img"/>
                        </div>
                        <div>
                        <img src="https://res.cloudinary.com/rajaramanikanta/image/upload/v1698944245/xmbeuivp7dz9umdtzqjz.png" className='card-image' alt="img"/>
                            
                            </div>
                            <div>
                            <img src="https://res.cloudinary.com/rajaramanikanta/image/upload/v1698944244/r9kbwbjafwajsn8bvl4t.png" className='card-image' alt="img" />
                            </div>
                       

                       
                       
                    </div>
                    <div className='content-container'>
                        <div className='contents-container'>
                            <div className='content-card1'>
                                <h1 className='content-head'>300</h1>
                                <p className='content-desc'>Creators</p>
                            </div>
                            <div className='content-card1'>
                                <h1 className='content-head'>14.4K</h1>
                                <p className='content-desc'>Users</p>
                            </div>
                            <div className='content-card1'>
                                <h1 className='content-head'>9.11k</h1>
                                <p className='content-desc'>Session</p>
                            </div>
                        </div>

                        <div className='content-card2'>
                            <h1 className='content-desc'>Explore the marketplace </h1>
                            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
                                <rect width="64" height="64" rx="32" fill="#FFB84C" />
                                <path d="M26 20L38 32L26 44" stroke="#2B2730" stroke-width="2" stroke-linecap="round" />
                            </svg>
                        </div>

                    </div>
                </div>
            </div>
        </>

    )

    render() {
        return (
            <div>
                <Navbar />
                {this.renderExplorePage()} 
                <Company/> 
                <Footer/>
            </div>
        )
    }
}


export default Home