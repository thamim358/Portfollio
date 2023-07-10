import React, { useEffect} from "react";
import "../Header/Header.scss";
import WOW from "wow.js"


function Footer() {
    useEffect(() => {
        const wow = new WOW();
        wow.init();
      }, []);
  return (
    <>
 <footer class="dashboard  px-10 mt-5 py-4 p-5">
        <div class="container mx-auto text-center">
          <div className="text-blue-600 text-3xl lg:text-2xl font-sans font-extrabold wow slideInDown ">
          &copy; 2023 Thamim Ansari. All rights reserved.
          </div>
          <p class="text-white text-sm font-sans font-base  wow slideInDown mt-3">
              Frontend Web Developer | HTML | CSS | JavaScript |Tailwind css
          </p>
          <p class="text-white text-sm font-sans font-sm   wow slideInDown mt-3">
        Available for freelance opportunities. Contact me for collaboration.
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
