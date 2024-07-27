import CharacterFlow from '@/app/Characters/SingleCharacter/CharacterFlow/CharacterFlow'
import '@testing-library/jest-dom'
import {fireEvent, render, screen, waitFor} from "@testing-library/react"
import {server} from "@/mocks/node"
import { setupServer } from 'msw/node'
import { http, HttpResponse } from 'msw'
import SingleCharacter from '@/app/Characters/SingleCharacter/page'

server.listen()

const character = {
    name: 'Luke Skywalker',
    gender: 'male',
    height: '172',
    birth_year: '19BBY',
    films: [1],
    starships: [1]
}
const mockFilms = [{ id: 1, title: 'Test Film' }];
const mockStarships = [{ id: 1, name: 'Test Starship' }];

describe('CharacterFlow', () => {
    

    it('renders loading state initially', () => {
        render(<CharacterFlow/>);
    
        expect(screen.getByAltText('Loading...')).toBeInTheDocument();
    });

    // it('renders data after successful fetch', async () => {
    //     render(<SingleCharacter />)
    //     render(<CharacterFlow character={character} isDisplayed={true} />);
    
    //     await waitFor(() => {expect(screen.getByText('Luke Skywalker')).toBeInTheDocument()})
    //     await waitFor(() => {expect(screen.getByText('Test Film')).toBeInTheDocument()})
    //     await waitFor(() => {expect(screen.getByText('Test Starship')).toBeInTheDocument();})
    //   });
})

