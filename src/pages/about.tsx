const About = () => {
  return (
    <div className="info_body">
      <div className="flex flex-col">
        <h2 className="font-bold text-3xl pb-3">About Me</h2>
        <div className="">
          <div className="w-20 h-1 bg-black mb-5"></div>
        </div>
      </div>

      <div className=" w-full grid lg:grid-cols-2 md:grid-cols-1 gap-10">
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl">
            Web <span className="font-bold text-purple-800">Developer</span>
            <br />
            <span className="font-semibold">Based In Nepal</span>
          </h2>

          <p>
            I am a dedicated and ambitious individual, currently pursuing a
            Bachelor of Information Technology (BIT Hons) degree. With a strong
            passion for web development, I aspire to become a proficient web
            developer in the future. My academic journey in BIT Hons is a
            testament to my commitment to gaining the knowledge and skills
            necessary to excel in the ever-evolving world of web development.
            With a thirst for learning and a keen eye for design, I am eager to
            contribute innovative solutions to the web development field and
            make a significant impact in the digital landscape.
          </p>
        </div>

        <div className="w-full h-full grid lg:grid-cols-2 md:grid-cols-1 gap-4">
          <div className="flex flex-col">
            <h2 className="font-bold text-3xl pb-3">Languages</h2>
            <div className="">
              <div className="w-20 h-1 bg-yellow-500 mb-2"></div>
            </div>
            <div>
              <ul className="flex flex-col gap-1">
                <li className="flex gap-2 items-center">
                  <i className="fa-solid fa-check"></i>English
                </li>
                <li className="flex gap-2 items-center">
                  <i className="fa-solid fa-check"></i>Nepali
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col">
            <h2 className="font-bold text-3xl pb-3">Nationality</h2>
            <div className="">
              <div className="w-20 h-1 bg-yellow-500 mb-2"></div>
            </div>
            <div>
              <ul className="flex flex-col gap-1">
                <li className="flex gap-2 items-center">
                  <i className="fa-solid fa-check"></i>Nepali
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col">
            <h2 className="font-bold text-3xl pb-3">Hobbies</h2>
            <div className="">
              <div className="w-20 h-1 bg-yellow-500 mb-2"></div>
            </div>
            <div>
              <ul className="flex flex-col gap-1">
                <li className="flex gap-2 items-center">
                  <i className="fa-solid fa-check"></i>Coding
                </li>
                <li className="flex gap-2 items-center">
                  <i className="fa-solid fa-check"></i>Designing
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
