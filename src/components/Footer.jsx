import mail_icon from "../assets/mail_icon.png";
import mail_icon_dark from "../assets/mail_icon_dark.png";

const Footer = () => {
  return (
    <div>
      <div className="mx-auto w-fit">
        {/* <img src={logo} alt="" className="w-36 mx-auto mb-2 dark:hidden" />
        <img
          src={logo_dark}
          alt=""
          className="w-36 mx-auto mb-2 hidden dark:block"
        /> */}
        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <img src={mail_icon} alt="" className="w-6 dark:hidden" />
            <img
              src={mail_icon_dark}
              alt=""
              className="w-6 hidden dark:block"
            />
            maevatchelsy@gmail.com
          </div>
          <div className="flex items-center gap-2">
            <img src={mail_icon} alt="" className="w-6 dark:hidden" />
            <img
              src={mail_icon_dark}
              alt=""
              className="w-6 hidden dark:block"
            />
            (470) 301-3518
          </div>
        </div>
      </div>
      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>© 2024 Maeva Tsane. All rights reserved.</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a target="_blank" href="https://www.linkedin.com/in/maeva-tsane/">
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
