import { renderHook } from "@testing-library/react-hooks";
import { useFetchGifs } from "../hooks/useFetchGifs";

describe("Pruebas en el custom hook useFetchGifs", () => {
  test("debe de retornar el estado inicial", async () => {
    // funcion renderHook (de libreria react-hooks-testing) emula el custom hook
    // se desestructura el result, y dentro de su current, el state
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs("Alison Brie")
    );
    const { data, loading } = result.current;
    await waitForNextUpdate();

    // corroboro que data sea igual a un array vacío
    expect(data).toEqual([]);
    // corroboro que loading sea true
    expect(loading).toBe(true);
  });

  test("debe de retornar un array de img y el loading en false", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs("Alison Brie")
    );
    await waitForNextUpdate();
    const { data, loading } = result.current;
    expect(data.length).toEqual(10);
    expect(loading).toBe(false);
  });
});
