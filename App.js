import React from "react";
import ReactDOM from "react-dom/client";
const styleCard = {
  backgroundColor: "#f0f0f0",
};

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="data:image/png;base64,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"
        />
        {/* <img src="logo.jpeg" /> */}
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cards</li>
          <li>Cards</li>
        </ul>
      </div>
    </div>
  );
};

const resList = [
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "736076",
          name: "S Kumar Wadewale",
          cloudinaryImageId: "e427d33a122a3a544fb83ee915a78114",
          locality: "Aundh",
          areaName: "Baner",
          costForTwo: "₹200 for two",
          cuisines: ["South Indian", "Snacks", "Fast Food", "Thalis"],
          avgRating: 4.3,
          veg: true,
          parentId: "173474",
          avgRatingString: "4.3",
          totalRatingsString: "1.1K+",
          promoted: true,
          adTrackingId:
            "cid=34547092~p=0~adgrpid=34547092#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=736076~plpr=COLLECTION~eid=3265d5ac-5b4c-4df8-9705-838a5fdf51ad~srvts=1762064866050~collid=80440",
          sla: {
            deliveryTime: 38,
            lastMileTravel: 6.7,
            serviceability: "SERVICEABLE",
            slaString: "35-40 mins",
            lastMileTravelString: "6.7 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-11-02 23:00:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "Rxawards/_CATEGORY-Vada%20Pav.png",
                description: "Delivery!",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "Rxawards/_CATEGORY-Vada%20Pav.png",
                      description: "Delivery!",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "₹50 OFF",
            subHeader: "ABOVE ₹99",
            discountTag: "FLAT DEAL",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "34547092",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=736076&source=collection&query=Idli",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "521727",
          name: "Naadbramha Idli",
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/4/4/b0ae7267-3f0f-4cf6-af23-a0b849c53dc1_2cc4526f-64b7-4295-81ac-c3f3bbc48b0a.jpg_compressed",
          locality: "Ambedkar Colony",
          areaName: "Wakad",
          costForTwo: "₹200 for two",
          cuisines: ["South Indian"],
          avgRating: 4.3,
          parentId: "251339",
          avgRatingString: "4.3",
          totalRatingsString: "699",
          sla: {
            deliveryTime: 12,
            lastMileTravel: 0.3,
            serviceability: "SERVICEABLE",
            slaString: "10-15 mins",
            lastMileTravelString: "0.3 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-11-02 20:00:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "android/static-assets/icons/rx_5_10_min.png",
                description: "bolt!",
              },
            ],
          },
          isOpen: true,
          aggregatedDiscountInfoV2: {},
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "android/static-assets/icons/rx_5_10_min.png",
                      description: "bolt!",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
              textBased: {},
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=521727&source=collection&query=Idli",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "460575",
          name: "Shiva Snacks Center",
          cloudinaryImageId: "2041053363601473ac7a6a4bcd666e75",
          locality: "Nr Juna Jakat Naka",
          areaName: "Chinchwad",
          costForTwo: "₹200 for two",
          cuisines: ["South Indian"],
          avgRating: 4.6,
          parentId: "453807",
          avgRatingString: "4.6",
          totalRatingsString: "2.1K+",
          promoted: true,
          adTrackingId:
            "cid=34566689~p=1~adgrpid=34566689#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=460575~plpr=COLLECTION~eid=8409231a-a336-4328-a967-76b63dc566c2~srvts=1762064866050~collid=80440",
          sla: {
            deliveryTime: 33,
            lastMileTravel: 4,
            serviceability: "SERVICEABLE",
            slaString: "30-35 mins",
            lastMileTravelString: "4.0 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-11-02 22:00:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "10% OFF",
            subHeader: "UPTO ₹40",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "34566689",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=460575&source=collection&query=Idli",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "885938",
          name: "Anna Idli",
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/9/1/da7a8966-54eb-448e-a3ae-2479b8d951e9_7dfe5f4e-c595-4a9c-b754-6c94e05dd81b.jpg",
          locality: "Shankar Kalat Nagar",
          areaName: "Wakad",
          costForTwo: "₹300 for two",
          cuisines: ["South Indian"],
          avgRating: 2.9,
          veg: true,
          parentId: "3790",
          avgRatingString: "2.9",
          totalRatingsString: "198",
          sla: {
            deliveryTime: 20,
            lastMileTravel: 0.7,
            serviceability: "SERVICEABLE",
            slaString: "20-25 mins",
            lastMileTravelString: "0.7 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-11-02 12:00:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "android/static-assets/icons/big_rx.png",
                description: "bolt!",
              },
              {
                imageId: "v1695133679/badges/Pure_Veg111.png",
                description: "pureveg",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "android/static-assets/icons/big_rx.png",
                      description: "bolt!",
                    },
                  },
                  {
                    attributes: {
                      imageId: "v1695133679/badges/Pure_Veg111.png",
                      description: "pureveg",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "20% OFF",
            subHeader: "UPTO ₹50",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=885938&source=collection&query=Idli",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "433818",
          name: "Thambbi ",
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/10/28/9a4a5b68-a3dd-4947-b53f-939b01a2ebac_a06467da-a0c7-4981-9026-fe2492d7b13e.JPG",
          locality: "Balewadi Road",
          areaName: "Balewadi",
          costForTwo: "₹400 for two",
          cuisines: ["South Indian", "North Indian"],
          avgRating: 4.4,
          veg: true,
          parentId: "2527",
          avgRatingString: "4.4",
          totalRatingsString: "7.5K+",
          promoted: true,
          adTrackingId:
            "cid=34584261~p=2~adgrpid=34584261#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=433818~plpr=COLLECTION~eid=4f55b411-017d-4685-9622-9dd330ecbb3e~srvts=1762064866050~collid=80440",
          sla: {
            deliveryTime: 37,
            lastMileTravel: 7.2,
            serviceability: "SERVICEABLE",
            slaString: "35-40 mins",
            lastMileTravelString: "7.2 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-11-02 23:00:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              imageBased: {},
              textExtendedBadges: {},
              textBased: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹99",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "34584261",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=433818&source=collection&query=Idli",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "744604",
          name: "Sudamache Pohe",
          cloudinaryImageId: "81db58faa146446955e1340e00d7c40c",
          locality: "Pimpri-Chinchwad",
          areaName: "Wakad",
          costForTwo: "₹100 for two",
          cuisines: ["Street Food", "South Indian", "Beverages", "Snacks"],
          avgRating: 4,
          veg: true,
          parentId: "295167",
          avgRatingString: "4.0",
          totalRatingsString: "1.2K+",
          sla: {
            deliveryTime: 25,
            lastMileTravel: 0.7,
            serviceability: "SERVICEABLE",
            slaString: "20-25 mins",
            lastMileTravelString: "0.7 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-11-02 20:00:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "android/static-assets/icons/big_rx.png",
                description: "bolt!",
              },
            ],
          },
          isOpen: true,
          aggregatedDiscountInfoV2: {},
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      description: "bolt!",
                      imageId: "android/static-assets/icons/big_rx.png",
                    },
                  },
                ],
              },
              textExtendedBadges: {},
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=744604&source=collection&query=Idli",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "45578",
          name: "Akshay Pure Veg",
          cloudinaryImageId: "uhvolahtwbmsptfhvsek",
          locality: "Baner",
          areaName: "Balewadi",
          costForTwo: "₹400 for two",
          cuisines: ["South Indian", "Chinese"],
          avgRating: 4.4,
          parentId: "28693",
          avgRatingString: "4.4",
          totalRatingsString: "5.7K+",
          promoted: true,
          adTrackingId:
            "cid=34566329~p=3~adgrpid=34566329#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=45578~plpr=COLLECTION~eid=36a62456-3b0c-40d2-812f-11dc6e270abf~srvts=1762064866050~collid=80440",
          sla: {
            deliveryTime: 40,
            lastMileTravel: 7.1,
            serviceability: "SERVICEABLE",
            slaString: "40-45 mins",
            lastMileTravelString: "7.1 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-11-02 17:00:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹19",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "4.0",
              ratingCount: "1.9K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "34566329",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=45578&source=collection&query=Idli",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "207652",
          name: "Upsouth",
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/11/19/e876f416-a2cc-4175-917c-400259cd0f10_709db1d1-2ec9-4ada-9290-6aa32753e9e3.JPG",
          locality: "Wakad",
          areaName: "Wakad",
          costForTwo: "₹250 for two",
          cuisines: ["South Indian", "Snacks", "Beverages"],
          avgRating: 4.3,
          veg: true,
          parentId: "22184",
          avgRatingString: "4.3",
          totalRatingsString: "6.8K+",
          sla: {
            deliveryTime: 25,
            lastMileTravel: 0.9,
            serviceability: "SERVICEABLE",
            slaString: "25-30 mins",
            lastMileTravelString: "0.9 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-11-02 23:00:00",
            opened: true,
          },
          badges: {
            imageBadges: [
              {
                imageId: "android/static-assets/icons/big_rx.png",
                description: "bolt!",
              },
              {
                imageId: "Rxawards/_CATEGORY-South%20Indian.png",
                description: "Delivery!",
              },
            ],
          },
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textExtendedBadges: {},
              textBased: {},
              imageBased: {
                badgeObject: [
                  {
                    attributes: {
                      imageId: "android/static-assets/icons/big_rx.png",
                      description: "bolt!",
                    },
                  },
                  {
                    attributes: {
                      description: "Delivery!",
                      imageId: "Rxawards/_CATEGORY-South%20Indian.png",
                    },
                  },
                ],
              },
            },
          },
          aggregatedDiscountInfoV3: {
            header: "ITEMS",
            subHeader: "AT ₹69",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "3.8",
              ratingCount: "6.8K+",
            },
            source: "GOOGLE",
            sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=207652&source=collection&query=Idli",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "624713",
          name: "Engineer Wadewale",
          cloudinaryImageId: "d578ddd4c5ba0f1710e9f16240c27d1a",
          locality: "Thergaon",
          areaName: "Pimple Saudagar",
          costForTwo: "₹150 for two",
          cuisines: ["Street Food", "South Indian", "Beverages"],
          avgRating: 3.9,
          parentId: "245262",
          avgRatingString: "3.9",
          totalRatingsString: "472",
          promoted: true,
          adTrackingId:
            "cid=32144106~p=4~adgrpid=32144106#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=624713~plpr=COLLECTION~eid=4ad7f2ba-cf22-4166-9b0e-274033545327~srvts=1762064866050~collid=80440",
          sla: {
            deliveryTime: 34,
            lastMileTravel: 2.3,
            serviceability: "SERVICEABLE",
            slaString: "30-35 mins",
            lastMileTravelString: "2.3 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-11-02 22:45:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: "10% OFF",
            subHeader: "UPTO ₹40",
            logoCtx: {
              text: "BENEFITS",
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
          campaignId: "32144106",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=624713&source=collection&query=Idli",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
  {
    card: {
      card: {
        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
        info: {
          id: "145423",
          name: "Kerala Kitchen",
          cloudinaryImageId:
            "FOOD_CATALOG/IMAGES/CMS/2024/11/29/47cc3017-c894-4faf-a7f5-f47f0564d20b_0a5301d1-61f1-40d3-933d-05f1dfc2fb8b.jpg",
          locality: "Opp.Devki Auto, Mont-Vert Tropez Chowk",
          areaName: "Wakad",
          costForTwo: "₹250 for two",
          cuisines: ["South Indian"],
          avgRating: 4.2,
          parentId: "544",
          avgRatingString: "4.2",
          totalRatingsString: "1.0K+",
          sla: {
            deliveryTime: 26,
            lastMileTravel: 1.6,
            serviceability: "SERVICEABLE",
            slaString: "25-30 mins",
            lastMileTravelString: "1.6 km",
            iconType: "ICON_TYPE_EMPTY",
          },
          availability: {
            nextCloseTime: "2025-11-02 23:00:00",
            opened: true,
          },
          badges: {},
          isOpen: true,
          aggregatedDiscountInfoV2: {},
          type: "F",
          badgesV2: {
            entityBadges: {
              textBased: {},
              imageBased: {},
              textExtendedBadges: {},
            },
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
            commsStyling: {},
          },
          differentiatedUi: {
            displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            differentiatedUiMediaDetails: {
              mediaType: "ADS_MEDIA_ENUM_IMAGE",
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          restaurantOfferPresentationInfo: {},
          externalRatings: {
            aggregatedRating: {
              rating: "--",
            },
          },
          ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        },
        analytics: {},
        cta: {
          link: "swiggy://menu?restaurant_id=145423&source=collection&query=Idli",
          text: "RESTAURANT_MENU",
          type: "DEEPLINK",
        },
        widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
      },
      relevance: {
        type: "RELEVANCE_TYPE_ON_MENU_RETURN",
        sectionId: "MENU_RETURN_FOOD",
      },
    },
  },
];
const RestaurantCard = (props) => {
  //passing props & destructuting
  const { resData } = props;
  console.log(props);

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.card?.card?.info;

  return (
    <div className="res-card" style={styleCard}>
      <img
        className="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      {/* <h4>{sla.deliveryTime} minutes</h4> */}
    </div>
  );
};

// in map not using keys (not acceptable) <<< index as key <<<<<<< unique it (best practice)
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurantCard
            key={restaurant.card?.card?.info.id}
            resData={restaurant}
          />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
