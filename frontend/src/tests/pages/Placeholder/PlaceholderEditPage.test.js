import { render, screen } from "@testing-library/react";
import PlaceholderEditPage from "main/pages/Placeholder/PlaceholderEditPage";
import { QueryClient, QueryClientProvider } from "react-query";
import { MemoryRouter } from "react-router-dom";

describe("PlaceholderEditPage tests", () => {

    const queryClient = new QueryClient();
    test("Renders expected content", () => {
        // arrange

        const expectedText = "Edit page not yet implemented";

        // act
        render(
            <QueryClientProvider client={queryClient}>
                <MemoryRouter>
                    <PlaceholderEditPage />
                </MemoryRouter>
            </QueryClientProvider>
        );

        // assert
        expect(screen.getByText(expectedText)).toBeInTheDocument();
    });

});


