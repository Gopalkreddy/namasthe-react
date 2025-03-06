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
    console.log(props);
    return( 
                <div className="restaurant-card" style={restStyle}>
                   <img className="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resData.info.cloudinaryImageId} alt="restaurant"/>
                    <h3>{resData.info.name}</h3>
                    <h4>{resData.info.cuisines.join(",")}</h4>
                    <h4>{resData.info.avgRating}</h4>
                    <h4>{resData.info.costForTwo}</h4>
                    <h4>{resData.info.sla.slaString}</h4>
                   
                </div>
           )
}   
const restObj = {   
    info: {
        id: "634470",
        name: "Starbucks Coffee",
        cloudinaryImageId: "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/f92c604d-68cb-49db-8dec-9473650c363d_634470.JPG",
        locality: "APHB Colony",
        areaName: "Gachibowli",
        costForTwo: "₹250 for two",
        cuisines: [
        "Bakery",
        "Beverages",
        "Chaat",
        "Sweets"
        ],
        avgRating: 4.6,
        parentId: "281782",
        avgRatingString: "4.6",
        totalRatingsString: "3.8K+",
        sla: {
        deliveryTime: 38,
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
        header: "ITEMS",
        subHeader: "AT ₹199"
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
        }
      
}
const Body=()=>{
    return(<div className="body">
              <div className="search">Search</div>
              <div className="restaurant-container">
                  
                  <RestaurantCard resData={restObj}/> 
                  
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
    