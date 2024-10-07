import profile_img from "../assets/profile_pic.png";
import right_arrow_white from "../assets/right-arrow-white.png";
import download_icon from "../assets/download-icon.png";

const Header = () => {
  const resumeURL =
    "https://drive.google.com/file/d/1c2SEwpCBGlkfswf-ZOErsML_5pFb7ujS/view?usp=drive_link";

  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <img src={profile_img} alt="" className="rounded-full w-32" />
      <div>
        <span>MAËVA</span>
      </div>
      <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo">
        Hi! I am Maeva Tsane{" "}
        <img src="./assets/hand-icon.png" alt="" className="w-6" />
      </h3>
      <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo">
        Electrical Engineer based at Atlanta, GA
      </h1>
      <p className="max-w-2xl mx-auto font-Ovo">
        I'm a passionate Electrical Engineering student at Kennesaw State
        University, dedicated to bridging the gap between imagination and
        innovation. My skills encompass a diverse range, from Python programming
        for efficient and versatile solutions to circuit design that brings
        ideas to life.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <a
          href="#contact"
          className="px-10 py-3 border rounded-full bg-gradient-to-r from-[#b820e6] to-[#da7d20] text-white flex items-center gap-2 dark:border-transparent"
        >
          contact me <img src={right_arrow_white} alt="" className="w-4" />
        </a>

        <a
          href={resumeURL}
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black"
        >
          my resume <img src={download_icon} alt="" className="w-4" />
        </a>
      </div>
    </div>
  );
};

export default Header;
