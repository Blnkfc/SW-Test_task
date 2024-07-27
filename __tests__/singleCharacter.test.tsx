import SingleCharacter from '@/app/Characters/SingleCharacter/page'
import CharacterFlow from '@/app/Characters/SingleCharacter/CharacterFlow/CharacterFlow'
import '@testing-library/jest-dom'
import {fireEvent, render, screen} from "@testing-library/react"


describe('SingleCharacter', () => {
    const character = {
        name: 'Luke Skywalker',
        gender: 'male',
        height: '172',
        birth_year: '19BBY',
        films: [1],
        starships: [1]
    }

    it('renders the character image', () => {
        render(<SingleCharacter />)

        const loadingElement = screen.getByAltText('Profile photo')

        expect(loadingElement).toBeInTheDocument()
    })
    
    it('renders with character props', () => {
        render(<SingleCharacter character={character} />)
        
        expect(screen.getByText('Luke Skywalker')).toBeInTheDocument()
        expect(screen.getByText('male')).toBeInTheDocument()
        expect(screen.getByText('172')).toBeInTheDocument()
        expect(screen.getByText('19BBY')).toBeInTheDocument()
    })

    
    it('has correct styles when flowDisplay is true', () => {
        render(<SingleCharacter character={character} />)
    
        const flowchartButton = screen.getByTitle('Show flow chart')
        fireEvent.click(flowchartButton)
    
        const singleCharacterElement = screen.getByTitle('Character card')
    
        expect(singleCharacterElement).toHaveClass('w-[95%] fixed top-50 z-[999]')
    })
    
    it('has inforamtion about the character displayed', () => {
        render(<SingleCharacter character={character} />)

        const infoElement = screen.getByRole('list')

        expect(infoElement).toBeInTheDocument()
    })

    
})