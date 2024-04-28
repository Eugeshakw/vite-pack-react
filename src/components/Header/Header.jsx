import { Container } from "../container/Container.styled";
import style from "./headerStyle.module.scss";
import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <>
      <Container>
        <div className={style.navbar}>
          <div className={style.container}>
            <div className={style.conHeader}>
              <div className={style.navbarHeader}>
                <a href="/" className={style.navbarBrand}>
                  <span className={style.word}>A</span>uto Rental
                </a>
              </div>
              <ul className={style.navnavlist}>
                <Link to="/" className={style.navlink}>
                  Home
                </Link>

                <Link to="/catalog" className={style.navlink}>
                  Catalog
                </Link>

                <Link to="/favorites" className={style.navlink}>
                  Favorites
                </Link>

                <Link to="/contact" className={style.navlink}>
                  Contact
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};
