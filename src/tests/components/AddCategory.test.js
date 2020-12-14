import React from "react";
import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";

describe("Pruebas en el componente AddCategory", () => {
  const setCategories = jest.fn();
  let wrapper = shallow(<AddCategory setCategories={setCategories} />);

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  });

  test("debe mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de cambiar el input de text", () => {
    const input = wrapper.find("input");
    const value = "Boca gato";
    input.simulate("change", { target: { value } });

    expect(wrapper.find("p").text().trim()).toBe(value);
  });

  test("no debe de postear la información con submit", () => {
    wrapper.find("form").simulate("submit", { preventDefault() {} });
    expect(setCategories).not.toHaveBeenCalled();
  });

  test("debe de llamar el setCategories y limpiar la caja de texto", () => {
    const value = "Hola Mundo";
    wrapper.find("input").simulate("change", {
      target: { value },
    });
    wrapper.find("form").simulate("submit", { preventDefault() {} });
    // valida si la función fue llamada
    expect(setCategories).toHaveBeenCalled();
    // valida si la función fue llamada n cantidad de veces
    expect(setCategories).toHaveBeenCalledTimes(1);
    // valida si la función fue llamada CON un tipo de argumento determinado
    expect(setCategories).toHaveBeenCalledWith(expect.any(Function));

    expect(wrapper.find("input").prop("value")).toBe("");
  });
});
