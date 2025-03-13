const Skills = () => {
  const skillsData = [
    {
      title: "Web Development",
      description:
        "I love to design responsive, fast, and SEO-friendly websites that are perfectly aligned with your business goals, ensuring a seamless online presence and growth.",
      icon: "fa-solid fa-code",
    },
    {
      title: "UI/UX Design",
      description:
        "Creating intuitive and engaging user experiences with modern design principles to enhance usability and aesthetics.",
      icon: "fa-solid fa-paint-brush",
    },
    {
      title: "API Integration",
      description:
        "Seamlessly integrating third-party APIs to enhance functionality and ensure smooth communication between systems.",
      icon: "fa-solid fa-plug",
    },
    {
      title: "Digital Marketing",
      description:
        "Boosting your brand's online presence through effective digital marketing strategies including social media, PPC, and content marketing.",
      icon: "fa-solid fa-bullhorn",
    },
    {
      title: "SEO Optimization",
      description:
        "Improving search engine rankings through keyword optimization, content strategy, and technical SEO practices.",
      icon: "fa-solid fa-chart-line",
    },
  ];

  return (
    <div className="info_body bg-slate-400">
      <div className="flex flex-col">
        <h2 className="font-bold text-3xl pb-3">Skills</h2>
        <div className="w-14 h-1 bg-black mb-5"></div>
        <div>
          {`Empowering businesses with innovative technology solutions tailored for success.`}
        </div>
      </div>

      <div className="w-full h-auto mt-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className="relative w-full h-[317px] bg-red-600 rounded-xl group group-hover:shadow-xl"
          >
            <a
              href="/"
              className="absolute bottom-0 w-full h-full p-8 border bg-white border-black rounded-xl 
                flex flex-col items-start justify-evenly transition-all duration-300
                group-hover:-translate-y-2 group-hover:-rotate-2 group-hover:shadow-xl"
            >
              <div className="bg-[#5de0e6] rounded-full w-14 h-14 flex items-center justify-center">
                <i className={`${skill.icon} text-2xl text-white`}></i>
              </div>

              <div className="text-xl font-semibold">{skill.title}</div>
              <div className="text-gray-600">{skill.description}</div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
