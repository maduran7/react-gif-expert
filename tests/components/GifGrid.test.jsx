import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('pruebas en GifGrid', () => { 

    const category = 'One Punch'

    test('debe de mostrar el loading inicialmente ', () => { 

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true,
        })

        render (<GifGrid category={ category } />);
        
        expect (screen.getByText('Cargando...'));
        expect (screen.getByText( category ));


     })

     test('debe mostrar items cuando se cargan las imagenes', () => { 

        const gifs = [
            {

            id: 'ABC',
            title:'Mauricio',
            url: 'https://172.20.30.3:2443'

            },
            {

                id: '123',
                title:'bad bunny',
                url: 'https://172.badbunny.30.3:2443'
    
            },
            
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false,
        })

        render (<GifGrid category={category}/>)
        expect (screen.getAllByRole('img').length).toBe(2);

      })

 })