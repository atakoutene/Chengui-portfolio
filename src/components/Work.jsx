const Work = () => {
  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">My portfolio</h4>
      <h2 className="text-center text-5xl font-Ovo">My latest work</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        Welcome to my electrical engineering portfolio! Explore a collection of
        projects showcasing my expertise.
      </p>

      <div className="grid grid-cols-1 my-10 gap-5 dark:text-black">
        {/* <div className="aspect-square bg-[url('./assets/work-1.png')] bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"> */}
        <div className="bg-white rounded-md py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
          <div>
            <h2 className="font-semibold">
              Design of a Water Leakage Detection System ( Senior Capstone)
            </h2>
            <ul className="text-sm text-gray-700">
              <li>
                Collaborated with a cross functional team to design and
                implement a smart water leakage detection system utilizing flow
                and pressure sensors to continuously monitor flow rates and
                pressure.
              </li>
              <li>
                Integrated a real-time data processing algorithm using an
                Arduino microcontroller, enabling the system to differentiate
                between normal water usage and leakage.
              </li>
              <li>
                Deployed capacitive moisture sensors at key locations to
                pinpoint the exact position of leaks, achieving a 90% accuracy
                rate in determining leak locations.
              </li>
              <li>
                Developed a wireless communication interface (BLE/Wi-Fi) that
                instantly alerts users via a smartphone app upon detecting a
                leak.
              </li>
              <li>
                Integrated an automated water shutoff system using a solenoid
                valve, which can shut down the main pump upon user confirmation.
              </li>
            </ul>
          </div>
          {/* <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
              <img src={send_icon} alt="" className="w-5" />
            </div> */}
        </div>
        {/* </div> */}
        {/* <div className="aspect-square bg-[url('./assets/work-2.png')] bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"> */}
        <div className="bg-white rounded-md py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
          <div>
            <h2 className="font-semibold">Design of a 12V Power Inverter</h2>
            <ul className="text-sm text-gray-700">
              <li>
                Designed a high-efficiency 12V DC to 240V AC power inverter
                using IGBTs (Insulated Gate Bipolar Transistors) for fast
                switching, achieving 95% conversion efficiency.
              </li>
              <li>
                Reduced Total Harmonic Distortion (THD) by employing Pulse Width
                Modulation (PWM) with LC filters, ensuring that the output
                waveform is clean and reliable.
              </li>
              <li>
                Designed a circuit in multisim, breadboarded and debugged the
                circuit in an electronic lab, and developed a custom PCB layout
                using Altium Designer.
              </li>
            </ul>
          </div>
          {/* <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
            <img src={send_icon} alt="" className="w-5" />
          </div> */}
        </div>
        {/*         </div>
         */}{" "}
        {/* <div className="aspect-square bg-[url('./assets/work-3.png')] bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group"> */}
        <div className="bg-white rounded-md py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
          <div>
            <h2 className="font-semibold">Design of a Student Counter</h2>
            <ul className="text-sm text-gray-700">
              <li>
                Designed and implemented a student counting system using
                infrared (IR) sensors and ultrasonic sensors.
              </li>
              <li>
                Developed the sensor interface and processing algorithms on an
                Arduino microcontroller, ensuring real-time data collection and
                processing.
              </li>
              <li>
                Designed a custom PCB layout to integrate the microcontroller,
                sensors, and communication modules.
              </li>
              <li>
                Implemented an LCD display and LED indicators to show real-time
                counts of students in the room, ensuring that data was
                immediately visible to users.
              </li>
            </ul>
          </div>
          {/* <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
            <img src={send_icon} alt="" className="w-5" />
          </div> */}
        </div>
        {/* </div> */}
      </div>
      {/* <a
        href="#"
        className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500
    dark:text-white dark:border-white dark:hover:bg-darkHover"
      >
        Show more
        <img src={right_arrow_blod} alt="" className="w-4 dark:hidden" />
        <img
          src={right_arrow_blod_dark}
          alt=""
          className="w-4 hidden dark:block"
        />
      </a> */}
    </div>
  );
};

export default Work;
