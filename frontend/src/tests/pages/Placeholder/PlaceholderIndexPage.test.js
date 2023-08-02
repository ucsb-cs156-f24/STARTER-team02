import { render, screen } from "@testing-library/react";
import PlaceholderIndexPage from "main/pages/Placeholder/PlaceholderIndexPage";
import { QueryClient, QueryClientProvider } from "react-query";
import { MemoryRouter } from "react-router-dom";

describe("PlaceholderIndexPage tests", () => {

    const queryClient = new QueryClient();
    test("Renders expected content", () => {
        // arrange

        const expectedText = "Index page not yet implemented";

        // act
        render(
            <QueryClientProvider client={queryClient}>
                <MemoryRouter>
                    <PlaceholderIndexPage />
                </MemoryRouter>
            </QueryClientProvider>
        );

        // assert
        expect(screen.getByText(expectedText)).toBeInTheDocument();
        expect(screen.getByText("Create")).toBeInTheDocument();
        expect(screen.getByText("Edit")).toBeInTheDocument();
    });

});


