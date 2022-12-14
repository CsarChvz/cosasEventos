import { Link } from "@remix-run/react";
import React, { useState } from "react";
type Props = {};

const SideTable = (props: Props) => {
  const randomColor = () =>
    `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  return (
    <>
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle modal-open">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Congratulations random Internet user!
          </h3>
          <p className="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <div className="modal-action">
            <label htmlFor="my-modal-6" className="btn">
              Yay!
            </label>
            <Link to={"/calendar"}>
              <label htmlFor="my-modal-6" className="btn">
                Cancel!
              </label>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default SideTable;
