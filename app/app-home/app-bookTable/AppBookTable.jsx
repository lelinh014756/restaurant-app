import React from "react";
import Logo from "../../../public/images/svg/Logo";
import IconSpoonRow from "../../../public/icons/svg/IconSpoonRow";
import ControlText from "../../app-controls/app-control-input/ControlText";
import ControlButton from "../../app-controls/app-control-button/ControlButton";

const AppBookTable = () => {
  return (
    <div className="app-bookTable">
      <div className="app-bookTable-logo">
        <Logo />
      </div>
      <form id="app-bookTable-form" className="app-bookTable-form grid-content">
        <h5>Reservations</h5>
        <IconSpoonRow />
        <h1>Book A Table</h1>
        <div className="app-bookTable-form-group">
          <ControlText placeholder={"1 person"} />
          <ControlText placeholder={"12/05/2021"} />
          <ControlText placeholder={"11:00 AM"} />
        </div>
          <ControlButton className={'btn-primary'} >
              Book Now
          </ControlButton>
      </form>
    </div>
  );
};

export default AppBookTable;
