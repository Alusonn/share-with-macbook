import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/Components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");

describe("Pruebas en el componente <GifGrid />", () => {
  const category = "One Punch";
  const cargando = "Cargando..."

  test("debe de mostrar el loading inicialmente", () => {

    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });

    render(<GifGrid category={category} />);
    expect(screen.getByText(cargando));
    expect(screen.getByText(category));
  });

  test("Debe de mostrar items cuando se cargan las imagenes mediante el useFetchGifs()", () => {

    const gifs = [
        {
            id: 'ABC',
            title: 'Saitama',
            url: 'https://localhost/saitama.jpg'
        },
        {
            id: '123',
            title: 'Goku',
            url: 'https://localhost/Goku.jpg'
        }
    ]

    useFetchGifs.mockReturnValue({
        images: gifs,
        isLoading: false,
      });

    render ( <GifGrid category={ category } /> )
    expect( screen.getAllByRole('img').length ).toBe(2)


  });
});
