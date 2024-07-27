import Characters from '@/app/Characters/page'
import CharacterFlow from '@/app/Characters/SingleCharacter/CharacterFlow/CharacterFlow'
import SingleCharacter from '@/app/Characters/SingleCharacter/page'
import { server } from '@/mocks/node'
import '@testing-library/jest-dom'
import {fireEvent, render, screen, waitFor} from "@testing-library/react"

server.listen()

describe('Characters', ()=> {
    it('renders the loading element', () => {
        render(<Characters/>)

        const loadingElement = screen.getByAltText('Loading...')

        expect(loadingElement).toBeInTheDocument()
    })
    // it('fetches the characters data', async () => {
    //     render(<Characters />)

    //     await waitFor(expect(screen.getByText('Name')).toBeInTheDocument)
    // })
    
})

