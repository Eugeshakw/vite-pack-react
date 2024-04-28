import { Container, ConatnierCards } from "../components/container/Container.styled";
import { CarCards } from "../components/cardCars/Cardcars";
import { CarFilter } from "../components/carfilter/CarFilter";

export const Catalog = () => {
  return (
    <>
      <Container>
        <CarFilter/>
        <ConatnierCards>
          <CarCards />
        </ConatnierCards>
      </Container>
    </>
  );
};
