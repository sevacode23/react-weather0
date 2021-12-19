interface INews {
  title: string;
  date: Date;
  description: string;
  imgUrl: string;
}

export const newsContent: INews[] = [
  {
    title: "Inside the Life of a Man with Coronavirus",
    description:
      "Carl Goldman tested positive for coronavirus on the Diamond Princess cruise ship off the coast of Hong Kong. He’s been in quarantine at the Nebraska Biocontainment Unit in Omaha for weeks.",
    date: new Date("2021-11-22"),
    imgUrl:
      "https://s.w-x.co/util/image/v/1583698932115_0308_I_HAVE_CORONAVIRUS_1.jpg?crop=16:9&width=980&format=pjpg&auto=webp&quality=60",
  },
];
