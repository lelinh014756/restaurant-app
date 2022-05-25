import React from "react";
import TextG from "../../../public/images/svg/TextG";
import Image from "next/image";
import IconSpoonRow from "../../../public/icons/svg/IconSpoonRow";
import ControlButton from "../../app-controls/app-control-button/ControlButton";

const AppKnife = () => {
  return (
    <div className="app-knife">
      <div className="app-knife-subBackground">
        <TextG />
      </div>
      <div className="app-knife-wrapper grid-content">
        <div className="app-knife-item">
          <h2>About Us</h2>
          <svg
            width="40"
            height="9"
            viewBox="0 0 40 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.49841 0C2.91507 0 0 2.01871 0 4.50005C0 6.98139 2.91507 9 6.49841 9C9.8878 9 12.6779 7.19363 12.97 4.8982H17.6471V5.8448L40 5.8448V3.15554L17.647 3.15554V4.10202H12.9699C12.6777 1.80648 9.8878 0 6.49841 0ZM18.5102 3.95161L39.1367 3.95161V5.04839H18.5102V3.95161ZM12.1338 4.50005C12.1338 6.54222 9.60563 8.2036 6.49829 8.2036C3.39095 8.2036 0.862811 6.54222 0.862811 4.50005C0.862811 2.45778 3.39095 0.796295 6.49829 0.796295C9.60563 0.796295 12.1338 2.45778 12.1338 4.50005Z"
              fill="#DCCA87"
            />
          </svg>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
            pharetra adipiscing ultrices vulputate posuere tristique. In sed
            odio nec aliquet eu proin mauris et.
          </p>
          <ControlButton className={"btn-primary"}>Know More</ControlButton>
        </div>
        <div className="app-knife-image">
          <Image
            src="/images/knife.png"
            alt=""
            width={84}
            height={703}
            objectFit="cover"
          />
        </div>
        <div className="app-knife-item">
          <h2>Our History</h2>
          <IconSpoonRow />
          <p>
            Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat.
            Risus placerat morbi volutpat habitasse interdum mi aliquam In sed
            odio nec aliquet.
          </p>
          <ControlButton className={"btn-primary"}>Know More</ControlButton>
        </div>
      </div>
    </div>
  );
};

export default AppKnife;
