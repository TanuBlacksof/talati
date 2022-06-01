
import Head from 'next/head'
import { useState  , useEffect   } from 'react'
import  {ItemCard}  from "../components/itemCard"

import { PageBanner   } from "../components"
import { FilterTabs  } from "../components/products"


const all = [
  {
      "serial": 12,
      "name": "Barik Besan",
      "category": "flours",
      "weights": "1Kg",
      "coverLink": "https://firebasestorage.googleapis.com/v0/b/talati-2f2a2.appspot.com/o/flours%2FBarik%20Besan?alt=media&token=5becbd47-1ca2-4203-a27e-f25b5ceb8ba2"
  },
  {
      "weights": "100g",
      "serial": 11,
      "coverLink": "https://firebasestorage.googleapis.com/v0/b/talati-2f2a2.appspot.com/o/mixes%2FSambhar%20?alt=media&token=06bb2413-cf1c-4ee1-a6dd-b30000ee7182",
      "name": "Sambhar ",
      "category": "mixes"
  },
  {
      "name": "Dosa ",
      "coverLink": "https://firebasestorage.googleapis.com/v0/b/talati-2f2a2.appspot.com/o/mixes%2FDosa%20?alt=media&token=e993c382-2518-4d02-a87a-5c430e3c9dae",
      "serial": 4,
      "category": "mixes",
      "weights": "200g | 500g"
  },
  {
      "coverLink": "https://firebasestorage.googleapis.com/v0/b/talati-2f2a2.appspot.com/o/desserts%2FRose%20Kulfi?alt=media&token=e68f5a55-bc7a-411d-ae10-2dbca4217830",
      "name": "Rose Kulfi",
      "serial": 3,
      "weights": "100g",
      "category": "dessert"
  },
  {
      "coverLink": "https://firebasestorage.googleapis.com/v0/b/talati-2f2a2.appspot.com/o/mixes%2FChakli?alt=media&token=4d9238bd-5347-4c1d-a4cc-ae60bea33e95",
      "category": "mixes",
      "serial": 6,
      "name": "Chakli",
      "weights": "200g | 500g"
  },
  {
      "coverLink": "https://firebasestorage.googleapis.com/v0/b/talati-2f2a2.appspot.com/o/flours%2FBajra%20Thuli?alt=media&token=a7b0a8be-aadd-4bf8-94ca-d302605b9b96",
      "weights": "500g",
      "category": "flours",
      "name": "Bajra Thuli",
      "serial": 15
  },
  {
      "weights": "50mg | 250mg | 500mg | 1g | 5g | ",
      "serial": 33,
      "category": "spices",
      "name": "Kesar",
      "coverLink": "https://firebasestorage.googleapis.com/v0/b/talati-2f2a2.appspot.com/o/others%2FKesar?alt=media&token=ae747c2d-6def-4591-91cb-38a896784bd4"
  },
  {
      "category": "flours",
      "serial": 26,
      "weights": "500g",
      "name": "Sattu",
      "coverLink": "https://firebasestorage.googleapis.com/v0/b/talati-2f2a2.appspot.com/o/flours%2FSattu?alt=media&token=7153bb9b-e2f8-4647-9d37-c602f246d87a"
  },
  {
      "serial": 14,
      "weights": "12g | 50g | 100g",
      "coverLink": "https://firebasestorage.googleapis.com/v0/b/talati-2f2a2.appspot.com/o/masala%2FPaneer%20Masala?alt=media&token=4b6eb442-8405-4d76-9a26-6f885ecb9c36",
      "category": "spices",
      "name": "Paneer Masala"
  },
  {
      "serial": 7,
      "coverLink": "https://firebasestorage.googleapis.com/v0/b/talati-2f2a2.appspot.com/o/flours%2FThuli%20(Daliya)?alt=media&token=e16c6884-0497-4fe6-8a7d-1f3e882f2ecc",
      "weights": "200g | 500g",
      "category": "flours",
      "name": "Thuli (Daliya)"
  },
  {
      "weights": "60g | 200g",
      "name": "Rose Sharbat Powder",
      "serial": 29,
      "category": "dessert",
      "coverLink": "https://firebasestorage.googleapis.com/v0/b/talati-2f2a2.appspot.com/o/desserts%2FRose%20Sharbat%20Powder?alt=media&token=d89065e3-ed7f-467b-a0c5-e952a314793f"
  },
  {
      "weights": "20g | 50g | 100g | 500g",
      "category": "spices",
      "coverLink": "https://firebasestorage.googleapis.com/v0/b/talati-2f2a2.appspot.com/o/masala%2FMilk%20Masala?alt=media&token=c1ad7be1-0052-45ba-9afd-4b00606cca73",
      "serial": 4,
      "name": "Milk Masala"
  },
  {
      "serial": 5,
      "name": "Vada ",
      "coverLink": "https://firebasestorage.googleapis.com/v0/b/talati-2f2a2.appspot.com/o/mixes%2FVada%20?alt=media&token=8aafba91-11d1-48b9-b45a-8fabe4451370",
      "category": "mixes",
      "weights": "200g | 500g"
  },
  {
      "coverLink": "https://firebasestorage.googleapis.com/v0/b/talati-2f2a2.appspot.com/o/others%2FKala%20Namak?alt=media&token=d93d243e-a643-41ca-a050-8b0cb9b0c48c",
      "weights": "100g | 500g | 1Kg",
      "category": "spices",
      "name": "Kala Namak",
      "serial": 32
  },
  {
      "serial": 1,
      "coverLink": "https://firebasestorage.googleapis.com/v0/b/talati-2f2a2.appspot.com/o/mixes%2FIdli?alt=media&token=8c4bdb85-24c0-472e-bc36-ea2617c97eb6",
      "weights": "200g | 500g | 1Kg",
      "category": "mixes",
      "name": "Idli"
  },
  {
      "serial": 8,
      "weights": "20g | 50g | 100g",
      "coverLink": "https://firebasestorage.googleapis.com/v0/b/talati-2f2a2.appspot.com/o/others%2FCocoa%20Powder?alt=media&token=697a9a94-360d-4ff9-9b74-5f574feba5b7",
      "category": "others",
      "name": "Cocoa Powder"
  },
  {
      "name": "Sambhar Masala ",
      "serial": 12,
      "coverLink": "https://firebasestorage.googleapis.com/v0/b/talati-2f2a2.appspot.com/o/masala%2FSambhar%20Masala%20?alt=media&token=906e6a6c-061e-4ea6-83c7-2e373eb9e9d8",
      "weights": "12g | 50g | 100g | 500g",
      "category": "spices"
  },
  {
      "weights": "12g | 50g | 100g | 250g",
      "serial": 29,
      "category": "spices",
      "coverLink": "https://firebasestorage.googleapis.com/v0/b/talati-2f2a2.appspot.com/o/masala%2FAmchur%20Powder?alt=media&token=1aee0c51-2730-44fd-91c2-f558102877bf",
      "name": "Amchur Powder"
  },
  {
      "serial": 16,
      "name": "Sev",
      "category": "mixes",
      "weights": "400g",
      "coverLink": "https://firebasestorage.googleapis.com/v0/b/talati-2f2a2.appspot.com/o/mixes%2FSev?alt=media&token=f3357809-58fc-490e-98c4-1eab0746654f"
  },
  {
      "coverLink": "https://firebasestorage.googleapis.com/v0/b/talati-2f2a2.appspot.com/o/flours%2FWheat%20Khichda%20(Broken)?alt=media&token=1fa287cb-0c99-4837-a732-0514ba778adc",
      "weights": "500g",
      "serial": 9,
      "name": "Wheat Khichda (Broken)",
      "category": "flours"
  },
  {
      "name": "Kadi ",
      "category": "mixes",
      "weights": "50g | 100g | 125g",
      "serial": 12,
      "coverLink": "https://firebasestorage.googleapis.com/v0/b/talati-2f2a2.appspot.com/o/mixes%2FKadi%20?alt=media&token=76d149f1-f131-4314-a799-3809994f3b28"
  },
  {
      "weights": "50g | 100g | 500g",
      "category": "spices",
      "name": "Jholiya Masala",
      "coverLink": "https://firebasestorage.googleapis.com/v0/b/talati-2f2a2.appspot.com/o/masala%2FJholiya%20Masala?alt=media&token=6f254759-321c-46ac-a9b3-c412d2b72a0e",
      "serial": 23
  },
  {
      "coverLink": "https://firebasestorage.googleapis.com/v0/b/talati-2f2a2.appspot.com/o/others%2FSabudana%20Poha?alt=media&token=be0dd42e-f046-4061-8703-8942e1fd552f",
      "category": "flours",
      "name": "Sabudana Poha",
      "weights": "100g",
      "serial": 28
  },
  {
      "weights": "200g",
      "serial": 26,
      "coverLink": "https://firebasestorage.googleapis.com/v0/b/talati-2f2a2.appspot.com/o/masala%2FRai?alt=media&token=c5020ab6-4cfb-4e06-ac72-f805c188dcdc",
      "category": "spices",
      "name": "Rai"
  },
  {
      "coverLink": "https://firebasestorage.googleapis.com/v0/b/talati-2f2a2.appspot.com/o/all%2Frava.png?alt=media&token=9cbe0d40-7ecb-4317-9f6f-0617105b66e7",
      "weights": "500g | 1Kg",
      "category": "flours",
      "name": "Rava",
      "serial": 5
  },
  {
      "category": "mixes",
      "serial": 14,
      "weights": "200g | 500g",
      "coverLink": "https://firebasestorage.googleapis.com/v0/b/talati-2f2a2.appspot.com/o/mixes%2FRava%20Idli?alt=media&token=6571554b-5358-465c-995f-7fbc4f5ccda4",
      "name": "Rava Idli"
  },
  {
      "weights": "500g",
      "serial": 19,
      "category": "flours",
      "coverLink": "https://firebasestorage.googleapis.com/v0/b/talati-2f2a2.appspot.com/o/flours%2FUrad%20Atta?alt=media&token=781a3708-6f3e-4c78-802c-99a172de515c",
      "name": "Urad Atta"
  },
  {
      "name": "Strawberry Falooda",
      "weights": "100g",
      "serial": 19,
      "coverLink": "https://firebasestorage.googleapis.com/v0/b/talati-2f2a2.appspot.com/o/desserts%2FStrawberry%20Falooda?alt=media&token=2c6bfa21-e809-42ca-a872-e82d8ee252ed",
      "category": "dessert"
  },
  {
      "serial": 27,
      "name": "Makka Poha",
      "coverLink": "https://firebasestorage.googleapis.com/v0/b/talati-2f2a2.appspot.com/o/all%2FMakka%20poha.png?alt=media&token=be12f821-1f43-4edd-a68b-78e7d3fb282e",
      "category": "flours",
      "weights": "400g"
  },
  {
      "name": "Vermicelli Kheer",
      "coverLink": "https://firebasestorage.googleapis.com/v0/b/talati-2f2a2.appspot.com/o/desserts%2FVermicelli%20Kheer?alt=media&token=1bdee033-2967-4a2b-917c-9f38cecf601f",
      "category": "dessert",
      "weights": "125g",
      "serial": 24
  },
  {
      "coverLink": "https://firebasestorage.googleapis.com/v0/b/talati-2f2a2.appspot.com/o/mixes%2FKhatta%20Dhokla?alt=media&token=fcba37df-e5f1-4aaa-9f75-2a3e25b1ba40",
      "category": "mixes",
      "name": "Khatta Dhokla",
      "serial": 13,
      "weights": "200g"
  },
  {
      "coverLink": "https://firebasestorage.googleapis.com/v0/b/talati-2f2a2.appspot.com/o/masala%2F%20Poha%20Masala?alt=media&token=3ede37e7-1d84-4678-88ad-05bd18884fdd",
      "serial": 11,
      "name": " Poha Masala",
      "category": "spices",
      "weights": "12g | 50g | 500g"
  },
  {
      "weights": "50g | 100g-Jar | 100g-Pouch | 400g",
      "category": "others",
      "name": "Baking Soda ",
      "serial": 7,
      "coverLink": "https://firebasestorage.googleapis.com/v0/b/talati-2f2a2.appspot.com/o/others%2FBaking%20Soda%20?alt=media&token=c1bf0dbe-9ec1-4df6-8ba5-36d99b1bd070"
  },
  {
      "serial": 24,
      "coverLink": "https://firebasestorage.googleapis.com/v0/b/talati-2f2a2.appspot.com/o/masala%2FSabudana%20Khichdi%20Masala?alt=media&token=29826474-b3f0-4f04-b0f9-34229acfaf35",
      "weights": "12g | 50g | 100g",
      "category": "spices",
      "name": "Sabudana Khichdi Masala"
  },
  {
      "weights": "500g | 900g | 1kg",
      "name": "Poha (Rice Flakes)",
      "category": "flours",
      "serial": 30,
      "coverLink": "https://firebasestorage.googleapis.com/v0/b/talati-2f2a2.appspot.com/o/flours%2FPoha%20(Rice%20Flakes)?alt=media&token=6eb7bd12-ccdb-407c-b9f5-fcc6ef5a9d7c"
  },
  {
      "category": "others",
      "coverLink": "https://firebasestorage.googleapis.com/v0/b/talati-2f2a2.appspot.com/o/others%2FShakkar%20Bura?alt=media&token=57ca3dfc-da31-44ce-9234-b77f7bc98185",
      "weights": "500g",
      "name": "Shakkar Bura",
      "serial": 3
  },
  {
      "name": "Gota ",
      "category": "mixes",
      "coverLink": "https://firebasestorage.googleapis.com/v0/b/talati-2f2a2.appspot.com/o/mixes%2FGota%20?alt=media&token=fc79e536-5375-4688-82ed-27cb8fba2e4f",
      "serial": 8,
      "weights": "200g | 500g"
  },
  {
      "name": "Baking Powder",
      "coverLink": "https://firebasestorage.googleapis.com/v0/b/talati-2f2a2.appspot.com/o/others%2FBaking%20Powder?alt=media&token=0eaf3a4b-e587-4801-84fd-3c2b89cc8860",
      "serial": 6,
      "weights": "50g | 100g | 400g",
      "category": "others"
  },
  {
      "serial": 7,
      "name": "Moong Bhajiya ",
      "category": "mixes",
      "coverLink": "https://firebasestorage.googleapis.com/v0/b/talati-2f2a2.appspot.com/o/mixes%2FMoong%20Bhajiya%20?alt=media&token=c958f48f-ad72-427c-8b67-43d51ab50ca0",
      "weights": "200g | 400g"
  },
  {
      "coverLink": "https://firebasestorage.googleapis.com/v0/b/talati-2f2a2.appspot.com/o/desserts%2FKesar%20Elaichi%20Ice%20Cream%20?alt=media&token=d0f41009-d909-4726-9a8c-5cfa82e75485",
      "name": "Kesar Elaichi Ice Cream ",
      "serial": 14,
      "category": "dessert",
      "weights": "125g"
  },
  {
      "name": "Aachar Masala",
      "category": "spices",
      "coverLink": "https://firebasestorage.googleapis.com/v0/b/talati-2f2a2.appspot.com/o/masala%2FAachar%20Masala?alt=media&token=26259bff-c79f-4fab-93cf-ad2fa1453b06",
      "weights": "200g | 500g",
      "serial": 1
  },
  {
      "name": "Satvik Singada Atta",
      "coverLink": "https://firebasestorage.googleapis.com/v0/b/talati-2f2a2.appspot.com/o/flours%2FSatvik%20Singada%20Atta?alt=media&token=090d4ffe-0ede-48a2-9a37-0642f3617a1e",
      "weights": "200g | 500g",
      "serial": 23,
      "category": "flours"
  },
  {
      "serial": 7,
      "category": "spices",
      "weights": "12g | 50g | 100g | 250g | 1Kg",
      "name": "Garam Masala",
      "coverLink": "https://firebasestorage.googleapis.com/v0/b/talati-2f2a2.appspot.com/o/masala%2FGaram%20Masala?alt=media&token=4381d9ee-275d-431e-93e6-3fccf26ccd12"
  },
  {
      "serial": 5,
      "coverLink": "https://firebasestorage.googleapis.com/v0/b/talati-2f2a2.appspot.com/o/masala%2FKesariya%20Thandai%20Masala?alt=media&token=7e986be2-ec56-4ea5-9d93-ac4e61a10063",
      "name": "Kesariya Thandai Masala",
      "weights": "100g | 500g",
      "category": "spices"
  },
  {
      "weights": "200g | 500g",
      "category": "others",
      "name": "Tilli",
      "coverLink": "https://firebasestorage.googleapis.com/v0/b/talati-2f2a2.appspot.com/o/others%2FTilli?alt=media&token=a94c0328-47af-4261-832b-41c51a20aa52",
      "serial": 4
  },
  {
      "weights": "125g",
      "coverLink": "https://firebasestorage.googleapis.com/v0/b/talati-2f2a2.appspot.com/o/desserts%2FStrawberry%20Ice%20Cream?alt=media&token=f2ca65ef-a347-4e0d-98da-c47c795b0849",
      "name": "Strawberry Ice Cream",
      "category": "dessert",
      "serial": 17
  },
  {
      "coverLink": "https://firebasestorage.googleapis.com/v0/b/talati-2f2a2.appspot.com/o/desserts%2FVanilla%20Custard?alt=media&token=4824fc79-5109-4014-99d0-ec2942530ced",
      "weights": "50g | 100g | 500g",
      "name": "Vanilla Custard",
      "serial": 6,
      "category": "dessert"
  },
  {
      "name": "Kesar Elaichi Custard",
      "coverLink": "https://firebasestorage.googleapis.com/v0/b/talati-2f2a2.appspot.com/o/desserts%2FKesar%20Elaichi%20Custard?alt=media&token=a267df92-b828-4c9e-9f5f-3cba6bf6f880",
      "category": "dessert",
      "serial": 9,
      "weights": "50g | 100g"
  },
  {
      "coverLink": "https://firebasestorage.googleapis.com/v0/b/talati-2f2a2.appspot.com/o/flours%2FBajra%20Atta?alt=media&token=fe65f6c8-abf4-4317-98c9-37e562b44854",
      "name": "Bajra Atta",
      "serial": 14,
      "weights": "500g",
      "category": "flours"
  },
  {
      "name": "Makkhan Bada",
      "category": "dessert",
      "serial": 26,
      "coverLink": "https://firebasestorage.googleapis.com/v0/b/talati-2f2a2.appspot.com/o/desserts%2FMakkhan%20Bada?alt=media&token=149729a9-e437-43b3-a36a-dbb8f1debc66",
      "weights": "200g | 400g"
  },
  {
      "category": "flours",
      "serial": 18,
      "coverLink": "https://firebasestorage.googleapis.com/v0/b/talati-2f2a2.appspot.com/o/flours%2FMoong%20Atta?alt=media&token=eec33cf8-53d6-4a81-9754-f765b7c4e4ad",
      "name": "Moong Atta",
      "weights": "500g"
  },
  {
      "serial": 31,
      "name": "Sendha Namak",
      "category": "spices",
      "coverLink": "https://firebasestorage.googleapis.com/v0/b/talati-2f2a2.appspot.com/o/others%2FSendha%20Namak?alt=media&token=eb3d0554-2341-4ec4-b818-4a9767a6a847",
      "weights": "100g | 500g | 1Kg"
  },
  {
      "category": "spices",
      "weights": "12g | 50g | 100g | 500g",
      "name": "Chana Masala ",
      "serial": 8,
      "coverLink": "https://firebasestorage.googleapis.com/v0/b/talati-2f2a2.appspot.com/o/masala%2FChana%20Masala%20?alt=media&token=a3757925-58b0-49cd-8104-2b78f8ca5030"
  },
  {
      "serial": 29,
      "category": "flours",
      "name": "Corn Flour ",
      "coverLink": "https://firebasestorage.googleapis.com/v0/b/talati-2f2a2.appspot.com/o/flours%2FCorn%20Flour%20?alt=media&token=6299d93e-400f-411e-8a53-77dd24a9e058",
      "weights": "50g | 100g | 400g | 1Kg"
  },
  {
      "coverLink": "https://firebasestorage.googleapis.com/v0/b/talati-2f2a2.appspot.com/o/masala%2FRai%20Dal?alt=media&token=b0c7f197-6db0-42d3-8a69-941ee0586822",
      "category": "spices",
      "name": "Rai Dal",
      "serial": 25,
      "weights": "200g | 500g"
  },
  {
      "coverLink": "https://firebasestorage.googleapis.com/v0/b/talati-2f2a2.appspot.com/o/desserts%2FRajbhog%20Falooda?alt=media&token=263925ba-dd37-408c-acb9-0cc0083a17d7",
      "weights": "100g",
      "name": "Rajbhog Falooda",
      "serial": 23,
      "category": "dessert"
  },
  {
      "name": "Ready-to-eat Rasgulla",
      "weights": "1Kg",
      "coverLink": "https://firebasestorage.googleapis.com/v0/b/talati-2f2a2.appspot.com/o/desserts%2FReady-to-eat%20Rasgulla?alt=media&token=192c93c2-feb8-4dbc-965f-6b7d6e5719d5",
      "serial": 28,
      "category": "dessert"
  },
  {
      "category": "dessert",
      "name": "Rose Falooda",
      "coverLink": "https://firebasestorage.googleapis.com/v0/b/talati-2f2a2.appspot.com/o/desserts%2FRose%20Falooda?alt=media&token=91167067-ff94-4c1e-9b9e-80538b905364",
      "serial": 21,
      "weights": "100g"
  },
  {
      "coverLink": "https://firebasestorage.googleapis.com/v0/b/talati-2f2a2.appspot.com/o/flours%2FMakka%20Atta%20?alt=media&token=8ebbc840-c3d7-40a4-83a1-b152f6d5151a",
      "category": "flours",
      "weights": "500g | 1Kg",
      "name": "Makka Atta ",
      "serial": 16
  },
  {
      "coverLink": "https://firebasestorage.googleapis.com/v0/b/talati-2f2a2.appspot.com/o/desserts%2FChocolate%20Custard?alt=media&token=3c6571ff-e2ea-4a33-ab22-9914f30c7cc6",
      "weights": "50g | 100g",
      "serial": 8,
      "category": "dessert",
      "name": "Chocolate Custard"
  },
  {
      "serial": 31,
      "category": "flours",
      "name": "Sabudana Premium ",
      "coverLink": "https://firebasestorage.googleapis.com/v0/b/talati-2f2a2.appspot.com/o/others%2FSabudana%20Premium%20?alt=media&token=ab5b1e89-4cb8-45fb-a59c-785fa22844f2",
      "weights": "200g | 500g | 30Kg | "
  },
  {
      "serial": 19,
      "category": "spices",
      "name": "Pasta Masala ",
      "coverLink": "https://firebasestorage.googleapis.com/v0/b/talati-2f2a2.appspot.com/o/masala%2FPasta%20Masala%20?alt=media&token=38ea8235-c2b5-4fea-85f0-c35fbff7c06c",
      "weights": "50g"
  },
  {
      "coverLink": "https://firebasestorage.googleapis.com/v0/b/talati-2f2a2.appspot.com/o/desserts%2FKhus%20Falooda?alt=media&token=bb653db8-eec5-4d58-9686-cb2735640c19",
      "serial": 20,
      "name": "Khus Falooda",
      "category": "dessert",
      "weights": "100g"
  },
  {
      "serial": 17,
      "weights": "500g",
      "coverLink": "https://firebasestorage.googleapis.com/v0/b/talati-2f2a2.appspot.com/o/flours%2FMakka%20Thuli?alt=media&token=570eeb4b-6657-4a40-8158-354a030fa061",
      "category": "flours",
      "name": "Makka Thuli"
  },
  {
      "coverLink": "https://firebasestorage.googleapis.com/v0/b/talati-2f2a2.appspot.com/o/mixes%2FUpma?alt=media&token=68e7e6e2-6771-4278-801a-e0650f39d4eb",
      "name": "Upma",
      "category": "mixes",
      "weights": "200g",
      "serial": 10
  },
  {
      "coverLink": "https://firebasestorage.googleapis.com/v0/b/talati-2f2a2.appspot.com/o/desserts%2FPineapple%20Ice%20Cream%20?alt=media&token=99f44ce8-1383-471a-9d8a-8712906512da",
      "serial": 16,
      "category": "dessert",
      "weights": "125g",
      "name": "Pineapple Ice Cream "
  },
  {
      "name": "Suji",
      "category": "flours",
      "weights": "500g | 1Kg",
      "coverLink": "https://firebasestorage.googleapis.com/v0/b/talati-2f2a2.appspot.com/o/flours%2FSuji?alt=media&token=76edcca7-244c-4bc3-8e9e-55219d558902",
      "serial": 6
  },
  {
      "weights": "200g | 500g",
      "serial": 25,
      "category": "flours",
      "name": "Mordhan",
      "coverLink": "https://firebasestorage.googleapis.com/v0/b/talati-2f2a2.appspot.com/o/flours%2FMordhan?alt=media&token=9cf9948a-1c3c-4db1-9825-9db7c818f67d"
  },
  {
      "coverLink": "https://firebasestorage.googleapis.com/v0/b/talati-2f2a2.appspot.com/o/flours%2FRaagi%20Atta?alt=media&token=2d142965-e71a-4a4e-9150-ad657f9e80a6",
      "weights": "500g",
      "serial": 21,
      "name": "Raagi Atta",
      "category": "flours"
  },
  {
      "category": "flours",
      "name": "Bafla Atta",
      "weights": "1Kg | 5Kg",
      "serial": 3,
      "coverLink": "https://firebasestorage.googleapis.com/v0/b/talati-2f2a2.appspot.com/o/flours%2FBafla%20Atta?alt=media&token=645fbfe5-57e6-4a66-be7b-9b11593cca53"
  },
  {
      "serial": 8,
      "coverLink": "https://firebasestorage.googleapis.com/v0/b/talati-2f2a2.appspot.com/o/flours%2FWheat%20Khichda%20(Whole)?alt=media&token=43b51d1a-0ec6-4a5e-a1c9-7366754ab242",
      "category": "flours",
      "weights": "500g",
      "name": "Wheat Khichda (Whole)"
  },
  {
      "category": "dessert",
      "coverLink": "https://firebasestorage.googleapis.com/v0/b/talati-2f2a2.appspot.com/o/desserts%2FButterscotch%20Custard?alt=media&token=3e937ed2-69c6-4ddc-9447-6f8e2de186b5",
      "name": "Butterscotch Custard",
      "serial": 10,
      "weights": "50g | 100g"
  },
  {
      "coverLink": "https://firebasestorage.googleapis.com/v0/b/talati-2f2a2.appspot.com/o/flours%2FChakki%20Wheat%20Atta%20?alt=media&token=dee53698-7763-478b-953a-e9a2b6435735",
      "weights": "1Kg | 5Kg",
      "serial": 2,
      "category": "flours",
      "name": "Chakki Wheat Atta "
  },
  {
      "weights": "200g | 500g | 1Kg",
      "serial": 11,
      "name": "Mota Besan",
      "coverLink": "https://firebasestorage.googleapis.com/v0/b/talati-2f2a2.appspot.com/o/flours%2FMota%20Besan?alt=media&token=514b24c6-5051-4f19-b260-70a92420f863",
      "category": "flours"
  },
  {
      "coverLink": "https://firebasestorage.googleapis.com/v0/b/talati-2f2a2.appspot.com/o/others%2FKesar%20Powder?alt=media&token=c44f3080-95c1-4fac-88f6-0eec80b54862",
      "weights": "1g",
      "serial": 34,
      "category": "spices",
      "name": "Kesar Powder"
  },
  {
      "weights": "500g | 1Kg",
      "coverLink": "https://firebasestorage.googleapis.com/v0/b/talati-2f2a2.appspot.com/o/flours%2FMaida?alt=media&token=84713ecd-d55e-45ef-ba64-2e1df8468b71",
      "name": "Maida",
      "serial": 4,
      "category": "flours"
  },
  {
      "weights": "12g | 50g | 100g | 500g",
      "coverLink": "https://firebasestorage.googleapis.com/v0/b/talati-2f2a2.appspot.com/o/masala%2FPav%20Bhaji%20Masala?alt=media&token=6c122689-8665-4fcb-a0f3-c369e119c3fc",
      "serial": 10,
      "category": "spices",
      "name": "Pav Bhaji Masala"
  },
  {
      "coverLink": "https://firebasestorage.googleapis.com/v0/b/talati-2f2a2.appspot.com/o/masala%2FJaljeera%20Masala%20?alt=media&token=c1d683af-0934-461e-9c85-8a554012df19",
      "weights": "12g | 50g | 500g",
      "serial": 22,
      "name": "Jaljeera Masala ",
      "category": "spices"
  },
  {
      "coverLink": "https://firebasestorage.googleapis.com/v0/b/talati-2f2a2.appspot.com/o/desserts%2FVanilla%20Ice%20Cream%20?alt=media&token=9f1c7da2-f56c-4b6e-8667-a30eb795f95b",
      "name": "Vanilla Ice Cream ",
      "category": "dessert",
      "weights": "125g",
      "serial": 11
  },
  {
      "category": "spices",
      "name": "Panipuri Masala",
      "weights": "12g | 50g | 500g",
      "coverLink": "https://firebasestorage.googleapis.com/v0/b/talati-2f2a2.appspot.com/o/masala%2FPanipuri%20Masala?alt=media&token=22cbd4e7-19ac-4369-a770-b8abc6a72ec8",
      "serial": 21
  },
  {
      "coverLink": "https://firebasestorage.googleapis.com/v0/b/talati-2f2a2.appspot.com/o/desserts%2FButterscotch%20Falooda?alt=media&token=1d441c11-997c-4930-8d09-3fb2d4cd3b56",
      "serial": 22,
      "weights": "100g",
      "name": "Butterscotch Falooda",
      "category": "dessert"
  },
  {
      "weights": "12g | 50g | 100g | 500g",
      "coverLink": "https://firebasestorage.googleapis.com/v0/b/talati-2f2a2.appspot.com/o/masala%2FKitchen%20King?alt=media&token=0af167bd-3ce3-419d-847d-bb2094a557af",
      "serial": 13,
      "category": "spices",
      "name": "Kitchen King"
  },
  {
      "coverLink": "https://firebasestorage.googleapis.com/v0/b/talati-2f2a2.appspot.com/o/masala%2FGreen%20Chilli%20Pickle%20Masala?alt=media&token=6ad5aabc-ce92-4c65-9fb5-3732709e66ee",
      "category": "spices",
      "weights": "200g",
      "name": "Green Chilli Pickle Masala",
      "serial": 2
  },
  {
      "name": "Dahi Vada Masala",
      "serial": 16,
      "weights": "20g | 50g",
      "category": "spices",
      "coverLink": "https://firebasestorage.googleapis.com/v0/b/talati-2f2a2.appspot.com/o/masala%2FDahi%20Vada%20Masala?alt=media&token=9496a565-b0ee-4445-b277-cb348a7c7872"
  },
  {
      "weights": "500g",
      "name": "Jwar Atta",
      "category": "flours",
      "coverLink": "https://firebasestorage.googleapis.com/v0/b/talati-2f2a2.appspot.com/o/flours%2FJwar%20Atta?alt=media&token=7cad2d49-340a-4e96-b2fc-a409bef713b2",
      "serial": 13
  },
  {
      "coverLink": "https://firebasestorage.googleapis.com/v0/b/talati-2f2a2.appspot.com/o/desserts%2FJalebi?alt=media&token=7fcb65cf-8c0e-4fc2-b66e-364710a02063",
      "serial": 27,
      "name": "Jalebi",
      "category": "dessert",
      "weights": "200g"
  },
  {
      "name": "Rice Kheer",
      "category": "dessert",
      "coverLink": "https://firebasestorage.googleapis.com/v0/b/talati-2f2a2.appspot.com/o/desserts%2FRice%20Kheer?alt=media&token=dd698318-333d-448e-a63b-a31aba5cd990",
      "serial": 25,
      "weights": "125g"
  },
  {
      "category": "dessert",
      "name": "Butter Scotch Ice Cream ",
      "coverLink": "https://firebasestorage.googleapis.com/v0/b/talati-2f2a2.appspot.com/o/desserts%2FButter%20Scotch%20Ice%20Cream%20?alt=media&token=6660af00-990b-4f0d-91ee-d2750a90fcc9",
      "serial": 12,
      "weights": "125g"
  },
  {
      "weights": "100g | 500g",
      "coverLink": "https://firebasestorage.googleapis.com/v0/b/talati-2f2a2.appspot.com/o/desserts%2FKesar%20Kulfi?alt=media&token=99e47982-260c-4bac-97da-57287cf32e7b",
      "serial": 2,
      "category": "dessert",
      "name": "Kesar Kulfi"
  },
  {
      "weights": "500g",
      "coverLink": "https://firebasestorage.googleapis.com/v0/b/talati-2f2a2.appspot.com/o/flours%2FRice%20Atta?alt=media&token=8cd15dfd-b2fb-4354-8859-9addb4eb69ab",
      "name": "Rice Atta",
      "serial": 20,
      "category": "flours"
  },
  {
      "category": "flours",
      "coverLink": "https://firebasestorage.googleapis.com/v0/b/talati-2f2a2.appspot.com/o/flours%2FBarley%20Flour%20(Jau%20Atta)?alt=media&token=beb99794-e8ba-4e05-a8db-49a297dc8bb9",
      "name": "Barley Flour (Jau Atta)",
      "weights": "500g",
      "serial": 22
  },
  {
      "name": "Chandosi Wheat Atta",
      "serial": 1,
      "weights": "5Kg",
      "coverLink": "https://firebasestorage.googleapis.com/v0/b/talati-2f2a2.appspot.com/o/flours%2FChandosi%20Wheat%20Atta?alt=media&token=bc8a2954-1c30-49a8-bf8f-4696c8d19999",
      "category": "flours"
  },
  {
      "serial": 30,
      "coverLink": "https://firebasestorage.googleapis.com/v0/b/talati-2f2a2.appspot.com/o/masala%2FKasuri%20Methi?alt=media&token=02493489-2fc8-46d4-9c2e-8d6c09b7f246",
      "weights": "25g | 50g | 100g",
      "category": "spices",
      "name": "Kasuri Methi"
  },
  {
      "coverLink": "https://firebasestorage.googleapis.com/v0/b/talati-2f2a2.appspot.com/o/flours%2FSada%20Besan?alt=media&token=b77bb5c5-9d7f-4aac-8626-2f3f7f1b2ead",
      "name": "Sada Besan",
      "weights": "200g | 500g | 1Kg",
      "serial": 10,
      "category": "flours"
  },
  {
      "serial": 20,
      "weights": "12g | 50g | 100g | 500g",
      "name": "Garadu Masala",
      "category": "spices",
      "coverLink": "https://firebasestorage.googleapis.com/v0/b/talati-2f2a2.appspot.com/o/masala%2FGaradu%20Masala?alt=media&token=b19381b9-a758-43e6-9004-3f14a7eff362"
  },
  {
      "weights": "100g",
      "coverLink": "https://firebasestorage.googleapis.com/v0/b/talati-2f2a2.appspot.com/o/desserts%2FKaju%20Kewra%20Kulfi?alt=media&token=de8bfcb9-b730-48e6-a86c-c84d5af0df26",
      "serial": 4,
      "category": "dessert",
      "name": "Kaju Kevda Kulfi"
  },
  {
      "weights": "100g",
      "name": "Natural Gond",
      "category": "others",
      "serial": 5,
      "coverLink": "https://firebasestorage.googleapis.com/v0/b/talati-2f2a2.appspot.com/o/others%2FNatural%20Gond?alt=media&token=3f66d73e-6607-4ad4-8139-7b262cd76b38"
  },
  {
      "category": "dessert",
      "coverLink": "https://firebasestorage.googleapis.com/v0/b/talati-2f2a2.appspot.com/o/desserts%2FMango%20Ice%20Cream%20?alt=media&token=de7a5fc9-8af7-4776-af70-62dfe73efbbd",
      "name": "Mango Ice Cream ",
      "serial": 15,
      "weights": "125g"
  },
  {
      "category": "mixes",
      "serial": 3,
      "coverLink": "https://firebasestorage.googleapis.com/v0/b/talati-2f2a2.appspot.com/o/mixes%2FDahi%20Vada?alt=media&token=a19e9052-82ad-415e-96d1-718c87c89440",
      "weights": "200g | 500g",
      "name": "Dahi Vada "
  },
  {
      "name": "Gulab Jamun",
      "serial": 1,
      "category": "dessert",
      "coverLink": "https://firebasestorage.googleapis.com/v0/b/talati-2f2a2.appspot.com/o/desserts%2FGulab%20Jamun?alt=media&token=c1acdaa7-720e-46ac-8164-51b92186f4ea",
      "weights": "200g | 400g | 1Kg"
  },
  {
      "weights": "12g | 50g | 100g | 500g",
      "name": "Chaat Masala",
      "coverLink": "https://firebasestorage.googleapis.com/v0/b/talati-2f2a2.appspot.com/o/masala%2FChaat%20Masala?alt=media&token=467cd11c-125b-4ec5-9b55-0b8e37991fcb",
      "category": "spices",
      "serial": 9
  },
  {
      "coverLink": "https://firebasestorage.googleapis.com/v0/b/talati-2f2a2.appspot.com/o/masala%2FButter%20Milk%20Masala?alt=media&token=2e08ba58-7bba-4c78-af99-b95fcc379f73",
      "category": "spices",
      "weights": "50g | 100g | 500g",
      "name": "Butter Milk Masala",
      "serial": 6
  },
  {
      "category": "spices",
      "name": "Noodles Masala",
      "coverLink": "https://firebasestorage.googleapis.com/v0/b/talati-2f2a2.appspot.com/o/masala%2FNoodles%20Masala?alt=media&token=b247979c-c3ea-4b5c-9c6c-df0f61db6c4e",
      "weights": "12g | 50g | 500g",
      "serial": 17
  },
  {
      "weights": "200g | 500g",
      "coverLink": "https://firebasestorage.googleapis.com/v0/b/talati-2f2a2.appspot.com/o/masala%2FSarso%20Dal?alt=media&token=3c733c45-f414-4074-9261-23c4564341e1",
      "serial": 27,
      "name": "Sarso Dal",
      "category": "spices"
  },
  {
      "weights": "200g | 500g",
      "coverLink": "https://firebasestorage.googleapis.com/v0/b/talati-2f2a2.appspot.com/o/mixes%2FNylon%20Khaman?alt=media&token=c7c93ee0-9cad-4d24-ad17-098150436f51",
      "category": "mixes",
      "serial": 15,
      "name": "Nylon Khaman"
  },
  {
      "category": "spices",
      "coverLink": "https://firebasestorage.googleapis.com/v0/b/talati-2f2a2.appspot.com/o/masala%2FShahi%20Pulao%2FBiryani%20Masala?alt=media&token=30b8e8d1-4ee1-47d7-b097-c7befc0c8fd1",
      "serial": 15,
      "weights": "12g | 50g | 100g",
      "name": "Shahi Pulao/Biryani Masala"
  },
  {
      "category": "dessert",
      "name": "Chocolate Ice Cream ",
      "coverLink": "https://firebasestorage.googleapis.com/v0/b/talati-2f2a2.appspot.com/o/desserts%2FChocolate%20Ice%20Cream%20?alt=media&token=e49cb7fe-d030-438d-8357-82b94b1918ff",
      "serial": 13,
      "weights": "125g"
  },
  {
      "weights": "20g | 50g | 100g",
      "serial": 3,
      "coverLink": "https://firebasestorage.googleapis.com/v0/b/talati-2f2a2.appspot.com/o/masala%2FNimbu%20Chatni%2FAachar%20Masala?alt=media&token=0c41ce2d-2c2b-461c-b658-c3370917dbf5",
      "category": "spices",
      "name": "Nimbu Chatni/Aachar Masala"
  },
  {
      "weights": "12g | 50g",
      "coverLink": "https://firebasestorage.googleapis.com/v0/b/talati-2f2a2.appspot.com/o/masala%2FTea%20Masala?alt=media&token=289eaea1-a122-4420-a266-628032d41298",
      "name": "Tea Masala",
      "serial": 18,
      "category": "spices"
  },
  {
      "coverLink": "https://firebasestorage.googleapis.com/v0/b/talati-2f2a2.appspot.com/o/others%2FDrinking%20Chocolate%20Powder?alt=media&token=5e68b48d-9fd7-44a5-99a2-0b560cb6d1cf",
      "weights": "20g | 50g | 100g | 500g",
      "name": "Drinking Chocolate Powder",
      "serial": 9,
      "category": "others"
  },
  {
      "category": "dessert",
      "coverLink": "https://firebasestorage.googleapis.com/v0/b/talati-2f2a2.appspot.com/o/desserts%2FStrawberry%20Custard?alt=media&token=479446e5-1f3d-4b6d-8237-5cfc207cbf6f",
      "weights": "50g | 100g",
      "name": "Strawberry Custard",
      "serial": 7
  },
  {
      "name": "Satvik Rajgira Atta",
      "category": "flours",
      "serial": 24,
      "weights": "200g | 500g",
      "coverLink": "https://firebasestorage.googleapis.com/v0/b/talati-2f2a2.appspot.com/o/flours%2FSatvik%20Rajgira%20Atta?alt=media&token=e2843fda-a682-455e-81c0-5fba403337a4"
  },
  {
      "name": "Gud ",
      "weights": "950g | Pouch | 950g | Jar",
      "serial": 1,
      "coverLink": "https://firebasestorage.googleapis.com/v0/b/talati-2f2a2.appspot.com/o/others%2FGud%20?alt=media&token=e6eed30a-6581-40e8-903e-a43f490c7b24",
      "category": "others"
  },
  {
      "serial": 18,
      "weights": "100g",
      "name": "Vanilla Falooda",
      "category": "dessert",
      "coverLink": "https://firebasestorage.googleapis.com/v0/b/talati-2f2a2.appspot.com/o/desserts%2FVanilla%20Falooda?alt=media&token=53ead26a-2d08-4de8-aed1-0d7de5fac79c"
  },
  {
      "weights": "12g | 50g | 100g",
      "serial": 28,
      "category": "spices",
      "name": "Kashmiri Mirch",
      "coverLink": "https://firebasestorage.googleapis.com/v0/b/talati-2f2a2.appspot.com/o/masala%2FKashmiri%20Mirch?alt=media&token=24de4d6b-f377-4a34-9d64-df959e6d10b3"
  },
  {
      "coverLink": "https://firebasestorage.googleapis.com/v0/b/talati-2f2a2.appspot.com/o/others%2FPisi%20Shakkar?alt=media&token=a76bf51b-4838-41d7-a836-d1c37327be29",
      "category": "others",
      "serial": 2,
      "name": "Pisi Shakkar",
      "weights": "500g"
  },
  {
      "name": "Uttapam ",
      "serial": 9,
      "weights": "200g | 500g",
      "coverLink": "https://firebasestorage.googleapis.com/v0/b/talati-2f2a2.appspot.com/o/all%2FUtappam.png?alt=media&token=efe6d9bf-243e-4506-9fa2-f91f98ca7882",
      "category": "mixes"
  },
  {
      "weights": "100g",
      "name": "Mango Kulfi",
      "category": "dessert",
      "coverLink": "https://firebasestorage.googleapis.com/v0/b/talati-2f2a2.appspot.com/o/desserts%2FMango%20Kulfi?alt=media&token=4a881040-3a1b-491e-9a58-c072db7743fd",
      "serial": 5
  },
  {
      "category": "mixes",
      "name": "Khaman ",
      "serial": 2,
      "weights": "200g | 500g | 1Kg",
      "coverLink": "https://firebasestorage.googleapis.com/v0/b/talati-2f2a2.appspot.com/o/mixes%2FKhaman%20?alt=media&token=9361dce5-02f9-4f9a-b7d6-263760931b5a"
  }
] 


export default function Home( { data }) {

  const [ activeCategory , changeCategory  ] = useState ("all");
  const [ endIndex , setEndIndex ] = useState ( 6 )
  const [ displayData , setDisplayData ] = useState ( all )


  const incrementEndIndex =  () =>  {
    console.log ( endIndex )
    setEndIndex ( prev => {
      return prev + 6 ;
   })
  }

  useEffect (() =>{
    setEndIndex ( 6 )
    if ( activeCategory == "all")  setDisplayData(all )
    else setDisplayData(  all.filter( i => i.category == activeCategory ))
  } , [activeCategory ])

  return (
    < >
      <Head>
        <title>talati easy foods - Home</title>
        <meta name="description" content="Explore our wide range of products" />
        <link rel="icon" href="/favicon.png" />
      </Head>

     < PageBanner  bannerImg ="bg-product_banners"  text="Products"/>
     < FilterTabs  handler={ changeCategory }  active={ activeCategory } />
      <section className='max-w-screen-2xl mx-auto flex flex-wrap gap-6 lg:gap-10 items-center justify-center'>
        { displayData.slice( 0 , endIndex ).map (( i , index ) =>{
          return <ItemCard data={i} key={ index }  /> 
        })}


      <div className='w-full grid place-content-center blade-y-margin'> { endIndex  < displayData.length ? 
                <button onClick={ incrementEndIndex } className='mx-auto  hero-btn text-red border-red hover:bg-red hover:text-white '> 
              { endIndex == displayData.length ? "load More" :"Load Less"}
            </button>
            :""}    
       </div>
     </section>

    </>
  )
};

