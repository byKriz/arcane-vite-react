import { Card } from "../../components/Card/Card";
import { CardsContainer } from "../../components/CardsContainer/CardsContainer";
import { Layout } from "../../container/Layout/Layout";
import styles from "./Characters.module.scss";
import jinx from "../../assets/images/Jinx.png";
import vi from "../../assets/images/Vi.png";

export function Characters() {
  return (
    <>
      <Layout>
        <CardsContainer>
          <Card
            image={jinx}
            name="Jinx"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae a earum praesentium, sequi esse nesciunt, animi assumenda obcaecati veritatis id ex! Dicta a quae earum ipsa rerum animi impedit adipisci."
          />
          <Card
            image={vi}
            name="Vi"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae a earum praesentium, sequi esse nesciunt, animi assumenda obcaecati veritatis id ex! Dicta a quae earum ipsa rerum animi impedit adipisci."
          />
          <Card
            image={vi}
            name="Vi"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae a earum praesentium, sequi esse nesciunt, animi assumenda obcaecati veritatis id ex! Dicta a quae earum ipsa rerum animi impedit adipisci."
          />
          <Card
            image={vi}
            name="Vi"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae a earum praesentium, sequi esse nesciunt, animi assumenda obcaecati veritatis id ex! Dicta a quae earum ipsa rerum animi impedit adipisci."
          />
          <Card
            image={vi}
            name="Vi"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae a earum praesentium, sequi esse nesciunt, animi assumenda obcaecati veritatis id ex! Dicta a quae earum ipsa rerum animi impedit adipisci."
          />
          <Card
            image={vi}
            name="Vi"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae a earum praesentium, sequi esse nesciunt, animi assumenda obcaecati veritatis id ex! Dicta a quae earum ipsa rerum animi impedit adipisci."
          />
        </CardsContainer>
      </Layout>
    </>
  );
}
