import React from "react";
import { useContent } from "../hooks";
import { selectionFilter } from "../utils";
import { BrowseContainer } from "../containers";

export default function Browse() {
  const { series } = useContent("series");
  const { films } = useContent("films");
  const slides = selectionFilter({ series, films });
  console.log("slides", slides);
  return <BrowseContainer slides={slides}> </BrowseContainer>;
}
