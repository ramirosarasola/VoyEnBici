import React from "react";
import { ContainerPage } from "../../atoms/container-card/ContainerPage";
import { Title } from "../../atoms/title/Title";
import AchievementCard from "./AchievementCard";
import { achievements } from "../../../constants/achievements";

export const Achievements = () => {
  return (
    <ContainerPage>
      <section className="achievements__container flex-col h-full p-5">
        <div className="flex-col justify-between  ">
          <h1 className="text-[40px] text-center">Logros</h1>
          <p className="text-[22px] max-w-[700px] m-auto text-justify my-[20px]">
            Estos son algunos de los reconocimientos más destacados que ha
            conseguido VOY EN BICI a lo largo de su corta historia. Nos pone muy
            felices recibir estos premios y nos impulsa a seguir trabajando con
            mucho esfuerzo, por el bien de los más desfavorecidos.{" "}
          </p>
        </div>
        <section className="achievements__cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {achievements.map((item, i) => {
            return (
              <AchievementCard
                ig_post={item.ig_post}
                title={item.title}
                description={item.description}
                img={item.img}
                key={i}
              />
            );
          })}
        </section>
      </section>
    </ContainerPage>
  );
};
