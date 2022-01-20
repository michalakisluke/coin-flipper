import React, { useEffect } from "react";
import * as mdc from "material-components-web";
import styled from "styled-components";

function NavbarMobile() {
  useEffect(() => {
    new mdc.select.MDCSelect(document.querySelector(".drop-down-filled-dis .mdc-select"));
  }, []);

  return (
    <NavbarMobile>
      <div className="widget-wrapper">
        <div className="drop-down-filled-dis">
          <div className="mdc-select   mdc-select--filled  demo-width-class" data-id="anima-widget">
            <div
              className="mdc-select__anchor custom-enhanced-select-width"
              role="button"
              aria-haspopup="listbox"
              aria-expanded="false"
            >
              <span className="mdc-select__ripple"></span>{" "}
              <span id="demo-label" className="mdc-floating-label">
                Menu
              </span>
              <span className="mdc-select__selected-text-container">
                <span id="demo-selected-text" className="mdc-select__selected-text"></span>
              </span>
              <span className="mdc-select__dropdown-icon">
                <span className="mdc-select__dropdown-icon-inactive material-icons">arrow_drop_down</span>
                <span className="mdc-select__dropdown-icon-active material-icons">arrow_drop_up</span>
              </span>
              <span className="mdc-line-ripple"></span>
            </div>
            <div className="mdc-select__menu mdc-menu mdc-menu-surface mdc-menu-surface--fullwidth">
              <ul className="mdc-list" id="select_dropdown" role="listbox" aria-label="listbox">
                <li className="mdc-list-item " data-value="Home" role="option">
                  <span className="mdc-list-item__ripple"></span> <span className="mdc-list-item__text">Home</span>
                </li>
                <li className="mdc-list-item " data-value="About" role="option">
                  <span className="mdc-list-item__ripple"></span> <span className="mdc-list-item__text">About</span>
                </li>
                <li className="mdc-list-item " data-value="Join us" role="option">
                  <span className="mdc-list-item__ripple"></span> <span className="mdc-list-item__text">Join us</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </NavbarMobile>
  );
}

const NavbarMobile = styled.div`
  width: 428px;
  height: 75px;
  display: flex;
  background-color: var(--white);
`;

export default NavbarMobile;
