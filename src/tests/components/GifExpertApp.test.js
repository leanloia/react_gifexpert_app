import React from "react";
import { shallow } from "enzyme";
import GifExpertApp from "../../components/GifExpertApp";

describe("Pruebas del componente GifExpertApp", () => {
  test("debe mostrar el componente correctamente", () => {
    const wrapper = shallow(<GifExpertApp />);

    expect(wrapper).toMatchSnapshot();
  });

  test("debe de mostrar una lista de categorias", () => {
    const categories = ["Evangelion", "Alison Brie"];

    // utilizamos 'defaultCategories' porque es la única forma de poder hacer un check
    // sobre un state particular (los state con hooks no tienen diferenciación entre si)
    const wrapper = shallow(<GifExpertApp defaultCategories={categories} />);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("GifGrid").length).toBe(categories.length);
  });
});
