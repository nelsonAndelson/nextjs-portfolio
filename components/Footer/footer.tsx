import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

/*--------------------
* Footer Section
----------------------*/
function Footer() {
  return (
    <footer className="footer bg-slate-900 border-t border-white border-opacity-10 py-4">
      <div className="container">
        <div className="grid grid-cols-12">
          <div className="col-span-12 md:col-span-6 flex pb-3 md:pb-0">
            <div className=" justify-center md:justify-start w-full hidden">
              <Link
                className="text-white text-opacity-90 hover:text-orange-600 mr-5 text-[16px]"
                href="#"
              >
                <FaFacebook />
              </Link>
              <Link
                className="text-white text-opacity-90 hover:text-orange-600 mr-5 text-[16px]"
                href="#"
              >
                <FaTwitter />
              </Link>
              <Link
                className="text-white text-opacity-90 hover:text-orange-600 mr-5 text-[16px]"
                href="#"
              >
                <FaInstagram />
              </Link>
              <Link
                className="text-white text-opacity-90 hover:text-orange-600 mr-5 text-[16px]"
                href="#"
              >
                <FaLinkedin />
              </Link>
              <Link
                className="text-white text-opacity-90 hover:text-orange-600 mr-5 text-[16px]"
                href="#"
              >
                <i className="fab fa-pinterest"></i>
              </Link>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 text-center md:text-right">
            <p className="m-0 text-white text-opacity-75">
              © {new Date().getFullYear()} copyright all right reserved by
              Nelson Baguma
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
