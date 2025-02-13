import { css } from "@emotion/react";

import mq from "../utils/mq";

const { sm, md } = mq;

export const mask = css`
  position: relative;
  margin-bottom: 2.5rem;
  width: 87vw;
  text-align: left;
  overflow: hidden;
  user-select: none;
  ${md} {
    width: 29rem;
  }
`;

export const block = css`
  position: absolute;
  height: 100%;
  background: #fff;
`;

export const txt = css`
  font-family: "Bowlby One SC", cursive;
  font-size: 12vw;
  opacity: 0;
  ${md} {
    font-size: 4rem;
  }
`;

export const heart = css`
  position: absolute;
  top: 100%;
  margin-left: 1rem;
  font-size: 9vw;
  color: #f00;
  ${md} {
    font-size: 3rem;
  }
`;

export const btn = css`
  padding: 0.5rem;
  border: 1px dashed #fff;
  font-weight: bold;
  color: #fff;
  background: none;
  cursor: pointer;
  &:not(:first-of-type) {
    margin-left: -1px;
  }
  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
  &:focus {
    outline: none;
  }
  ${sm} {
    padding: 0.5rem 1rem;
  }
`;

export const slider = css`
  position: relative;
  margin-top: 1.5rem;
  width: 100%;
  background: none;
  -webkit-appearance: none;
  &:focus {
    border: none;
    outline: none;
  }
  &::-moz-range-track {
    background: #fff;
  }
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 21px;
    height: 21px;
    background: #fff;
    cursor: pointer;
  }
  &::-moz-range-thumb {
    width: 21px;
    height: 21px;
    border: none;
    background: #fff;
    cursor: pointer;
  }
  &::after {
    content: "";
    position: absolute;
    top: 10px;
    width: 100%;
    height: 1px;
    background: #fff;
    cursor: pointer;
  }
`;
