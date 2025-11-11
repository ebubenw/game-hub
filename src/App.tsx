import { Grid, GridItem, Show, useBreakpointValue } from "@chakra-ui/react";
import GameGrid from "./myComponents/GameGrid";
import NavBar from "./myComponents/NavBar";

function App() {
  const isLargeScreen = useBreakpointValue({ base: false, lg: true });
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav " " main"`,
          lg: `"nav nav" "aside main"`, //>1024px
        }}
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        <Show when={isLargeScreen}>
          <GridItem area="aside">Aside</GridItem>
        </Show>

        <GridItem area="main">
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
