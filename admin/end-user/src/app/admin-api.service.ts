import { Injectable } from '@angular/core';

@Injectable()
export class AdminApiService {

  foods = [
    {
      id: 1,
      name: 'CaDe double Special',
      label: 'ካዴ ደብል ልዩ',
      food_type: 'generic',
      price: '80',
      place: '',
      address: 'Cade Burger Bole, around German bar and Restaurant.'

    },

    {

      id: 2,
      name: 'T Bone Steak, Beef Ribs and Buffalo wings',
      label: 'ቲ ቦን ስቴክ ፣ የበሬ ጎድን ፣ ቡፋሎ ዊንግስ',
      food_type: 'generic',
      price: '420',
      place: '',
      address: 'Spurs Stake Bole Medhanialem. Abyssinia Bldg.'

    },

    {

      id: 3,
      name: 'American breakfast',
      label: 'አሜሪካ ቁርስ',
      food_type: 'generic',
      price: '120',
      place: '',
      address: ' My burger, On the road from Bole medhanialem to Dildiy'

    },

    {

      id: 4,
      name: 'beef pizza',
      label: 'የበሬ ፒዛ',
      food_type: 'generic',
      price: '120',
      place: '',
      address: 'wow burger  Bole, next to Natani cafe.'

    },

    {

      id: 5,
      name: 'Roasted Chicken',
      label: 'አሮስቶ',
      food_type: 'generic',
      price: '230',
      place: '',
      address: 'Sunshine chicken house Gerji Mebrat hayel, in front of Safeway supermarket.'

    },

    {

      id: 6,
      name: 'Chicken Breast',
      label: 'የዶሮ ደረት',
      food_type: 'generic',
      price: '150',
      place: '',
      address: 'Vine Bar and Restaurant Dembel on last floor'

    },

    {

      id: 7,
      name: 'cake/Vanilla Shake',
      label: 'ኬክና ቫኒላ ሼክ',
      food_type: '',
      price: '30/60',
      place: '',
      address: 'My Burger Megengha, Zefemesh mall 3rd floor.'

    },

    {

      id: 8,
      name: 'Margareta Pizza',
      label: 'ማርጋሬት ፒዛ',
      food_type: 'pizza',
      price: '100',
      place: '',
      address: 'Tivoli Restaurant Around Sunshine, Inside Activ8 recreation center.'

    },

    {

      id: 9,
      name: 'Lasagna with side dish salad',
      label: 'ላዛኛ በሰላጣ',
      food_type: 'generic',
      price: '160/180',
      place: '',
      address: 'Fusion Bistro Bole, in front of monarch hotel'

    },

    {

      id: 10,
      name: 'House special 50 cm Pizza',
      label: 'የቤት ልዩ 50 ሴንቲሜትር ፒዛ',
      food_type: 'pizza',
      price: '300',
      place: '',
      address: 'Food WorldJemo, next to Allmart Supermarket'

    },

    {

      id: 11,
      name: 'Celavie Chicken Special Burger',
      label: 'ሴላቪ ዶሮ ልዩ በርገር',
      food_type: 'burger',
      price: '126',
      place: 'Celavie',
      address: 'Bole, next to moha building.'

    },

    {

      id: 12,
      name: 'Ful',
      label: 'ፉል',
      food_type: 'generic',
      price: '85',
      place: 'Kategna',
      address: 'Bole before reaching noc, next to red bean cafe or kve lounge'

    },

    {

      id: 13,
      name: 'French Toast with banana and strawberries',
      label: 'ፍሬንች ቶስት በሙዝ እና እንጆሪ',
      food_type: 'generic',
      price: '80',
      place: 'My Burger',
      address: 'Bole, from Bole Medhanialem on the road to dildy'

    },

    {

      id: 14,
      name: 'Beyaynet',
      label: 'በየአይነት',
      food_type: 'generic',
      price: '80',
      place: 'Vardas',
      address: 'Getu commercial 5th floor'

    },

    {

      id: 15,
      name: 'Royal Clubs',
      label: 'ሮያል ክለብ',
      food_type: 'burger',
      price: '280',
      place: 'The Brick House',
      address: 'Bole, in front of fresh touch (Around Novis Supermarket)'

    },

    {

      id: 16,
      name: 'Chicken Parmesan',
      label: 'ዶሮ ፓርሜሳን',
      food_type: 'generic',
      price: '165',
      place: 'Millifulis',
      address: 'Around Biserate Gebriel'

    },

    {

      id: 17,
      name: 'Sishu BBQ Burger',
      label: 'ሲሹ ባርበኪው በርገር',
      food_type: 'burger',
      price: '220',
      place: 'Sishu',
      address: 'Kera'

    },

    {

      id: 18,
      name: 'Grilled nile perch with rice and vegetables',
      label: 'የተጠበሰ ናይል ፐርች በሩዝና አትክልት',
      food_type: 'generic',
      price: '140',
      place: 'Ras Hotel',
      address: 'Biherawi'

    },

    {

      id: 19,
      name: 'Fried chicken/fried fish sandwich',
      label: 'የተጠበሰ ዶሮና የተጠበሰ አሳ ሳንድዊች',
      food_type: 'generic',
      price: '140/70.',
      place: '',
      address: 'Dodi restaurant, Bolé Medhanialem infront of Tomoca bldg.'

    },

    {

      id: 20,
      name: 'Carbonara telatelli with side dish salad',
      label: 'ካርቦናራ ቴላቴሊ በሰላጣ',
      food_type: 'generic',
      price: '120/140',
      place: 'Bella Pasta and Pizza',
      address: 'Bole, behind Bole Medhanyalem next to Tomocca'

    },

    {

      id: 21,
      name: 'Special salad',
      label: 'ልዩ ሰላጣ',
      food_type: 'generic',
      price: '85',
      place: 'Africana restaurant',
      address: 'Arround sarbet'

    },

    {

      id: 22,
      name: 'Chicken Fajita',
      label: 'ዶሮ ፋጂታ',
      food_type: 'generic',
      price: '140/160',
      place: 'Millifulis',
      address: 'Around Biserate Gebriel'

    },

    {

      id: 23,
      name: 'Maseno Special',
      label: 'የማንሴዮ ልዩ',
      food_type: 'generic',
      price: '250',
      place: 'Maseno Restaurant',
      address: 'Bole, Sheger building infont of Bon Bar.'

    },

    {

      id: 24,
      name: 'Combo',
      label: 'ድብልቅ',
      food_type: 'generic',
      price: '120',
      place: 'Bella Pasta',
      address: 'Bole, next to abyssinia'

    },

    {

      id: 25,
      name: 'Lasagna',
      label: 'ላዛኛ',
      food_type: 'generic',
      price: '98',
      place: 'Natani',
      address: 'In front of Millennium Hall'

    },

    {

      id: 26,
      name: 'Shekila Tibs',
      label: 'ሸክላ ጥብስ',
      food_type: 'generic',
      price: '80',
      place: 'Bruno',
      address: 'Atlas, infront of EU. Around desalegn hotel'

    },

    {

      id: 27,
      name: 'Special Pizza',
      label: 'ልዩ ፒዛ',
      food_type: 'pizza',
      price: '200',
      place: 'Millifulis',
      address: 'Around Biserate Gebriel'

    },

    {

      id: 28,
      name: 'Fish Gulash',
      label: 'አሳ ጉላሽ',
      food_type: 'generic',
      price: '90',
      place: 'Vardas',
      address: 'Getu commercial 5th floor'

    },

    {

      id: 29,
      name: 'Seasoning fish &compan chicken with steamed rice',
      label: 'ሲዝኒንግ አሳና ኮምፓን ዶሮ በተቀቀለ ሩዝ',
      food_type: 'generic',
      price: '480',
      place: 'Chinese restautant',
      address: 'Bole next to Zanzibar'

    },

    {

      id: 30,
      name: 'Nutella rolls',
      label: 'ኑቴላ ሮልስ',
      food_type: 'generic',
      price: '65',
      place: 'Debonairs',
      address: 'Bole Atlas, next to Efoy Hotel'

    },

    {

      id: 31,
      name: 'Mashable Burger',
      label: 'ማሸብል በርገር',
      food_type: 'generic',
      price: '180',
      place: 'Brick house',
      address: 'Bole, Novis in front of fresh touch'

    },

    {

      id: 32,
      name: 'Chicken Parmesan',
      label: 'ዶሮ ፓርሜሳን',
      food_type: 'generic',
      price: '165',
      place: 'Millifulis',
      address: 'Around Biserate Gebriel'

    },

    {

      id: 33,
      name: 'California',
      label: 'ካሊፎርኒአ',
      food_type: 'generic',
      price: '22',
      place: 'Msk Cafe and restaurant',
      address: 'Around empiral hotel'

    },

    {

      id: 34,
      name: 'Special Omlet',
      label: 'ልዩ ኦምሌት',
      food_type: 'generic',
      price: '68',
      place: 'La Parisiene',
      address: 'Bole, Next to Bole printing press'

    },

    {

      id: 35,
      name: 'Beef shawarma',
      label: 'ቢፍ ሽዋርማ',
      food_type: 'generic',
      price: '120',
      place: 'Wow Burger',
      address: 'Bole, In front of snap plaza bole'

    },

    {

      id: 36,
      name: 'Sekalopini',
      label: 'ሴካሎፒኒ',
      food_type: 'generic',
      price: '105',
      place: 'Pizza Corner',
      address: 'Mexico, next to Dafrique hotel'

    },

    {

      id: 37,
      name: 'Alfedero',
      label: 'አልፍሬዶ',
      food_type: 'generic',
      price: '180',
      place: 'Dodi',
      address: 'Tele on the way to sarbet'

    },

    {

      id: 38,
      name: 'Baklava',
      label: 'ባክላቫ',
      food_type: '',
      price: '13',
      place: 'Belay Tekelu',
      address: 'Ledeta Condominium.'

    },

    {

      id: 39,
      name: 'Kitfo',
      label: 'ክትፎ',
      food_type: 'generic',
      price: '200',
      place: 'Yohanes kitfo',
      address: 'Bole bras, behind myburger.'

    },

    {

      id: 40,
      name: 'Wow Special Pizza',
      label: 'ዋው ልዩ ፒዛ',
      food_type: 'pizza',
      price: '170',
      place: 'Wow Burger and pizza',
      address: 'Bole, In front of Snap Plaza'

    },

    {

      id: 41,
      name: 'Food world Double cheeseburger',
      label: 'ደብል ቺዝ በርገር',
      food_type: 'generic',
      price: '85',
      place: 'Food world',
      address: 'Jemo, Adeba Building 2nd floor (Almart Jerba)'

    },

    {

      id: 42,
      name: 'Triple Pizza (Size: Small)',
      label: 'ትሪፕል ፒዛ ትንሽ',
      food_type: 'pizza',
      price: '180',
      place: 'Debonairs',
      address: 'Atlas, In front of Washington Hotel.'

    },

    {

      id: 43,
      name: 'Parkdale burger',
      label: 'ፓርክዴል በርገር',
      food_type: 'generic',
      price: '118',
      place: 'Parkdale burger house',
      address: 'Behind dh geda tower'

    },

    {

      id: 44,
      name: 'Chicken panini and cheese fries',
      label: 'ዶሮ ፓኒኒና ቺዝ ፍራይስ',
      food_type: 'generic',
      price: '135',
      place: 'Natani',
      address: 'Bole,  next to bole mini'

    },

    {

      id: 45,
      name: 'Chicken pizza 80cm',
      label: 'ዶሮ ፒዛ 80 ሴንቲሜትር',
      food_type: 'generic',
      price: '379',
      place: 'Food world',
      address: 'Jemo, Adena Building 2nd floor ( Almart Jerba )'

    },

    {

      id: 46,
      name: 'Cheers Special',
      label: 'የቺርስ ልዩ',
      food_type: 'burger',
      price: '88',
      place: 'Cheers',
      address: 'Behind DH geda, next to Ride on'

    },

    {

      id: 47,
      name: 'Parkdale burger',
      label: 'ፓርክዴል በርገር',
      food_type: 'generic',
      price: '118',
      place: 'Parkdale burger house',
      address: 'Bole, Behind dh geda tower'

    },

    {

      id: 48,
      name: 'Half Beef Half Chicken Pizza',
      label: 'ግማሽ ቢፍ ግማሽ ዶሮ ፒዛ',
      food_type: 'generic',
      price: '150',
      place: 'Tivoli',
      address: 'Bisrate Gebriel, Around Adot'

    },

    {

      id: 49,
      name: 'Dessalech special',
      label: 'የደሳለች ልዩ',
      food_type: 'generic',
      price: '265',
      place: 'Dessalech Kitfo',
      address: 'Bole, infront of Millennium Hall, next to Kategna'

    },

    {

      id: 50,
      name: 'Chicken leg with rice',
      label: 'የዶሮ እግር በሩዝ',
      food_type: 'generic',
      price: '220',
      place: 'Dodi',
      address: 'Tele in the way to Sarbet'

    },

    {

      id: 51,
      name: 'Chechebesa with Honey',
      label: 'ጨጨብሳ በማር',
      food_type: 'generic',
      price: '125',
      place: 'Kategna',
      address: 'Bole, in front of millennium hall'

    },

    {

      id: 52,
      name: 'Tibes Firfir and French toast',
      label: 'ጥብስ ፍርፍርና ፍሬንች ቶስት',
      food_type: 'generic',
      price: '115 and 66 (according)',
      place: 'Variety Restaurant',
      address: 'Bole, berhane adere mall 2nd floor.'

    },

    {

      id: 53,
      name: 'Kikil and Tibs',
      label: 'ቅቅልና ጥብስ',
      food_type: 'generic',
      price: '200',
      place: 'Double black bar and restaurant',
      address: 'Meskel flower around Sam House'

    },

    {

      id: 54,
      name: 'House Special Pizza',
      label: 'የቤቱ ልዩ',
      food_type: 'pizza',
      price: '165',
      place: 'Variety Restaurant',
      address: 'Bole, Mafi mall 2nd floor.'

    },

    {

      id: 55,
      name: 'Grilled fish',
      label: 'የተጠበሰ አሳ',
      food_type: 'generic',
      price: '135',
      place: 'Fusion',
      address: 'Bole, in front of Monarch hotel.'

    },

    {

      id: 56,
      name: 'Jambo Burger',
      label: 'ጃምቦ በርገር',
      food_type: 'burger',
      price: '105',
      place: 'Micas Burger',
      address: 'Gerji Condominium around Taxi tera'

    },

    {

      id: 57,
      name: 'Chicken Shawarma with soup',
      label: 'ዶሮ ሽዋርማ በሾርባ',
      food_type: 'generic',
      price: '140',
      place: 'Variety Restaurant',
      address: 'Bole, Mafi mall 2nd floor'

    },

    {

      id: 58,
      name: 'Beef with cheese',
      label: 'ቢፍ በቺዝ',
      food_type: 'generic',
      price: '35',
      place: 'Tsega milk',
      address: 'Kasanchis infront of intercontinental hotel'

    },

    {

      id: 59,
      name: 'Double decker pizza',
      label: 'ደብል ዴከር ፒዛ',
      food_type: 'generic',
      price: '370',
      place: 'Debonaries resturant',
      address: 'Around atlas hotel'

    },

    {

      id: 60,
      name: 'Lasagna',
      label: 'ላዛኛ',
      food_type: 'generic',
      price: '115',
      place: 'Fusion Bistro',
      address: 'Bole, In front of monarch hotel'

    },

    {

      id: 61,
      name: 'Kebabs',
      label: 'ከባብስ',
      food_type: 'generic',
      price: '140',
      place: 'Capital Hotel & Spa',
      address: 'Haile Gebreselassie Road, on the road from Urael to 22'

    },

    {

      id: 62,
      name: 'Grilled chicken with salad and roasted onions',
      label: 'ዶሮ ጥብስ በሰላጣና ሽንኩርት',
      food_type: 'generic',
      price: '210',
      place: 'Savor Adis',
      address: 'Bole atlas behind 2000 habesha'

    },

    {

      id: 63,
      name: 'Parkdale burger',
      label: 'ፓርክዴል በርገር',
      food_type: 'generic',
      price: '118',
      place: 'Parkdale burger house',
      address: 'Bole behind DH geda tower'

    },

    {

      id: 64,
      name: 'Chocolate Brownies',
      label: 'ቸኮሌት ብራውኒስ',
      food_type: 'generic',
      price: '60',
      place: 'Kuriftu',
      address: 'Debrezeit, Kuriftu Resort'
    }
  ];

  constructor() { }

  getFoods(limit: number) {
    return this.foods;
  }

  getFood(food_id) {
    return this.foods.filter((eachFood) => {
      return eachFood.id === food_id;
    })[0];
  }


  getPlaces(limit: number) {
    return this.foods;
  }

  getPlace(place_label) {
    return this.foods.filter((eachPlace) => {
      return eachPlace.label === place_label;
    })[0];
  }


  getUsers(limit: number) {
    return this.foods;
  }

  getUser(place_label) {
    return this.foods.filter((eachPlace) => {
      return eachPlace.label === place_label;
    })[0];
  }
}
