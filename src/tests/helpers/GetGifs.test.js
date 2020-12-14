import { getGifs } from "../../helpers/getGifs";

describe("Pruebas con getGifs Fetch", () => {
  test("debe de traer 10 elementos", async () => {
    const gifs = await getGifs("Jennifer Lawrence");

    expect(gifs.length).toBe(10);
  });

  test("debe no traer elementos si no pasamos un argumento", async () => {
    const gifs = await getGifs("");

    expect(gifs.length).toBe(0);
  });
});
