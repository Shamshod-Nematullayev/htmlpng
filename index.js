const { readFile } = require("fs");
const nodeHtmlToImage = require("node-html-to-image");
const html = readFile("./index.html", { encoding: "utf-8" }, (err, data) => {
  if (err) throw err;
  let arr = [
    {
      id: 29203,
      name: "Бабаджанов Саидмурод Абдурахмонович",
      tushumSoni: 8,
      summasi: 1390000,
    },
    {
      id: 26419,
      name: "Шаропова Мадина Нормаматовна",
      tushumSoni: 3,
      summasi: 629000,
    },
    {
      id: 14621,
      name: "Рўзиева Хилола Эшмуродовна",
      tushumSoni: 6,
      summasi: 592000,
    },
    {
      id: 26414,
      name: "Мухаммадиев Бобомурод Хамроқулович",
      tushumSoni: 7,
      summasi: 540000,
    },
    {
      id: 28952,
      name: "Ибрагимова Гулзода Исмоил кизи",
      tushumSoni: 5,
      summasi: 537000,
    },
    {
      id: 14612,
      name: "Содиқова Дилрабо Қиличевна",
      tushumSoni: 5,
      summasi: 530000,
    },
    {
      id: 26416,
      name: "Ойдинов Улмас Музаффар ўғли",
      tushumSoni: 10,
      summasi: 400000,
    },
    {
      id: 20342,
      name: "Холикулова Мохия Отабек кизи",
      tushumSoni: 4,
      summasi: 323000,
    },
    {
      id: 17410,
      name: "Ахадов Машраб Маматович",
      tushumSoni: 7,
      summasi: 310000,
    },
    {
      id: 14619,
      name: "Махмудов Одилжон Нагматиллаевич",
      tushumSoni: 2,
      summasi: 305000,
    },
    {
      id: 19093,
      name: "Азимов Азамат",
      tushumSoni: 12,
      summasi: 286000,
    },
    {
      id: 28242,
      name: "Нурмуродов Бекзод Уктам уғли",
      tushumSoni: 5,
      summasi: 210000,
    },
    {
      id: 28243,
      name: "Асатов Равшан Нурхонович",
      tushumSoni: 7,
      summasi: 151000,
    },
    {
      id: 26621,
      name: "Суюнова Мохичехра Туракуловна",
      tushumSoni: 4,
      summasi: 137000,
    },
    {
      id: 17413,
      name: "Негматов Дилшод Хасан ўғли",
      tushumSoni: 3,
      summasi: 110000,
    },
    {
      id: 21886,
      name: "Ибрагимов Камол Кузиевич",
      tushumSoni: 1,
      summasi: 100000,
    },
    {
      id: 14614,
      name: "Базарова Дилафруз Мавлановна",
      tushumSoni: 0,
      summasi: 0,
    },
    {
      id: 26783,
      name: "Даминова Садоқат Базаровна",
      tushumSoni: 0,
      summasi: 0,
    },
    {
      id: 28241,
      name: "Курбонова Муяссарой Асат кизи",
      tushumSoni: 0,
      summasi: 0,
    },
    {
      id: 19092,
      name: "Муродуллаева Дилфуза",
      tushumSoni: 0,
      summasi: 0,
    },
    {
      id: 27299,
      name: "Садриддинов Азиз Актамович",
      tushumSoni: 0,
      summasi: 0,
    },
    {
      id: 27301,
      name: "Садриддинов Хамза Олимович",
      tushumSoni: 0,
      summasi: 0,
    },
    {
      id: 19322,
      name: "Урокова Феруза Ахматовна",
      tushumSoni: 0,
      summasi: 0,
    },
    {
      id: 22317,
      name: "Хусанов Вохиджон Эргашович",
      tushumSoni: 0,
      summasi: 0,
    },
  ];

  console.log({ data });
  nodeHtmlToImage({
    output: "./image.png",
    html: data,
    type: "png",
    encoding: "binary",
  }).then(() => console.log("The image was created successfully!"));
});
