import React from "react"; //this is the default import it will get react from node_modules
import ReactDOM from "react-dom"; //this is the default import it will get react-dom from node_modules
import ReactDOM from "react-dom/client";   

/*

Header
- Logo
- Nav Items

Body
 Search
- Restaurant Container
 - Restaurant Card
 - Dish Name
 - Image
 - Restaurant Name
 - Rating
 - Cuisines
 - Time to Deliver

Footer
- Copyright
- Links
- Address
- Contact
*/
const Header=()=>{
    return(<div className="header">
                <div className="logo-containter">
                    <img className="logo" src="https://bcassetcdn.com/public/blog/wp-content/uploads/2019/07/18094833/the-red-cafe.png" alt="logo"/>
                </div>

                <div className="nav-items">
                    <ul>    
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>   
                    <li>Cart</li>    
                </ul>
                </div>
            </div>)
}



const restStyle={
    backgroundColor: "#f0f0f0",
}

const RestaurantCard=(props)=>{
    const {resData}=props;
    const{name,cloudinaryImageId,cuisines,avgRating,costForTwo,sla}=resData.info;
    console.log(props);
    return( 
                <div className="restaurant-card" style={restStyle}>
                   <img className="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resData.info.cloudinaryImageId} alt="restaurant"/>
                    <h3>{name}</h3>
                    <h4>{cuisines.join(",")}</h4>
                    <h4>{avgRating}</h4>
                    <h4>{costForTwo}</h4>
                    <h4>{sla.slaString}</h4>
                   
                </div>
           )
}   
const restList = [
    {
    info: {
    id: "647386",
    name: "Meghana Foods",
    cloudinaryImageId: "e9c9a3800fa5c5e45b6045b0c7ed5214",
    locality: "Allwyn Colony",
    areaName: "Kukatpally",
    costForTwo: "₹600 for two",
    cuisines: [
    "Ice Cream",
    "Beverages",
    "Biryani",
    "Chinese",
    "Indian"
    ],
    avgRating: 2.9,
    parentId: "635",
    avgRatingString: "2.9",
    totalRatingsString: "430",
    sla: {
    deliveryTime: 33,
    lastMileTravel: 3,
    serviceability: "SERVICEABLE",
    slaString: "30-35 mins",
    lastMileTravelString: "3.0 km",
    iconType: "ICON_TYPE_EMPTY"
    },
    availability: {
    nextCloseTime: "2025-03-07 08:29:00",
    opened: true
    },
    badges: { },
    isOpen: true,
    type: "F",
    badgesV2: {
    entityBadges: {
    imageBased: { },
    textBased: { },
    textExtendedBadges: { }
    }
    },
    aggregatedDiscountInfoV3: {
    header: "60% OFF",
    subHeader: "UPTO ₹120"
    },
    orderabilityCommunication: {
    title: { },
    subTitle: { },
    message: { },
    customIcon: { }
    },
    differentiatedUi: {
    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    differentiatedUiMediaDetails: {
    mediaType: "ADS_MEDIA_ENUM_IMAGE",
    lottie: { },
    video: { }
    }
    },
    reviewsSummary: { },
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: { },
    externalRatings: {
    aggregatedRating: {
    rating: "--"
    }
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    analytics: {
    context: "seo-data-ecb40a0e-3be9-41e7-8c4a-0c50c72bd641"
    },
    cta: {
    link: "https://www.swiggy.com/city/hyderabad/meghana-foods-allwyn-colony-kukatpally-rest647386",
    text: "RESTAURANT_MENU",
    type: "WEBLINK"
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
    info: {
    id: "696827",
    name: "Leon's - Burgers & Wings (Leon Grill)",
    cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/14/9f59aea4-4962-4646-966d-5932e6e489bb_696827.jpg",
    locality: "Kukatpally",
    areaName: "Kukatpally",
    costForTwo: "₹500 for two",
    cuisines: [
    "American",
    "Snacks"
    ],
    avgRating: 4.2,
    parentId: "371281",
    avgRatingString: "4.2",
    totalRatingsString: "2.9K+",
    sla: {
    deliveryTime: 42,
    lastMileTravel: 2.3,
    serviceability: "SERVICEABLE",
    slaString: "40-45 mins",
    lastMileTravelString: "2.3 km",
    iconType: "ICON_TYPE_EMPTY"
    },
    availability: {
    nextCloseTime: "2025-03-07 01:00:00",
    opened: true
    },
    badges: {
    imageBadges: [
    {
    imageId: "Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png",
    description: "Delivery!"
    }
    ]
    },
    isOpen: true,
    type: "F",
    badgesV2: {
    entityBadges: {
    imageBased: {
    badgeObject: [
    {
    attributes: {
    description: "Delivery!",
    imageId: "Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png"
    }
    }
    ]
    },
    textBased: { },
    textExtendedBadges: { }
    }
    },
    aggregatedDiscountInfoV3: {
    header: "ITEMS",
    subHeader: "AT ₹69"
    },
    orderabilityCommunication: {
    title: { },
    subTitle: { },
    message: { },
    customIcon: { }
    },
    differentiatedUi: {
    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    differentiatedUiMediaDetails: {
    mediaType: "ADS_MEDIA_ENUM_IMAGE",
    lottie: { },
    video: { }
    }
    },
    reviewsSummary: { },
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: { },
    externalRatings: {
    aggregatedRating: {
    rating: "4.8",
    ratingCount: "1.0K+"
    },
    source: "GOOGLE",
    sourceIconImageId: "v1704440323/google_ratings/rating_google_tag"
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    analytics: {
    context: "seo-data-ecb40a0e-3be9-41e7-8c4a-0c50c72bd641"
    },
    cta: {
    link: "https://www.swiggy.com/city/hyderabad/leons-burgers-and-wings-leon-grill-kukatpally-rest696827",
    text: "RESTAURANT_MENU",
    type: "WEBLINK"
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
    info: {
    id: "741985",
    name: "California Burrito",
    cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/3/618f93ae-9943-4667-aba5-436f0c910074_741985.jpg",
    locality: "Moosapet",
    areaName: "Kukatpally",
    costForTwo: "₹250 for two",
    cuisines: [
    "Mexican",
    "American",
    "Salads",
    "Continental",
    "Keto",
    "Healthy Food",
    "Beverages",
    "Snacks",
    "Desserts",
    "Fast Food"
    ],
    avgRating: 4.6,
    parentId: "1252",
    avgRatingString: "4.6",
    totalRatingsString: "4.2K+",
    sla: {
    deliveryTime: 34,
    lastMileTravel: 3.6,
    serviceability: "SERVICEABLE",
    slaString: "30-35 mins",
    lastMileTravelString: "3.6 km",
    iconType: "ICON_TYPE_EMPTY"
    },
    availability: {
    nextCloseTime: "2025-03-06 23:00:00",
    opened: true
    },
    badges: {
    textExtendedBadges: [
    {
    iconId: "guiltfree/GF_Logo_android_3x",
    shortDescription: "options available",
    fontColor: "#7E808C"
    }
    ]
    },
    isOpen: true,
    type: "F",
    badgesV2: {
    entityBadges: {
    imageBased: { },
    textBased: { },
    textExtendedBadges: {
    badgeObject: [
    {
    attributes: {
    description: "",
    fontColor: "#7E808C",
    iconId: "guiltfree/GF_Logo_android_3x",
    shortDescription: "options available"
    }
    }
    ]
    }
    }
    },
    aggregatedDiscountInfoV3: {
    header: "50% OFF",
    subHeader: "UPTO ₹100"
    },
    orderabilityCommunication: {
    title: { },
    subTitle: { },
    message: { },
    customIcon: { }
    },
    differentiatedUi: {
    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    differentiatedUiMediaDetails: {
    mediaType: "ADS_MEDIA_ENUM_IMAGE",
    lottie: { },
    video: { }
    }
    },
    reviewsSummary: { },
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: { },
    externalRatings: {
    aggregatedRating: {
    rating: "--"
    }
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    analytics: {
    context: "seo-data-ecb40a0e-3be9-41e7-8c4a-0c50c72bd641"
    },
    cta: {
    link: "https://www.swiggy.com/city/hyderabad/california-burrito-moosapet-kukatpally-rest741985",
    text: "RESTAURANT_MENU",
    type: "WEBLINK"
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
    info: {
    id: "56096",
    name: "Mehfil",
    cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/24/aeb72b6e-2ef4-4ae4-afed-c6727cdb7681_56096.jpg",
    locality: "Kukatpally",
    areaName: "Kukatpally",
    costForTwo: "₹300 for two",
    cuisines: [
    "Biryani",
    "Chinese",
    "Kebabs",
    "Tandoor"
    ],
    avgRating: 4.2,
    parentId: "637",
    avgRatingString: "4.2",
    totalRatingsString: "360K+",
    sla: {
    deliveryTime: 22,
    lastMileTravel: 1.9,
    serviceability: "SERVICEABLE",
    slaString: "20-25 mins",
    lastMileTravelString: "1.9 km",
    iconType: "ICON_TYPE_EMPTY"
    },
    availability: {
    nextCloseTime: "2025-03-07 02:00:00",
    opened: true
    },
    badges: {
    imageBadges: [
    {
    imageId: "bolt/Bolt%20Listing%20badge@3x.png",
    description: "bolt!"
    },
    {
    imageId: "Rxawards/_CATEGORY-Biryani.png",
    description: "Delivery!"
    }
    ]
    },
    isOpen: true,
    type: "F",
    badgesV2: {
    entityBadges: {
    imageBased: {
    badgeObject: [
    {
    attributes: {
    description: "bolt!",
    imageId: "bolt/Bolt%20Listing%20badge@3x.png"
    }
    },
    {
    attributes: {
    description: "Delivery!",
    imageId: "Rxawards/_CATEGORY-Biryani.png"
    }
    }
    ]
    },
    textBased: { },
    textExtendedBadges: { }
    }
    },
    aggregatedDiscountInfoV3: {
    header: "10% OFF",
    subHeader: "UPTO ₹40"
    },
    orderabilityCommunication: {
    title: { },
    subTitle: { },
    message: { },
    customIcon: { }
    },
    differentiatedUi: {
    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    differentiatedUiMediaDetails: {
    mediaType: "ADS_MEDIA_ENUM_IMAGE",
    lottie: { },
    video: { }
    }
    },
    reviewsSummary: { },
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: { },
    externalRatings: {
    aggregatedRating: {
    rating: "4.0",
    ratingCount: "26K+"
    },
    source: "GOOGLE",
    sourceIconImageId: "v1704440323/google_ratings/rating_google_tag"
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    analytics: {
    context: "seo-data-ecb40a0e-3be9-41e7-8c4a-0c50c72bd641"
    },
    cta: {
    link: "https://www.swiggy.com/city/hyderabad/mehfil-kukatpally-rest56096",
    text: "RESTAURANT_MENU",
    type: "WEBLINK"
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
    info: {
    id: "492267",
    name: "Chinese Wok",
    cloudinaryImageId: "e0839ff574213e6f35b3899ebf1fc597",
    locality: "Kukatpally",
    areaName: "Kukatpally",
    costForTwo: "₹250 for two",
    cuisines: [
    "Chinese",
    "Asian",
    "Tibetan",
    "Desserts"
    ],
    avgRating: 4,
    parentId: "61955",
    avgRatingString: "4.0",
    totalRatingsString: "2.1K+",
    sla: {
    deliveryTime: 36,
    lastMileTravel: 2.7,
    serviceability: "SERVICEABLE",
    slaString: "35-40 mins",
    lastMileTravelString: "2.7 km",
    iconType: "ICON_TYPE_EMPTY"
    },
    availability: {
    nextCloseTime: "2025-03-07 00:00:00",
    opened: true
    },
    badges: { },
    isOpen: true,
    type: "F",
    badgesV2: {
    entityBadges: {
    imageBased: { },
    textBased: { },
    textExtendedBadges: { }
    }
    },
    aggregatedDiscountInfoV3: {
    header: "ITEMS",
    subHeader: "AT ₹129"
    },
    orderabilityCommunication: {
    title: { },
    subTitle: { },
    message: { },
    customIcon: { }
    },
    differentiatedUi: {
    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    differentiatedUiMediaDetails: {
    mediaType: "ADS_MEDIA_ENUM_IMAGE",
    lottie: { },
    video: { }
    }
    },
    reviewsSummary: { },
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: { },
    externalRatings: {
    aggregatedRating: {
    rating: "4.1",
    ratingCount: "168"
    },
    source: "GOOGLE",
    sourceIconImageId: "v1704440323/google_ratings/rating_google_tag"
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    analytics: {
    context: "seo-data-ecb40a0e-3be9-41e7-8c4a-0c50c72bd641"
    },
    cta: {
    link: "https://www.swiggy.com/city/hyderabad/chinese-wok-kukatpally-rest492267",
    text: "RESTAURANT_MENU",
    type: "WEBLINK"
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
    info: {
    id: "617598",
    name: "KFC",
    cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/12/9/df1a6bc6-56aa-4580-a88e-581767ab589b_617598.JPG",
    locality: "Kukatpally",
    areaName: "KPHB",
    costForTwo: "₹400 for two",
    cuisines: [
    "Burgers",
    "Fast Food",
    "Rolls & Wraps"
    ],
    avgRating: 4.2,
    parentId: "547",
    avgRatingString: "4.2",
    totalRatingsString: "3.3K+",
    sla: {
    deliveryTime: 15,
    lastMileTravel: 0.5,
    serviceability: "SERVICEABLE",
    slaString: "15-20 mins",
    lastMileTravelString: "0.5 km",
    iconType: "ICON_TYPE_EMPTY"
    },
    availability: {
    nextCloseTime: "2025-03-07 01:00:00",
    opened: true
    },
    badges: {
    imageBadges: [
    {
    imageId: "bolt/Bolt%20Listing%20badge@3x.png",
    description: "bolt!"
    },
    {
    imageId: "Rxawards/_CATEGORY-Burger.png",
    description: "Delivery!"
    }
    ]
    },
    isOpen: true,
    type: "F",
    badgesV2: {
    entityBadges: {
    imageBased: {
    badgeObject: [
    {
    attributes: {
    description: "bolt!",
    imageId: "bolt/Bolt%20Listing%20badge@3x.png"
    }
    },
    {
    attributes: {
    description: "Delivery!",
    imageId: "Rxawards/_CATEGORY-Burger.png"
    }
    }
    ]
    },
    textBased: { },
    textExtendedBadges: { }
    }
    },
    aggregatedDiscountInfoV3: {
    header: "ITEMS",
    subHeader: "AT ₹59"
    },
    orderabilityCommunication: {
    title: { },
    subTitle: { },
    message: { },
    customIcon: { }
    },
    differentiatedUi: {
    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    differentiatedUiMediaDetails: {
    mediaType: "ADS_MEDIA_ENUM_IMAGE",
    lottie: { },
    video: { }
    }
    },
    reviewsSummary: { },
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: { },
    externalRatings: {
    aggregatedRating: {
    rating: "--"
    }
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    analytics: {
    context: "seo-data-ecb40a0e-3be9-41e7-8c4a-0c50c72bd641"
    },
    cta: {
    link: "https://www.swiggy.com/city/hyderabad/kfc-kukatpally-kphb-rest617598",
    text: "RESTAURANT_MENU",
    type: "WEBLINK"
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
    info: {
    id: "8681",
    name: "Santosh Dhaba Exclusive",
    cloudinaryImageId: "mn2bjddbc5yzectpm2x6",
    locality: "Kukatpally",
    areaName: "Kukatpally",
    costForTwo: "₹300 for two",
    cuisines: [
    "North Indian",
    "Chinese",
    "Biryani"
    ],
    avgRating: 4.1,
    parentId: "8784",
    avgRatingString: "4.1",
    totalRatingsString: "84K+",
    sla: {
    deliveryTime: 24,
    lastMileTravel: 1.6,
    serviceability: "SERVICEABLE",
    slaString: "20-25 mins",
    lastMileTravelString: "1.6 km",
    iconType: "ICON_TYPE_EMPTY"
    },
    availability: {
    nextCloseTime: "2025-03-06 23:59:00",
    opened: true
    },
    badges: {
    imageBadges: [
    {
    imageId: "Rxawards/_CATEGORY-North%20Indian.png",
    description: "Delivery!"
    }
    ]
    },
    isOpen: true,
    type: "F",
    badgesV2: {
    entityBadges: {
    imageBased: {
    badgeObject: [
    {
    attributes: {
    description: "Delivery!",
    imageId: "Rxawards/_CATEGORY-North%20Indian.png"
    }
    }
    ]
    },
    textBased: { },
    textExtendedBadges: { }
    }
    },
    aggregatedDiscountInfoV3: {
    header: "40% OFF",
    subHeader: "UPTO ₹80"
    },
    orderabilityCommunication: {
    title: { },
    subTitle: { },
    message: { },
    customIcon: { }
    },
    differentiatedUi: {
    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    differentiatedUiMediaDetails: {
    mediaType: "ADS_MEDIA_ENUM_IMAGE",
    lottie: { },
    video: { }
    }
    },
    reviewsSummary: { },
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: { },
    externalRatings: {
    aggregatedRating: {
    rating: "3.7",
    ratingCount: "3.9K+"
    },
    source: "GOOGLE",
    sourceIconImageId: "v1704440323/google_ratings/rating_google_tag"
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    analytics: {
    context: "seo-data-ecb40a0e-3be9-41e7-8c4a-0c50c72bd641"
    },
    cta: {
    link: "https://www.swiggy.com/city/hyderabad/santosh-dhaba-exclusive-kukatpally-rest8681",
    text: "RESTAURANT_MENU",
    type: "WEBLINK"
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
    info: {
    id: "763495",
    name: "Polar Bear",
    cloudinaryImageId: "74780ccddde461d56dcdff387ef7b733",
    locality: "Kukatpally",
    areaName: "opposite blue Dart Courier",
    costForTwo: "₹350 for two",
    cuisines: [
    "Ice Cream"
    ],
    avgRating: 4.5,
    parentId: "726",
    avgRatingString: "4.5",
    totalRatingsString: "790",
    sla: {
    deliveryTime: 25,
    lastMileTravel: 3,
    serviceability: "SERVICEABLE",
    slaString: "20-25 mins",
    lastMileTravelString: "3.0 km",
    iconType: "ICON_TYPE_EMPTY"
    },
    availability: {
    nextCloseTime: "2025-03-07 02:30:00",
    opened: true
    },
    badges: { },
    isOpen: true,
    aggregatedDiscountInfoV2: { },
    type: "F",
    badgesV2: {
    entityBadges: {
    imageBased: { },
    textBased: { },
    textExtendedBadges: { }
    }
    },
    orderabilityCommunication: {
    title: { },
    subTitle: { },
    message: { },
    customIcon: { }
    },
    differentiatedUi: {
    displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
    differentiatedUiMediaDetails: {
    mediaType: "ADS_MEDIA_ENUM_IMAGE",
    lottie: { },
    video: { }
    }
    },
    reviewsSummary: { },
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: { },
    externalRatings: {
    aggregatedRating: {
    rating: "4.9",
    ratingCount: "4.6K+"
    },
    source: "GOOGLE",
    sourceIconImageId: "v1704440323/google_ratings/rating_google_tag"
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    analytics: {
    context: "seo-data-ecb40a0e-3be9-41e7-8c4a-0c50c72bd641"
    },
    cta: {
    link: "https://www.swiggy.com/city/hyderabad/polar-bear-kukatpally-opposite-blue-dart-courier-rest763495",
    text: "RESTAURANT_MENU",
    type: "WEBLINK"
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    }
    ]
const Body=()=>{
    return(<div className="body">
              <div className="search">Search</div>
              <div className="restaurant-container">
                {
                    restList.map((restaurant)=>{
                        return <RestaurantCard resData={restaurant}/>
                    })
                }
                  
                  {/* <RestaurantCard resData={restList[0]}/> 
                  <RestaurantCard resData={restList[1]}/> 
                  <RestaurantCard resData={restList[2]}/> 
                  <RestaurantCard resData={restList[3]}/> 
                  <RestaurantCard resData={restList[4]}/> 
                  <RestaurantCard resData={restList[5]}/> 
                  <RestaurantCard resData={restList[6]}/>  */}
                  
              </div>
            </div>)
}   

const AppLayout=()=>{
    return(<div className="app">   
    <Header/>
    <Body/>
   
      </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)
    