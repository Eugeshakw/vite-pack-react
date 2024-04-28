import { Container } from "../container/Container.styled";
import style from "./discStyle.module.scss";
export const Discription = () => {
  return (
    <>
      <Container>
        <div className={style.innerConDisc}>
          <div>
            <h1 className={style.tittleDisc}>Welcome to Rental Car</h1>
          </div>
          <div className={style.innerConParDisc}>
            <p className={style.parDisc}>
              Welcome to the world of convenient and reliable car rental right
              at your doorstep! Our service offers a wide selection of cars to
              suit every taste and budget. From compact city models to premium
              class and SUVs - we have the perfect car for your trip.
            </p>
            <p className={style.discList}>With us, you get:</p>

            <ul className={style.listDisc}>
              <li>
                1.A simple online booking process: just a few clicks and you
                choose the car of your dreams.
              </li>
              <li>
                2.Flexible rental terms: long periods, convenient rates, and
                various service packages for your comfort.
              </li>
              <li>
                3.Safety and reliability: our cars undergo regular checks, and
                each booking includes insurance.
              </li>
              <li>
                4.Car delivery to your address: we value your time, so we ensure
                convenience and comfort right from the start.
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </>
  );
};
