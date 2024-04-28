import { Container, ConatnierCards } from "../components/container/Container.styled";
import {CardFavorite} from '../components/cardFavorite/Cardfavorite'
export const Favorites = () => {
        

    return(
        <>
        <Container>
            <ConatnierCards>
                <CardFavorite/>
            </ConatnierCards>
        </Container>
        
        
        </>
    )
}