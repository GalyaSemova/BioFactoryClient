import StaticNavBar from "../../components/staticNavBar/StaticNavBar";
import Footer from "../../components/footer/Footer";
import classes from "./AboutUs.module.css";

/* SOCIAL MEDIA && CONTACT ICONS */
import { FaSquareFacebook, 
         FaTwitter, 
         FaInstagram } 
         from 'react-icons/fa6';


function AboutUs() {

    return (
        <div className={`${classes.container} ${classes.col_fd_12} ${classes.background_color} ${classes.p0}`}>
            <header>
                <StaticNavBar/>
            </header>
            <main>
              <section className={`${classes.section} ${classes.col_fd_12} ${classes.big_margin_top}`}>
                <div className={`${classes.section} ${classes.col_fd_12} ${classes.big_margin_top}`}>
                    <div className={`${classes.content_section}`}>
                    <div className={`${classes.title}`}>
                        <h1>ABOUT US</h1>
                    </div>
                    <div className={`${classes.content}`}>
                        <h3>
                          "Embrace the melody of simplicity, let nature be your guide."
                        </h3>
                        <p>
                          Hello, health enthusiasts and nature lovers! 
                          I'm Galya, the creator of this wellness haven. 
                          Embracing a healthy lifestyle doesn't have to be dull – it can be 
                          an exciting journey filled with discoveries and joy. 
                          Join me as we navigate through the wonders of well-being, 
                          explore the beauty of nature, and find inspiration to live our healthiest, happiest lives.
                        </p>
                        {/* <div className={`${classes.button}`}>
                          <Button text="Read More" />
                        </div> */}
                    </div>
                    <div className={`${classes.social}`}>
                        <span className={`${classes.iconedText} ${classes.display_block}}`}>
                        <FaSquareFacebook color="#008000" />
                        </span>
                        <span className={`${classes.iconedText} ${classes.display_block}}`}>
                        <FaTwitter color="#008000" />
                        </span>
                        <span className={`${classes.iconedText} ${classes.display_block}}`}>
                        <FaInstagram color="#008000" />
                        </span>
                     </div>
                    </div>
                    <div className={`${classes.image_section}`}>
                    <img
                        src= {require("../../assets/me.jpg")}
                        alt="Our Team"
                        className="img-fluid"
                    />
                    </div>
                </div>
              </section>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>

    );
}

export default AboutUs;