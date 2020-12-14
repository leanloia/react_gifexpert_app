import React from "react";
import { shallow } from "enzyme";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock("../../hooks/useFetchGifs");

describe("Pruebas en componente GifGrid", () => {
  const category = "boca sorete";

  test("debe mostrarse correctamente el componente", () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });

    let wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
  });

  test("debe de mostrar items cuando se cargan imagenes con useFetchGifs", () => {
    const gifs = [
      {
        id: "abd",
        url: "https://cualquiercosa.com.ar",
        title: "boca mierda",
      },
    ];

    useFetchGifs.mockReturnValue({
      data: gifs,
      loading: false,
    });
    let wrapper = shallow(<GifGrid category={category} />);

    expect(wrapper).toMatchSnapshot();
    // corrobora que no existe el 'p' que tiene el 'loading'
    expect(wrapper.find("p").exists()).toBe(false);
    // corrobora del snapshot el item generado, y que tenga la misma cantidad que 'gifs'
    expect(wrapper.find("GifGridItem").length).toBe(gifs.length);
  });
});
