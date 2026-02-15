export const proteinbars = {
    id: 1,
    baseName: "Befit Nutrition Protein Bar",
    category: "Protein Bars",
    type: "Protein Bar",
    series: "Middle",
    netWeightOptions: ["50g"],

    commonI18n: {
        ru: {
            note:
                "Каждый вкус протеиновых батончиков BEFIT NUTRITION - это уникальная комбинация пользы и удовольствия. Найдите свой любимый и добавьте яркие моменты в свой день!",
            contraindications:
                "Противопоказания: индивидуальная непереносимость ингредиентов продукта.",
        },
        uz: {
            note:
                "BEFIT NUTRITION protein barlarining har bir ta'mi foyda va zavqning noyob birikmasidir. Sevimli ta’mingizni toping va kuningizga yorqin lahzalarni qo'shing!",
            contraindications:
                "Qo’llash mumkin bo’lmagan holatlar: mahsulot tarkibiy qismlariga individual o‘zlashtiraolmaslik.",
        },
        en: {
            note:
                "Each flavor of BEFIT NUTRITION protein bars is a unique combination of health and pleasure. Find your favorite and add some bright moments to your day!",
            contraindications:
                "Contraindications: individual intolerance to the product ingredients.",
        },
    },

    variants: [
        // 1) Mango & Cashew
        {
            sku: "middle-mango-cashew-50g",
            netWeight: "50g",
            flavorKey: "Mango_Cashew",
            price: null,
            image: "/products/middle-mango-cashew.png",

            i18n: {
                ru: {
                    name: "Протеиновый батончик Befit Nutrition Mango & Cashew, 50 г",
                    flavorLabel: "Манго и кешью",
                    tagline: "Тропический заряд для активных.",
                    description:
                        "Яркий вкус спелого манго сочетается с кремовой ноткой кешью, создавая батончик, который не только вкусен, но и полезен. Идеален для восстановления после тренировки или перекуса на ходу - наполняет витаминами и помогает оставаться в движении.",
                    ingredients:
                        "Протеин (концентрат сывороточного белка, концентрат молочного белка), патока, молочно-шоколадная глазурь (подсластитель мальтитол, заменитель масла какао лауринового типа, молоко сухое обезжиренное, какао-порошок, сыворотка сухая молочная деминерализованная, эмульгатор (лецитин соевый), подсластитель (сукралоза), ароматизатор), заменитель молочного жира, вода, манго, кешью, гуммиарабик, агенты влагоудерживающие (глицерин, сорбитол), эмульгатор (лецитин соевый), регулятор кислотности (лимонная кислота), ароматизатор, куркума, соль, антиокислитель (аскорбиновая кислота), консервант (сорбат калия), подсластитель (сукралоза).",

                },

                uz: {
                    name: "Befit Nutrition Mango va Keshyu protein bari, 50 g",
                    flavorLabel: "Mango va keshyu",
                    tagline: "Faol hayot tarzi uchun tropik kuch.",
                    description:
                        "Pishgan mangoning yorqin ta'mi keshyuning qaymoqli notasi bilan birlashtirilib, nafaqat ma’zali, balki sog'lom bo'lgan barni yaratadi. Mashqdan keyin tiklanish yoki yo'lda gazak uchun ideal tanlov - bu bar sizni vitaminlar bilan to'ldiradi va harakatda qolishingizga yordam beradi.",
                    ingredients:
                        "Protein (zardob oqsili konsentrati, sut oqsili konsentrati), maltoz patoka, sutli shokoladli glazur (ta'mlantiruvchi maltitol, laurik turdagi kakao yog'i o'rnini bosuvchi, yog'sizlangan sut kukuni, kakao kukuni, demineralizatsiyalangan sut zardob kukuni, emulsifikator (soya lesitini), sukraloza, xushbo'ylantiruvchi), sut yog'ini o'rnini bosuvchi, suv, mango, keshyu, gummi arabic, namlikni saqlovchi moddalar (glitserin, sorbitol), emulsifikator (soya lesitini), kislotalikni tartibga soluvchi (limon kislotasi), aromatizator, tuz, antioksidant (askorbin kislotasi), konservant (kaliy sorbat), sukraloza.",
                },

                en: {
                    name: "Befit Nutrition Mango & Cashew Protein Bar, 50g",
                    flavorLabel: "Mango & Cashew",
                    tagline: "A tropical boost for active people.",
                    description:
                        "The vibrant flavor of ripe mango combines with the creamy note of cashews, creating a bar that's not only delicious but also healthy. Ideal for post-workout recovery or an on-the-go snack – it's packed with vitamins and helps you stay active.",
                    ingredients:
                        "Protein (whey protein concentrate, milk protein concentrate), molasses, milk chocolate coating (sweetener maltitol, lauric cocoa butter substitute, skimmed milk powder, cocoa powder, demineralized whey powder, emulsifier (soy lecithin), sweetener (sucralose), flavoring), milk fat replacer, water, mango, cashews, gum arabic, humectants (glycerol, sorbitol), emulsifier (soy lecithin), acidity regulator (citric acid), flavoring, turmeric, salt, antioxidant (ascorbic acid), preservative (potassium sorbate), sweetener (sucralose).",
                },
            },
        },

        // 2) Coconut, Cream & Almond
        {
            sku: "middle-coconut-cream-almond-50g",
            netWeight: "50g",
            flavorKey: "Coconut_Cream_Almond",
            price: null,
            image: "/products/middle-coconut-cream-almond.png",

            i18n: {
                ru: {
                    name: "Протеиновый батончик Befit Nutrition Coconut, Cream & Almond, 50 г",
                    flavorLabel: "Кокос, крем и миндаль",
                    tagline: "Мягкость, которая питает.",
                    description:
                        "Изысканное сочетание кокоса, миндаля и крема создаёт вкус, от которого невозможно оторваться. Этот батончик не только радует нежной текстурой и сливочным вкусом, но и снабжает организм полезными жирами и антиоксидантами для иммунной поддержки.",
                    ingredients:
                        "Протеин (концентрат сывороточного белка, концентрат молочного белка), мальтозная патока, молочно-шоколадная глазурь (подсластитель мальтитол, заменитель масла какао лауринового типа, молоко сухое обезжиренное, какао-порошок, сыворотка сухая молочная деминерализованная, эмульгатор (лецитин соевый), подсластитель (сукралоза), ароматизатор), заменитель молочного жира, вода, миндаль, кокосовая стружка, гуммиарабик, агенты влагоудерживающие (глицерин, сорбитол), эмульгатор (лецитин соевый), регулятор кислотности (лимонная кислота), ароматизатор, соль, антиокислитель (аскорбиновая кислота), консервант (сорбат калия), подсластитель (сукралоза).",
                },

                uz: {
                    name: "Befit Nutrition Kokos, Krem va Bodomli protein bari, 50 g",
                    flavorLabel: "Kokos, krem va bodom",
                    tagline: "Oziqlantiruvchi yumshoqlik.",
                    description:
                        "Kokos, bodom va kremning ajoyib kombinatsiyasi o'zingizni to’xtatib bo'lmaydigan ta'mni yaratadi. Ushbu bar nafaqat nozik tuzilishi va mayin ta'mi bilan xursand qiladi, balki immunitetni qo'llab-quvvatlash uchun tanani sog'lom yog'lar va antioksidantlar bilan ta'minlaydi.",
                    ingredients:
                        "Protein (zardob oqsili konsentrati, sut oqsili konsentrati), maltoz patoka, sutli shokoladli glazur (ta'mlantiruvchi maltitol, laurik turdagi kakao yog'i o'mini bosuvchi, yog'sizlangan sut kukuni, kakao kukuni, demineralizatsiyalangan sut zardob kukuni, emulsifikator (soya lesitini), sukraloza, xushbo’ylantiruvchi), sut yog'ini o'rnini bosuvchi, suv, bodom, kokos parchalari, gummi arabic, namlikni saqlovchi moddalar (glitserin, sorbitol), emulsifikator (soya lesitini), kislotalikni tartibga soluvchi (limon kislotasi), aromatizator, tuz, antioksidant (askorbin kislotasi), konservant (kaliy sorbat), sukraloza.",
                },

                en: {
                    name: "Befit Nutrition Coconut, Cream & Almond Protein Bar, 50g",
                    flavorLabel: "Coconut, Cream & Almond",
                    tagline: "Softness that nourishes.",
                    description:
                        "The exquisite combination of coconut, almond, and cream creates an irresistible flavor. This bar not only delights with its delicate texture and creamy taste, but also supplies the body with healthy fats and antioxidants for immune support.",
                    ingredients:
                        "Protein (whey protein concentrate, milk protein concentrate), maltose syrup, milk chocolate glaze (sweetener maltitol, lauric cocoa butter substitute, skimmed milk powder, cocoa powder, demineralized whey powder, emulsifier (soy lecithin), sweetener (sucralose), flavoring), milk fat substitute, water, almonds, coconut flakes, gum arabic, humectants (glycerol, sorbitol), emulsifier (soy lecithin), acidity regulator (citric acid), flavoring, salt, antioxidant (ascorbic acid), preservative (potassium sorbate), sweetener (sucralose).",
                },
            },
        },

        // 3) Strawberry, Cream Vanilla & Hazelnut
        {
            sku: "middle-strawberry-cream-vanilla-hazelnut-50g",
            netWeight: "50g",
            flavorKey: "Strawberry_CreamVanilla_Hazelnut",
            price: null,
            image: "/products/middle-strawberry-cream-vanilla-hazelnut.png",

            i18n: {
                ru: {
                    name:
                        "Протеиновый батончик Befit Nutrition Strawberry, Cream Vanilla & Hazelnut, 50 г",
                    flavorLabel: "Клубника, сливочно-ванильный крем и фундук",
                    tagline: "Десерт, за который не нужно себя винить.",
                    description:
                        "Сочетание сладкой клубники, ванильного крема и фундука превращает этот батончик в настоящее удовольствие. Он не только радует вкусом, но и заботится о здоровье кожи, сердца и настроении благодаря сбалансированному составу.",
                    ingredients:
                        "Протеин (концентрат сывороточного белка, концентрат молочного белка), мальтозная патока, молочно-шоколадная глазурь (подсластитель мальтитол, заменитель масла какао лауринового типа, молоко сухое обезжиренное, какао-порошок, сыворотка сухая молочная деминерализованная, эмульгатор (лецитин соевый), подсластитель (сукралоза), ароматизатор), клубника, заменитель молочного жира, вода, фундук, гуммиарабик, агенты влагоудерживающие (глицерин, сорбитол), эмульгатор (лецитин соевый), регулятор кислотности (лимонная кислота), ароматизатор, соль, антиокислитель (аскорбиновая кислота), консервант (сорбат калия), подсластитель (сукралоза).",
                },

                uz: {
                    name: "Befit Nutrition Qulupnay, Krem Vanil va Fundukli protein bari, 50 g",
                    flavorLabel: "Qulupnay, krem vanil va funduk",
                    tagline: "O'zingizni aybdor his qilishingiz shart bo'lmagan shirinlik.",
                    description:
                        "Shirin qulupnay, vanil kremi va funduk kombinatsiyasi bu barni haqiqiy lazzatga aylantiradi. U nafaqat ta'mi bilan quvontiradi, balki muvozanatli tarkibi tufayli teringizga, yuragingizga va kayfiyatingizga g'amxo'rlik qiladi.",
                    ingredients:
                        "Protein (zardob oqsili konsentrati, sut oqsili konsentrati), maltoz patoka, sutli shokoladli glazur (ta'mlantiruvchi maltitol, laurik turdagi kakao yog'i o'rnini bosuvchi, yog'sizlangan sut kukuni, kakao kukuni, demineralizatsiyalangan sut zardob kukuni, emulsifikator (soya lesitini), sukraloza, xushbo'ylantiruvchi), qulupnay, sut yog'ini o'rnini bosuvchi, suv, funduk, gummi arabic, namlikni saqlovchi moddalar (glitserin, sorbitol), emulsifikator (soya lesitini), kislotalikni tartibga soluvchi (limon kislotasi), aromatizator, tuz, antioksidant (askorbin kislotasi), konservant (kaliy sorbat), sukraloza.",
                },

                en: {
                    name:
                        "Befit Nutrition Strawberry, Cream Vanilla & Hazelnut Protein Bar, 50g",
                    flavorLabel: "Strawberry, Cream Vanilla & Hazelnut",
                    tagline: "A dessert you won't have to feel guilty about.",
                    description:
                        "The combination of sweet strawberries, vanilla cream, and hazelnuts makes this bar a true delight. Not only does it delight with its taste, but its balanced composition also supports skin, heart, and mood health.",
                    ingredients:
                        "Protein (whey protein concentrate, milk protein concentrate), maltose syrup, milk chocolate coating (sweetener maltitol, lauric cocoa butter substitute, skimmed milk powder, cocoa powder, demineralized whey powder, emulsifier (soy lecithin), sweetener (sucralose), flavoring), strawberries, milk fat substitute, water, hazelnuts, gum arabic, humectants (glycerol, sorbitol), emulsifier (soy lecithin), acidity regulator (citric acid), flavoring, salt, antioxidant (ascorbic acid), preservative (potassium sorbate), sweetener (sucralose).",
                },
            },
        },

        // 4) Wild Berries
        {
            sku: "middle-wild-berries-50g",
            netWeight: "50g",
            flavorKey: "Wild_Berries",
            price: null,
            image: "/products/middle-wild-berries.png",

            i18n: {
                ru: {
                    name: "Протеиновый батончик Befit Nutrition Wild Berries, 50 г",
                    flavorLabel: "Лесные ягоды",
                    tagline: "Свежесть лесных ягод в каждом укусе.",
                    description:
                        "Насыщенный вкус малины и ежевики бодрит и освежает, наполняя день яркими нотками природы. Идеальный вариант для перекуса, который радует вкусовые рецепторы и снабжает витаминами и антиоксидантами.",
                    ingredients:
                        "Протеин (концентрат сывороточного белка, концентрат молочного белка), мальтозная патока, молочно-шоколадная глазурь (подсластитель мальтитол, заменитель масла какао лауринового типа, молоко сухое обезжиренное, какао-порошок, сыворотка сухая молочная деминерализованная, эмульгатор (лецитин соевый), подсластитель (сукралоза), ароматизатор), ягоды (малина, ежевика), заменитель молочного жира, вода, гуммиарабик, агенты влагоудерживающие (глицерин, сорбитол), эмульгатор (лецитин соевый), регулятор кислотности (лимонная кислота), ароматизатор, соль, антиокислитель (аскорбиновая кислота), консервант (сорбат калия), подсластитель (сукралоза).",
                },

                uz: {
                    name: "Befit Nutrition Yovvoyi Rezavorlar protein bari, 50 g",
                    flavorLabel: "Yovvoyi rezavorlar",
                    tagline: "Har bir tishlashda o’rmon mevalarning barraligi.",
                    description:
                        "Malina va karapuzning boy ta'mi kuningizni tabiatning yorqin notalari bilan to'ldirib, tetiklantiradi va kuch beradi. Ta'm retseptorlarini quvontiradigan va vitaminlar va antioksidantlar bilan ta'minlaydigan ideal gazak tanlovi.",
                    ingredients:
                        "Protein (zardob oqsili konsentrati, sut oqsili konsentrati), maltoz patoka, sutli shokoladli glazur (ta'mlantiruvchi maltitol, laurik turdagi kakao yog'i o'rnini bosuvchi, yog'sizlangan sut kukuni, kakao kukuni, demineralizatsiyalangan sut zardob kukuni, emulsifikator (soya lesitini), sukraloza, xushbo'ylantiruvchi), o’rmon mevalari (malina, maymunjon), sut yog'ini o'rnini bosuvchi, suv, gummi arabic, namlikni saqlovchi moddalar (glitserin, sorbitol), emulsifikator (soya lesitini), kislotalikni tartibga soluvchi (limon kislotasi), aromatizator, tuz, antioksidant (askorbin kislotasi), konservant (kaliy sorbat), sukraloza.",
                },

                en: {
                    name: "Befit Nutrition Wild Berries Protein Bar, 50g",
                    flavorLabel: "Wild Berries",
                    tagline: "The freshness of wild berries in every bite.",
                    description:
                        "The rich flavor of raspberries and blackberries invigorates and refreshes, filling your day with bright notes of nature. An ideal snack that delights your taste buds and provides vitamins and antioxidants.",
                    ingredients:
                        "Protein (whey protein concentrate, milk protein concentrate), maltose syrup, milk chocolate glaze (sweetener maltitol, lauric cocoa butter substitute, skimmed milk powder, cocoa powder, demineralized whey powder, emulsifier (soy lecithin), sweetener (sucralose), flavoring), berries (raspberry, blackberry), milk fat substitute, water, gum arabic, humectants (glycerol, sorbitol), emulsifier (soy lecithin), acidity regulator (citric acid), flavoring, salt, antioxidant (ascorbic acid), preservative (potassium sorbate), sweetener (sucralose).",
                },
            },
        },

        // 5) Coffee Latte
        {
            sku: "middle-coffee-latte-50g",
            netWeight: "50g",
            flavorKey: "Coffee_Latte",
            price: null,
            image: "/products/middle-coffee-latte.png",

            i18n: {
                ru: {
                    name: "Протеиновый батончик Befit Nutrition Coffee Latte, 50 г",
                    flavorLabel: "Кофе латте",
                    tagline: "Бодрящий заряд в каждом укусе.",
                    description:
                        "Протеиновый батончик со вкусом кофе латте - идеальный спутник в утренней суете или дневном перерыве. Нежный кофейный аромат, сливочная текстура и порция белка помогают оставаться в тонусе, не жертвуя вкусом. Почувствуйте, как энергия мягко пробуждает вас и наполняет ясностью мысли.",
                    ingredients:
                        "Протеин (концентрат сывороточного белка, концентрат молочного белка), мальтозная патока, молочно-шоколадная глазурь (подсластитель мальтитол, заменитель масла какао лауринового типа, молоко сухое обезжиренное, какао-порошок, сыворотка сухая молочная деминерализованная, эмульгатор (лецитин соевый), подсластитель (сукралоза), ароматизатор), заменитель молочного жира, вода, гуммиарабик, какао-порошок, агенты влагоудерживающие (глицерин, сорбитол), эмульгатор (лецитин соевый), регулятор кислотности (лимонная кислота), ароматизатор, соль, антиокислитель (аскорбиновая кислота), консервант (сорбат калия), подсластитель (сукралоза).",
                },

                uz: {
                    name: "Befit Nutrition Latte Qahva protein bari, 50 g",
                    flavorLabel: "Latte qahva",
                    tagline: "Har bir tishlashda tetiklantiruvchi kuch.",
                    description:
                        "Latte qahvasi ta'miga ega proteinli bar ertalabki shoshilinch yoki tushdan keyin tanaffus uchun eng zo'r hamrohdir. Nozik qahva aromati, qaymoqsimon tuzilmasi va bir portsiya protein, ta'mni yo'qotmasdan shaklda bo'lishga yordam beradi. Qanday qilib energiya sizni muloyimlik bilan uyg'otayotganini va sizni fikr ravshanligi bilan to'ldirishini his eting.",
                    ingredients:
                        "Protein (zardob oqsili konsentrati, sut oqsili konsentrati), maltoz patoka, sutli shokoladli glazur (ta'mlantiruvchi maltitol, laurik turdagi kakao yog'i o’rnini bosuvchi, yog'sizlangan sut kukuni, kakao kukuni, demineralizatsiyalangan sut zardob kukuni, emulsifikator (soya lesitini), sukraloza, xushbo’ylantiruvchi), sut yog'ini o'rnini bosuvchi, suv, gummi arabic, kakao kukuni, namlikni saqlovchi moddalar (glitserin, sorbitol), emulsifikator (soya lesitini), kislotalikni tartibga soluvchi (limon kislotasi), aromatizator, tuz, antioksidant (askorbin kislotasi), konservant (kaliy sorbat), sukraloza.",
                },

                en: {
                    name: "Befit Nutrition Coffee Latte Protein Bar, 50g",
                    flavorLabel: "Coffee Latte",
                    tagline: "An energizing boost in every bite.",
                    description:
                        "This coffee latte-flavored protein bar is the perfect companion for your morning rush or afternoon break. The delicate coffee aroma, creamy texture, and serving of protein help you stay energized without sacrificing flavor.",
                    ingredients:
                        "Protein (whey protein concentrate, milk protein concentrate), maltose syrup, milk chocolate glaze (sweetener maltitol, lauric cocoa butter substitute, skimmed milk powder, cocoa powder, demineralized whey powder, emulsifier (soy lecithin), sweetener (sucralose), flavoring), milk fat substitute, water, gum arabic, cocoa powder, humectants (glycerol, sorbitol), emulsifier (soy lecithin), acidity regulator (citric acid), flavoring, salt, antioxidant (ascorbic acid), preservative (potassium sorbate), sweetener (sucralose).",
                },
            },
        },
    ],
};