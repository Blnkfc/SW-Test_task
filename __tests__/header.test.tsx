import Header from '@/app/StaticComps/Header/page'
import '@testing-library/jest-dom'
import {fireEvent, render, screen} from "@testing-library/react"


describe('Header', () => {
    it('renders a logo element', () => {
        render(<Header />)
        const logoElement = screen.getByAltText('Logo')
        expect(logoElement).toBeInTheDocument()
    })
    it('navigates to / on logo click', () => {
        render(<Header />)
        const linkElement = screen.getByTitle('Logo');
        expect(linkElement).toHaveAttribute('href', '/');
    })
    it('navigates to /Characters onClick', () => {
        render(<Header />)
        const linkElement = screen.getByText('Characters')
        expect(linkElement).toHaveAttribute('href', '/Characters')
    })
})