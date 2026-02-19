export const multivitamins = {
    id: 7,
    baseName: "Befit Nutrition Multivitamins",
    category: "Multivitamins",
    type: "Tablets",
    series: "Vitamins",
    netWeightOptions: ["180 tablets"],

    variants: [
        // 1) WOMEN
        {
            sku: "multivitamins-women-180",
            netWeight: "180 tablets",
            flavorKey: "Women",
            price: 440000,
            image: "/products/multivitamins-women.png",

            i18n: {
                ru: {
                    name: "Мультивитамины для женщин",
                    description:
                        "Комплекс мультивитаминов для женщин с витаминами A, B, C, D3, L-карнитином и натуральными экстрактами. Поддерживают энергию, иммунитет, гормональный баланс и женское здоровье.",
                    ingredients:
                        "Витамины группы A, B, множество витаминов, таких как C, D3, Л карнитин, оксид цинка, клюква, ежевика, экстракт гинкго билоба, экстракт зеленого чая и другие полезные вещества. В этом продукте содержится ряд важных для женщин микроэлементов и целебных витаминов. При регулярном использовании он способствует умственной свежести, эмоциональному равновесию, положительному восстановлению после менопаузы и половому здоровью. Продукт рекомендуется как дополнительный источник энергии для здоровых женщин. Свойства: Улучшает обмен веществ, Успокаивает нервы, Снимает менструальную боль, Помогает устранить эмоциональную лабильность, Обеспечивает дополнительную энергию, Помогает избавиться от лишнего веса. Показания: Общая слабость, Синдром хронической усталости, Депрессивный синдром, Менструальная боль, Избыточный вес и ожирение, Постменопаузальный синдром. Способ Применения: За 30-45 минут до еды по 2 капсулы 3 раза по указанию специалиста. Противопоказания: При повышенной чувствительности к компонентам продукта. Тяжелая сердечная, печеночная и почечная недостаточность. Условия хранения: Хранить в сухом, защищенном от света месте, при температуре не выше 25°C. Срок хранения: 24 месяца. Производитель: ООО “NUTRI MAKON FACTORY” ...",
                },
                uz: {
                    name: "Ayollar uchun multivitaminlar",
                    description:
                        "A, B, C, D3 vitaminlari, L-karnitin va tabiiy ekstraktlarga ega ayollar uchun multivitaminli kompleks. Energiya, immunitet, gormonal muvozanat va ayollar salomatligini qo'llab-quvvatlaydi.",
                    ingredients:
                        "A, B guruh vitaminlari, C, D3 kabi ko’plab vitaminlar, L-karnitin, rux oksidi, klyukva, chernika, ginkgo biloba ekstrakti, ko’k choy ekstrakti va boshqa foydali moddalar. Ushbu mahsulot ayollar uchun muhim bo’lgan bir qancha mikroelement va darmondori vitaminlarni o'z ichiga olgan... (qolgan matnni docx dagidek qoldiring)",
                },
                en: {
                    name: "Multivitamins for Women",
                    description:
                        "A multivitamin complex for women with vitamins A, B, C, D3, L-carnitine, and natural extracts. Supports energy, immunity, hormonal balance, and feminine health.",
                    ingredients:
                        "Vitamins A, B, many vitamins such as C, D3, L-carnitine, zinc oxide, cranberry, blackberry, ginkgo biloba extract, green tea extract and other beneficial substances... (keep the full text from your docx as-is)",
                },
            },
        },

        // 2) MEN
        {
            sku: "multivitamins-men-180",
            netWeight: "180 tablets",
            flavorKey: "Men",
            price: 440000,
            image: "/products/multivitamins-men.png",

            i18n: {
                ru: {
                    name: "Мультивитамины для мужчин",
                    description:
                        "Комплекс мультивитаминов для мужчин с аминокислотами, женьшенем, гинкго и цинком. Повышает уровень энергии, поддерживает здоровье сердца, иммунитет и половую функцию. Идеален для активного образа жизни.",
                    ingredients:
                        "Витамины А, В, множество витаминов, таких как С, D3, множество аминокислот, таких как лейцин, валин, изолейцин, оксид цинка, клюква, экстракт гинкго билоба, экстракт корня женьшеня и другие полезные вещества... (полный текст из docx)",
                },
                uz: {
                    name: "Erkaklar uchun multivitaminlar",
                    description:
                        "Aminokislotalar, jenshen, ginkgo va sink bilan boyitilgan erkaklar uchun multivitaminli kompleks. Energiya darajasini oshiradi, yurak sog'ligini, immunitetni va jinsiy funktsiyani qo'llab-quvvatlaydi. Faol hayot tarzi uchun ideal tanlov.",
                    ingredients:
                        "A, B guruh vitaminlari, C, D3 kabi ko'plab vitaminlar, leysin, valin, izoleysin kabi ko'plab aminokislotalar, rux oksidi, klyukva, gingko biloba ekstrakti, jenshen ildizi ekstrakti... (полный текст из docx)",
                },
                en: {
                    name: "Multivitamins for Men",
                    description:
                        "Multivitamin complex for men with amino acids, ginseng, ginkgo, and zinc. Increases energy levels, supports heart health, immunity, and sexual function. Ideal for an active lifestyle.",
                    ingredients:
                        "Vitamins A, B, many vitamins such as C, D3, many amino acids such as leucine, valine, isoleucine, zinc oxide, cranberry, ginkgo biloba extract, ginseng root extract... (полный текст из docx)",
                },
            },
        },
    ],
};
