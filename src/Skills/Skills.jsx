import React, { useEffect } from "react";
import "../Header/Header.scss";
import WOW from "wow.js";
import { Progress } from "antd";

function Skills() {
  useEffect(() => {
    const wow = new WOW();
    wow.init();
  }, []);

  return (
    <>
 <div className="section" id="skills">
  <div className="py-10 px-5 mx-12">
    <div className="Name uppercase text-4xl text-center text-blue-600 mt-5 pt-5 font-bold wow rotateIn">
      Skills
    </div>

    <div className="flex mt-10 justify-center wow slideInUp">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-14">
        <div className="p-3">
          <Progress type="circle" percent={70} size={160} trailColor="#3C3D58" />
          <div className="text-lg text-center text-white uppercase font-semibold mt-3">
            React js
          </div>
        </div>
        <div className="p-3">
          <Progress type="circle" percent={89} size={160} trailColor="#3C3D58" />
          <div className="text-lg text-center text-white uppercase font-semibold mt-3">
            HTML + CSS
          </div>
        </div>
        <div className="p-3">
          <Progress type="circle" percent={68} size={160} trailColor="#3C3D58" />
          <div className="text-lg text-center text-white uppercase font-semibold mt-3">
            BOOTSTRAP
          </div>
        </div>
        <div className="p-3">
          <Progress type="circle" percent={72} size={160} trailColor="#3C3D58" />
          <div className="text-lg text-center text-white uppercase font-semibold mt-3">
            TAILWIND CSS
          </div>
        </div>
      </div>
    </div>
    <div className="flex mt-10 justify-center wow slideInUp">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-14">
        <div className="p-3">
          <Progress type="circle" percent={72} size={160} trailColor="#3C3D58" />
          <div className="text-lg text-center text-white uppercase font-semibold mt-3">
            sass
          </div>
        </div>
        <div className="p-3">
          <Progress type="circle" percent={75} size={160} trailColor="#3C3D58" />
          <div className="text-lg text-center text-white uppercase font-semibold mt-3">
            JAVASCRIPT
          </div>
        </div>
        <div className="p-3">
          <Progress type="circle" percent={90} size={160} trailColor="#3C3D58" />
          <div className="text-lg text-center text-white uppercase font-semibold mt-3">
            GIT
          </div>
        </div>
        <div className="p-3">
          <Progress type="circle" percent={30} size={160} trailColor="#3C3D58" />
          <div className="text-lg text-center text-white uppercase font-semibold mt-3">
            jquery
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  );
}

export default Skills;
