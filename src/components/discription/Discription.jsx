import { Container } from "../container/Container.styled";
import style from "./discStyle.module.scss";
export const Discription = () => {
  return (
    <>
      <Container>
        <div className={style.innerConDisc}>
         hello world!
        </div>
      </Container>
    </>
  );
};
