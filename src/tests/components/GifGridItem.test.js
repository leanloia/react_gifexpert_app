import React from "react";
import { shallow } from "enzyme";
import { GifGridItem } from "../../components/GifGridItem";

describe("Pruebas en componente GifGridItem", () => {
  const title = "Un titulo";
  const url = "https://bocalaconchadetumadre.com.ar";
  const wrapper = shallow(<GifGridItem title={title} url={url} />);

  test("debe mostrar el componente correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de tener un párrafo con el title", () => {
    const parrafo = wrapper.find("p");
    expect(parrafo.text().trim()).toBe(title);
  });

  test("debe tener la imagen igual al url y alt de los props", () => {
    const img = wrapper.find("img");
    expect(img.prop("src")).toBe(url);
    expect(img.prop("alt")).toBe(title);
  });

  test("debe tener animate__fadeIn", () => {
    const div = wrapper.find("div");
    expect(div.prop("className").includes("animate__fadeIn")).toBe(true);
  });
});
