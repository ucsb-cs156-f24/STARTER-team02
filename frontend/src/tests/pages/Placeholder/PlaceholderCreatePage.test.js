import { render, screen } from "@testing-library/react";
import PlaceholderCreatePage from "main/pages/Placeholder/PlaceholderCreatePage";
import { QueryClient, QueryClientProvider } from "react-query";
import { MemoryRouter } from "react-router-dom";

describe("PlaceholderCreatePage tests", () => {

    const queryClient = new QueryClient();
    test("Renders expected content", () => {
        // arrange

        const expectedText = "This page not yet implemented";

        // act
        render(
            <QueryClientProvider client={queryClient}>
                <MemoryRouter>
                    <PlaceholderCreatePage />
                </MemoryRouter>
            </QueryClientProvider>
        );

        // assert
        expect(screen.getByText(expectedText)).toBeInTheDocument();
    });

});


