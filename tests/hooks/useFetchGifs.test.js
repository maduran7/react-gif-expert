import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"


describe('pruebas en useFetchGifs', () => { 

    test('debe de regresar el estado incial', () => {  

        const { result } =  renderHook(() => useFetchGifs ('One Punch'));
        const {images, isLoading} = result.current;

        expect (images.length).toBe(0);
        expect (isLoading).toBeTruthy();

    })


    test('debe de retornar un arreglo de imagenes y el isloading en false', async() => { 

        const { result } =  renderHook(() => useFetchGifs ('One Punch'));
        
        await waitFor (

            () => expect (result.current.images.length) .toBeGreaterThan(0),

            
        );

        expect (images.length).toBe(0);
        expect (isLoading).toBeFalsy();

     })

 })