import React from "react";
import pdlogo from "../assets/devs.png";
import "../styles/About.css";
import { Parallax } from "react-parallax";
import provide from "../assets/pdprovide.png";
import { AboutList } from "../helpers/AboutList";
import AboutItem from "../components/AboutItem";

function About() {
  return (
    <div className="About">
      <Parallax strength={600} bgImage={pdlogo}>
        <div className="content">
          <div className="text-content">About Us</div>
        </div>
      </Parallax>
      <br />
      <br />
      <p className="paragraph-content">
        We are a group of BSIT students from Saint Mary's University in
        Bayombong Nueva Vizcaya, Our group developed PaDala, a progressive
        web-app that can be installed directly from the browser. PaDala is an
        erranding services website that provides different services to the
        consumers like Food or Groceries, Deliveries, Paying Bills and the
        website also offers custom errand services that gives the consumers
        different options on what kind of errand services that the consumers
        desire.
      </p>

      <br />
      <br />
      <div className="mvDiv">
        <h2 style={{ textAlign: "center", fontSize: "50px" }}>
          Mission & Vision
        </h2>
        <div className="mv">
          <div className="row1">
            <div className="column1">
              <h3 style={{ fontSize: "40px" }}>Mission</h3>
              <div className="mvParag">
                <p>
                  The PaDala Group is commited to provide the best errand
                  services that the consumers desire and provide them the
                  convenience that the consumer need in their busy lives. We
                  will continuously challenge ourselves to exceed our consumers’
                  expectations by providing the best solutions to their needs.{" "}
                </p>
              </div>
            </div>
            <div className="column1">
              <h3 style={{ fontSize: "40px" }}>Vision</h3>
              <div className="mvParag">
                <p>
                  We aspire to be the leading errand services app that provides
                  high quality services to the consumers.
                </p>
              </div>
            </div>
          </div>
        </div>

        <br />

        <Parallax strength={400} blur={{ min: -10, max: 15 }} bgImage={provide}>
          <div className="content">
            <div className="text-content2">What we Provide</div>
            <div className="paragraph-content"></div>
          </div>
        </Parallax>
      </div>
      <br />
      <br />
      <br />

      <div className="aboutList">
        {AboutList.map((aboutItem, key) => {
          return (
            <AboutItem
              key={key}
              image={aboutItem.image}
              name={aboutItem.name}
              desc={aboutItem.desc}
            />
          );
        })}
      </div>
    </div>
  );
}

export default About;
