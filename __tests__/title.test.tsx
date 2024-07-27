import '@testing-library/jest-dom'
import {fireEvent, render, screen} from "@testing-library/react"
import TitlePage from "@/app/page"



describe('Title',() => {
    it('renders the heading', () => {
        render(<TitlePage />)
        const heading = screen.getByRole('heading', {level: 1})
        expect(heading).toBeInTheDocument()
    })
    it('navigates to the /Character url onClick', async () => {
        render(<TitlePage />)
        const linkElement = screen.getByText('Learn more');
        expect(linkElement).toHaveAttribute('href', '/Characters');
    })
})