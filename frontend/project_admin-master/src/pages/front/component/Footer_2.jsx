import React from "react";
import "./Footer_2.css"
import {FaFacebookSquare, FaForumbee, FaTwitter} from "react-icons/fa";
import {BsFillEmojiSmileFill} from "react-icons/bs";

export default function Footer_2(){
    return(
        <footer className="frontFooter_2">

            <div className="frontFooter_2Social">
                <a href="https://github.com/khd6194"><FaForumbee /></a>
                <a href="https://github.com/hideonbush3"><BsFillEmojiSmileFill /></a>
                <a href="#"><FaTwitter /></a>
                <a href="#"><FaFacebookSquare /></a>
            </div>

            <ul className="frontFooter_2List">
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">Services</a>
                </li>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">Terms</a>
                </li>
                <li>
                    <a href="#">Privacy Policy</a>
                </li>
            </ul>
            {/*<div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div><div>Icons made by <a href="https://www.flaticon.com/authors/skyclick" title="Skyclick">Skyclick</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div><div>Icons made by <a href="https://www.flaticon.com/authors/ultimatearm" title="ultimatearm">ultimatearm</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div><div>Icons made by <a href="https://www.flaticon.com/authors/amonrat-rungreangfangsai" title="amonrat rungreangfangsai">amonrat rungreangfangsai</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div><div>Icons made by <a href="https://www.flaticon.com/authors/srip" title="srip">srip</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div><div>Icons made by <a href="https://www.flaticon.com/authors/amethyst-prime" title="Amethyst prime">Amethyst prime</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div><div>Icons made by <a href="https://www.flaticon.com/authors/sonnycandra" title="sonnycandra">sonnycandra</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div><div>Icons made by <a href="https://www.flaticon.com/authors/amoghdesign" title="amoghdesign">amoghdesign</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>*/}
            <p className="frontFooter_2Copyright">
                TJ Coders @ 2023
            </p>
        </footer>
    );
}