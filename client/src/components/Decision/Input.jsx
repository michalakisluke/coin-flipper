import React, { useEffect } from "react";
import * as mdc from "material-components-web";
import styled from "styled-components";
import { CastoroNormalVulcan16px } from "../../styledMixins";
import "./style.css";

function Input() {
  useEffect(() => {
    new mdc.textField.MDCTextField(document.querySelector(".text-field-filled-di .mdc-text-field"));
    new mdc.textField.MDCTextField(document.querySelector(".text-field-filled-di-1 .mdc-text-field"));
    mdc.autoInit();
    new mdc.ripple.MDCRipple(document.querySelector(".button-raised-filled .mdc-button"));
  }, []);

  return (
    <div className="animate-enter5" id="decision-card">
      <div>What’s the big (or small) decision?</div>
      <div>
        <div className="text-field-filled-di">
          <label className="mdc-text-field mdc-text-field--filled">
            <span className="mdc-text-field__ripple"></span>
            <span className="mdc-floating-label" id="my-label-id">
              Play it safe
            </span>
            <input type="text" className="mdc-text-field__input" aria-labelledby="my-label-id" />
            <span className="mdc-line-ripple"></span>
          </label>
        </div>
        <div className="text-field-filled-di-1">
          <label className="mdc-text-field mdc-text-field--filled">
            <span className="mdc-text-field__ripple"></span>
            <span className="mdc-floating-label" id="my-label-id">
              Take a chance
            </span>
            <input type="text" className="mdc-text-field__input" aria-labelledby="my-label-id" />
            <span className="mdc-line-ripple"></span>
          </label>
        </div>
        <a href="#display-card">
          <div className="button-raised-filled">
            <button className="mdc-button  mdc-button--raised" data-id="anima-widget">
              <span className="mdc-button__ripple"></span> <span className="mdc-button__label">Let us choose</span>
            </button>
          </div>
        </a>
      </div>
    </div>
  );
}


export default Input;