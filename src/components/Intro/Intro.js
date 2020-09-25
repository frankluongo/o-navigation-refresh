import React from "react";

import Grid from "@components/Grid";
import Indicators from "@components/Indicators";
import Video from "@components/Video";

import styles from "./Intro.module.scss";
import SectionHeading from "@components/SectionHeading";
import Books from "../Books/Books";

export default function Intro() {
  return (
    <div className="intro">
      <Grid data-cols="2-3">
        <div className="col-1">
          <Indicators />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit alias
            vero eos veniam inventore commodi qui provident delectus, at
            impedit, consectetur accusantium reprehenderit nesciunt quaerat
            ullam doloremque expedita repellat necessitatibus!
          </p>
          <SectionHeading>Books</SectionHeading>
          <Books />
        </div>
        <div className="col-2">
          <Video />
        </div>
      </Grid>
    </div>
  );
}
