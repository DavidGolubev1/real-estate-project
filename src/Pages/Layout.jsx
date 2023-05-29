
import { Outlet, Link } from 'react-router-dom';
import './Layout.css'

function Layout() {
    return (
        <div id='body'>
            <div id='the-page'>
                <div id='over-nav-bar'>
                    <img className='images-over-nav-bar' src="https://learn.roofstock.com/hs-fs/hubfs/iStock-157382018.jpg?width=2121&name=iStock-157382018.jpg" alt="" />
                    <img className='images-over-nav-bar' src="https://dvyvvujm9h0uq.cloudfront.net/com/articles/1523966977-realestatephotography-featured.jpg" alt="" />
                    <img className='images-over-nav-bar' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI6eTChZn_FNwTzoj9zz1PitwDvrvgqV9LYiwDo9EQOXuyQ__n5hV8fu7IJAJp7NS-ApY&usqp=CAU" alt="" />
                    <img className='images-over-nav-bar' src="https://www.bproperty.com/blog/wp-content/uploads/2021/04/house-1867187_1920.jpg" alt="" />
                </div>
                <div id='nav-bar'>
                    <div id='nav-bar-items'>
                        <div id='nav-bar-list'>
                            <div className='nav-bar-list-item'><Link className='linkers' to={"Home"}>Home</Link></div>
                            <div className='nav-bar-list-item'><Link className='linkers' to={"Products"}>Products</Link></div>
                            <div className='nav-bar-list-item'><Link className='linkers' to={"Contact"}>Contact-us</Link></div>
                            <div className='nav-bar-list-item'><Link className='linkers' to={"NotFound"}>Login</Link></div>
                        </div>
                    </div>
                    <div id='company-slogen'>
                        <h1 id='slogen'>Evergreen Estates</h1>
                    </div>
                    <div id='company-logo'>
                        <img id='logo-picture' src="./finel-logo-picture.png" alt="" />
                    </div>
                </div>
                <div id='empty-space' >
                    <Outlet />
                </div>
                <div id='footer-container'>
                    <div id='footer-inner-container'>
                        <div id='footer-services'>
                            <div className='service'><a className='linkers' href="https://i.scdn.co/image/ab6761610000e5eba3a7cba23d68a4e73c3b8155">Cookie manegment</a></div>
                            <div className='service'><a className='linkers' href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjB-YGVP2iUh2CBdWPP_vtQosWG187rfVJ2g&usqp=CAU">Privacy</a></div>
                            <div className='service'><a className='linkers' href="http://localhost:5175/Contact">Contact us</a></div>
                            <div className='service'><a className='linkers' href="">Login</a></div>
                        </div>

                        <div id='footer-social'>
                            <a className='social-link' href="https://he-il.facebook.com/"><img className='social-image' src="https://nikeecomproj.netlify.app/icons8-facebook-f-48.png" alt="FaceBook" /></a>
                            <a className='social-link' href="https://twitter.com/"><img className='social-image' src="https://nikeecomproj.netlify.app/icons8-twitter-50.png" alt="Twiter" /></a>
                            <a className='social-link' href="https://www.instagram.com/"><img className='social-image' src="https://nikeecomproj.netlify.app/icons8-instagram-48%20(1).png" alt="Instngram" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Layout;