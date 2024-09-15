import React from "react";
import VerifiedIcon from "@mui/icons-material/Verified";

const Exprince = () => {
  return (
    <section id="experience" className="text-center py-8 bg-white">
      <h5 className="text-lg text-black">What Skills I Have</h5>
      <h4 className="text-2xl font-bold text-gray-800 mb-8">My Experience</h4>

      <div className="flex flex-wrap justify-center gap-8">
        {/* Frontend Development */}
        <div className="flex flex-col items-center gap-4 bg-white p-6 rounded-lg shadow-lg w-full md:w-1/2 lg:w-1/3 hover:bg-gradient-to-r from-[rgb(54,122,159)] to-[rgb(25,37,46)] hover:text-white transition-all duration-300">
          <h3 className="text-xl font-semibold">Frontend Development</h3>
          <div className="flex flex-col items-start gap-4">
            <div className="flex items-center">
              <VerifiedIcon className="text-blue-500" />
              <div className="ml-2">
                <h3 className="text-lg">React</h3>
                <p>Experienced</p>
              </div>
            </div>

            <div className="flex items-center">
              <VerifiedIcon className="text-blue-500" />
              <div className="ml-2">
                <h3 className="text-lg">HTML</h3>
                <p>Experienced</p>
              </div>
            </div>

            <div className="flex items-center">
              <VerifiedIcon className="text-blue-500" />
              <div className="ml-2">
                <h3 className="text-lg">JavaScript</h3>
                <p>Experienced</p>
              </div>
            </div>

            <div className="flex items-center">
              <VerifiedIcon className="text-blue-500" />
              <div className="ml-2">
                <h3 className="text-lg">CSS3</h3>
                <p>Experienced</p>
              </div>
            </div>

            <div className="flex items-center">
              <VerifiedIcon className="text-blue-500" />
              <div className="ml-2">
                <h3 className="text-lg">Tailwind CSS</h3>
                <p>Experienced</p>
              </div>
            </div>

            <div className="flex items-center">
              <VerifiedIcon className="text-blue-500" />
              <div className="ml-2">
                <h3 className="text-lg">MUI</h3>
                <p>Experienced</p>
              </div>
            </div>
          </div>
        </div>

        {/* Backend Development */}
        <div className="flex flex-col items-center gap-4 bg-white p-6 rounded-lg shadow-lg w-full md:w-1/2 lg:w-1/3 hover:bg-gradient-to-r from-[rgb(54,122,159)] to-[rgb(25,37,46)] hover:text-white transition-all duration-300">
          <h3 className="text-xl font-semibold">Backend Development</h3>
          <div className="flex flex-col items-start gap-4">
            <div className="flex items-center">
              <VerifiedIcon className="text-blue-500" />
              <div className="ml-2">
                <h3 className="text-lg">Node.js</h3>
                <p>Experienced</p>
              </div>
            </div>

            <div className="flex items-center">
              <VerifiedIcon className="text-blue-500" />
              <div className="ml-2">
                <h3 className="text-lg">MongoDB</h3>
                <p>Experienced</p>
              </div>
            </div>

            <div className="flex items-center">
              <VerifiedIcon className="text-blue-500" />
              <div className="ml-2">
                <h3 className="text-lg">Express.js</h3>
                <p>Experienced</p>
              </div>
            </div>

            <div className="flex items-center">
              <VerifiedIcon className="text-blue-500" />
              <div className="ml-2">
                <h3 className="text-lg">NoSQL</h3>
                <p>Experienced</p>
              </div>
            </div>

            <div className="flex items-center">
              <VerifiedIcon className="text-blue-500" />
              <div className="ml-2">
                <h3 className="text-lg">API</h3>
                <p>Experienced</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Exprince;
