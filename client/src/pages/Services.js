import React from "react";
import { ServiceList } from "../helpers/ServiceList";
import ServiceItem from "../components/ServiceItem";
import Popup from "../components/Popup";
import "../styles/Services.css";
import { useState } from "react";
import PopupForm from "../components/PopupForm";
import "../styles/PopupForm.css";
import PopupDeliv from "../components/PopupDeliv";
import PopupErrand from "../components/PopupErrand";
import PopupBill from "../components/PopupBill";

function Services() {
  const auth = localStorage.getItem("user");

  const [buttonPopup, setButtonPopup] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  const [openModal3, setOpenModal3] = useState(false);
  const [openModal4, setOpenModal4] = useState(false);

  return (
    <div>
      {auth ? (
        <div className="services">
          <div className="serviceTitle">
            <h1>Services</h1>
          </div>

          <div className="serviceList">
            {ServiceList.slice(0, 1).map((serviceItem, key) => {
              return (
                <button
                  className="no-padding"
                  onClick={() => [
                    setOpenModal(true),
                    setOpenModal2(false),
                    setOpenModal3(false),
                    setOpenModal4(false),
                  ]}
                >
                  <ServiceItem
                    key={key}
                    image={serviceItem.image}
                    name={serviceItem.name}
                  />
                </button>
              );
            })}

            {ServiceList.slice(1, 2).map((serviceItem, key) => {
              return (
                <button
                  className="no-padding"
                  onClick={() => [
                    setOpenModal2(true),
                    setOpenModal(false),
                    setOpenModal3(false),
                    setOpenModal4(false),
                  ]}
                >
                  <ServiceItem
                    key={key}
                    image={serviceItem.image}
                    name={serviceItem.name}
                  />
                </button>
              );
            })}

            {ServiceList.slice(2, 3).map((serviceItem, key) => {
              return (
                <button
                  className="no-padding"
                  onClick={() => [
                    setOpenModal3(true),
                    setOpenModal2(false),
                    setOpenModal(false),
                    setOpenModal4(false),
                  ]}
                >
                  <ServiceItem
                    key={key}
                    image={serviceItem.image}
                    name={serviceItem.name}
                  />
                </button>
              );
            })}

            {ServiceList.slice(3, 4).map((serviceItem, key) => {
              return (
                <button
                  className="no-padding"
                  onClick={() => [
                    setOpenModal4(true),
                    setOpenModal2(false),
                    setOpenModal(false),
                    setOpenModal3(false),
                  ]}
                >
                  <ServiceItem
                    key={key}
                    image={serviceItem.image}
                    name={serviceItem.name}
                  />
                </button>
              );
            })}
          </div>

          <div>
            <PopupForm open={openModal} onClose={() => setOpenModal(false)} />
            <PopupDeliv
              open={openModal2}
              onClose={() => setOpenModal2(false)}
            />
            <PopupErrand
              open={openModal3}
              onClose={() => setOpenModal3(false)}
            />
            <PopupBill open={openModal4} onClose={() => setOpenModal4(false)} />
          </div>
        </div>
      ) : (
        //=================================

        //============================
        <div className="services">
          <div className="serviceTitle">
            <h1>Services</h1>
          </div>

          <div className="serviceList">
            {ServiceList.map((serviceItem, key) => {
              return (
                <button
                  className="no-padding"
                  onClick={() => setButtonPopup(true)}
                >
                  <ServiceItem
                    key={key}
                    image={serviceItem.image}
                    name={serviceItem.name}
                  />
                </button>
              );
            })}
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
              <h3>Sorry</h3>
              <p>You need to login first</p>
            </Popup>
          </div>
        </div>
        //---------------------------logged in-----------------------------------------//
      )}
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default Services;
