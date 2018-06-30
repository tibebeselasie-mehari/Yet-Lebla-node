const ContentModerator = require('../../models/ContentModerator');
const LocationSchema = require('../../models/LocationSchema');
const Food = require('../../models/Food');
const FoodPriceSchema = require('../../models/FoodPriceSchema');
const MenuSchema = require('../../models/MenuSchema');
const ModeratorReport = require('../../models/ModeratorReport');
const Place = require('../../models/Place');
const PlaceOwner = require('../../models/PlaceOwner');
const RatingSchema = require('../../models/RatingSchema');
const ReligionSchema = require('../../models/ReligionSchema');
const ReviewSchema = require('../../models/ReviewSchema');
const SysAdmin = require('../../models/SysAdmin');
const User = require('../../models/User');
const UserReport = require('../../models/UserReport');

const location = new LocationSchema({
    lat: 10,
    long: 20
});

const christian = new ReligionSchema({
    name:"christian",
    description:"belive in god"
});

const rating = new RatingSchema({
    value: 9.5,
    date: Date.now(),
    user: user,
    food: burger,
    place: McDonalds
});

const rating1 = new RatingSchema({
    value: 9,
    date: Date.now(),
    user: user,
    food: burger,
    place: McDonalds
});

const review = new ReviewSchema({
    title:"McDonalds Burger",
    body:"Bla Bla Bla!!!",
    date: Date.now(),
    user: user
});

const moderator = new ContentModerator({
    moderator_id: 1,
    FirstName: "Kebede",
    LastName:"Bekele",
    username: "kebe123",
    pass_hash:"fjfhdjfhjsh1133we"
});

const burger = new Food({
    food_id: 1,
    food_name:"Burger",
    price: "$20",
    ratings:[rating,rating1],
    pictures:"",
    reviews:[review],
    place: [McDonalds],
    location: [location],
    user_id: 12,
    date: Date.now(),
    allowed_by: [christian]
});

const price = new FoodPriceSchema({
    food: burger,
    price: 20
});

const menu = new MenuSchema({
    title:"Menu",
    body:[price],
    includes_vat: true
});

const McDonalds = new Place({
    place_id: 3,
    place_name:"McDonalds",
    description:"Tasty food",
    year_of_foundation: Date.now(),
    ratings: [rating,rating1,rating1],
    pictures:"",
    reviews:[review,review],
    menus:[menu],
    location:[location]
});

const user = new User({
    user_id:10,
    FirstName:"Denzel",
    LastName:"Washington",
    username:"abc123",
    pass_hash:"ghfhdgweygfsgzf",
    religion: christian,
    recommended_food: [burger],
    rated_food_list: [burger]
});

const moderator_report = new ModeratorReport({
    report_id: 1,
    reason:"IDK",
    additional_name:"",
    should_ban: false
});

const owner = new PlaceOwner({
    owner_id: 5,
    FirstName:"Daniel",
    LastName:"Craig",
    username:"bond007",
    pass_hash:"gfafgfdgafsfgda",
    place: McDonalds,
    isVerified: true
});

const admin = new SysAdmin({
    admin_id: 6,
    FirstName: "The",
    LastName: "Admin",
    username: "admin1",
    pass_hash:"gfhaggegyegafbcy"
});

const report = new UserReport({
    report_id: 5,
    reason: "His posts contain explicit language!",
    additional_note: "should be banned"
});

rating.user = user;
review.user = user;

exports.burger = burger;
exports.McDonalds = McDonalds;
exports.user = user;
exports.admin = admin;
exports.moderator = moderator;
exports.location = location;
exports.owner = owner;
exports.rating = rating;
exports.review = review;