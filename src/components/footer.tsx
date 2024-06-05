import '../style/footer.css'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

function Footer() {
    return (
        <>
            <footer>
                <div>
                    <h1 className='foo-logo'>QUITE LIGHT</h1>
                    <p className='follow-txt'>Follow us on:</p>
                    <div className='icons-div'>
                        <FaFacebook className='social-icons'/> 
                        <FaTwitter className='social-icons'/>
                        <FaYoutube className='social-icons'/>
                        <FaInstagram className='social-icons'/>
                        <FaLinkedinIn className='social-icons'/>
                    </div>
                    <div className='detail-cont'>
                        <p>Kansai Nerolac Paints Limited</p>
                        <p>28th Floor, A - Wing, Marathon Futurex,</p>
                        <p>Mafatlal Mills Compound, N M Joshi Marg,</p>
                        <p>Area: Lower Parel</p>
                        <p>City: Mumbai</p>
                        <p>Pin: 400 013</p>
                        <p>For queries: 1800 209 2092</p>
                        <p>Nxtgen service enquiries: 1800 266 5566</p>
                        <p>Waterproofing solutions: 1800 210 1214</p>
                        <p>For Consumer queries/complaints,</p>
                        <p>email to - complaints@nerolac.com</p>
                    </div>
                </div>
                <div className='foo-container'>
                <div>
                    <p className='active-li'>Paints & Products</p>
                    <li>Interior Wall Paints</li>
                    <li>Exterior Wall Paints</li>
                    <li>Wood Coatings</li>
                    <li>Metal Enamel Paints</li>
                    <li>Paint Ancillary</li>
                    <li>Adhesives</li>
                    <li>Waterproofing</li>
                    <li>Nxtgen Painting Services</li>
                </div>

                <div>
                    <p className='active-li'>Colours</p>
                    <li>Colour Catalogue</li>
                    <li>Common Colours</li>
                    <li>Healthy Home Paints</li>
                    <li>Colour Palette</li>
                    <li>Red Colour</li>
                    <li>Orange Colour</li>
                    <li>Yellow Colour</li>
                    <li>Green Colour</li>
                    <li>Blue Colour</li>
                    <li>Violet Colour</li>
                </div>

                <div>
                    <p className='active-li'>Neutral Colour</p>
                    <li>Beige Colour</li>
                    <li>White Colour</li>
                    <li>Pink Colour</li>
                    <li>Purple Colour</li>
                    <li>Lilac Colour</li>
                    <li>Peach Colour</li>
                    <li>Cream Colour</li>
                    <li>Grey Colour</li>
                </div>

                <div>
                    <p className='active-li'>Inspiration</p>
                    <li>Interior Guides</li>
                    <li>Exterior Guides</li>
                    <li>Blog</li>
                    <li>Design Trends</li>
                    <li>Ideas gallery</li>
                </div>

                <div >
                    <p className='active-li'>Tools</p>
                    <li>Nerolac Knows</li>
                    <li>Paint Budget Calculator</li>
                    <li>Colour Visualiser</li>
                    <li>Colour Picker</li>
                </div>

                <div>
                    <p className='active-li'>Get to know us</p>
                    <li>About Us</li>
                    <li>Careers</li>
                    <li>Investors</li>
                    <li>Get in Touch</li>
                    <li>Store Locator</li>
                    <li>Sustainability</li>
                </div>
                </div>
               
            </footer>
           
        </>
    )
}

export default Footer