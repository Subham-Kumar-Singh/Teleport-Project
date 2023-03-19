// import { Sports_render,Entertainment_render } from "./Items_render";
import React from "react";

const Sports = (prop: any) => {
  function dothis() {
    prop.prop(1);
  }
  return (
    <div className="items mar1">
      <button onClick={dothis} className="items-btn">
        <h2>Sports</h2>
      </button>
    </div>
  );
};

const Entertainment = (prop: any) => {
  function dothis() {
    prop.prop(2);
  }
  return (
    <div className="items mar2">
      <button onClick={dothis} className="items-btn">
        <h2>Entertainment</h2>
      </button>
    </div>
  );
};

const Defence = (prop: any) => {
  function dothis() {
    prop.prop(3);
  }
  return (
    <div className="items mar2">
      <button onClick={dothis} className="items-btn">
        <h2>Defence</h2>
      </button>
    </div>
  );
};

const Ministry = (prop: any) => {
  function dothis() {
    prop.prop(4);
  }
  return (
    <div className="items mar2">
      <button onClick={dothis} className="items-btn">
        <h2>Politics</h2>
      </button>
    </div>
  );
};

const Technology = (prop: any) => {
  function dothis() {
    prop.prop(5);
  }
  return (
    <div className="items mar5">
      <button onClick={dothis} className="items-btn">
        <h2>Technology</h2>
      </button>
    </div>
  );
};

export default Sports;
export { Entertainment, Defence, Ministry, Technology };
