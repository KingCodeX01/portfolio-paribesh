const Contact = () => {
  return (
    <div className="info_body bg-white">
      <div className="flex flex-col">
        <h2 className="font-bold text-3xl pb-3">Contact</h2>
        <div className="w-14 h-1 bg-black mb-5"></div>
        <div>
          {`Have a project in mind? Let’s discuss how I can help you bring your ideas to life!`}
        </div>
      </div>

      <div className="border border-black bg-white flex items-center justify-between flex-wrap mt-4 p-2 rounded-lg">
        <div className="flex items-center justify-center p-4 gap-2">
          <div className="border border-black rounded-full pb-2 pt-2 pl-4 pr-4">
            <i className="fa-solid fa-location-dot text-3xl"></i>
          </div>
          <div>
            <h2>Address</h2>
            <p>Kathmandu,Nepal</p>
          </div>
        </div>

        <div className="flex items-center justify-center p-4 gap-2">
          <div className="border border-black rounded-full pb-2 pt-2 pl-4 pr-4">
            <i className="fa-solid fa-phone"></i>
          </div>
          <div>
            <h2>Call Now</h2>
            <p>9748362667</p>
          </div>
        </div>

        <div className="flex items-center justify-center p-4 gap-2">
          <div className="border border-black rounded-full pb-2 pt-2 pl-4 pr-4">
            <i className="fa-solid fa-envelope"></i>
          </div>
          <div>
            <h2>Email Now</h2>
            <p>paribesh.officialwork@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
