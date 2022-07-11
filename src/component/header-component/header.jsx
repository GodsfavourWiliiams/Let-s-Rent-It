import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ReactComponent as ActionsUser} from '../Assets/actions-user.svg';
import { ReactComponent as SearchIcon} from '../Assets/search.svg';
import { ReactComponent as Shop} from '../Assets/Shop.svg';
import { ReactComponent as Hamburger } from '../Assets/darhboard_alt.svg';
import Directory from '../directory/directoy';
import Banner from './banner';
import { connect } from 'react-redux';
import { logout } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cartIcon';
import CartDropdown from '../cartDropdown/cartDropdown';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart-selector';
import { selectCurrentUser } from '../../redux/user/user.selector';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';


const Header = ({ currentUser, hidden, collections }) => {

  const [IsNavFixed, setIsNavFixed] = useState(false);
  const [IsDropDownFixed, setIsDropDownFixed] = useState(false);
  const [error, setError] = useState(false);
  const [product, setProduct] = useState([ {
    "totalimapct": {
        "imageUrl": "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/T/C/193531_1632638963.jpg",
        "Brand": "MAXMECH",
        "name": "Total 115 Pcs Tools Set With 680w Impact Drill",
        "rating": 4,
        "reviewCount": 59,
        "shipping": 690,
        "price": 12000,
        "id": 43
    },
    "Nanwei18v": {
        "id": 42,
        "reviewCount": 92,
        "rating": 4,
        "imageUrl": "https://vordeo.com/wp-content/uploads/a13ce837-4610-4784-b6d0-1524416998c8.jpg",
        "shipping": 600,
        "name": "Nanwei 18V Brushed Impact Drill 27N",
        "Brand": "MAXMECH",
        "price": 5500
    },
    "fllossycoldless": {
        "imageUrl": "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/F/G/108213_1554036994.jpg",
        "price": 6000,
        "reviewCount": 1300,
        "shipping": 6,
        "ProductCode": 4259724,
        "rating": 5,
        "id": 39,
        "name": "Cordless Battery Drill Driver Machine- 24v"
    },
    "fl_lossy": {
        "rating": 4,
        "name": "Tools Box Kit With 21v Cordless Screwing Drill 13mm Machine",
        "imageUrl": "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/D/W/160594_1629618114.jpg",
        "shipping": 1200,
        "id": 41,
        "reviewCount": 49,
        "Brand": "MAXMECH",
        "price": 10500
    },
    "ineco1": {
        "rating": 5,
        "imageUrl": "https://media.istockphoto.com/photos/cordless-yellow-power-drill-isolated-on-a-white-background-picture-id184294297?k=20&m=184294297&s=612x612&w=0&h=uGQE4GpwpKeJWo1HstIVsnZhH303z5ncpKQiWvHVEdc=",
        "reviewCount": 50,
        "shipping": 900,
        "price": 9000,
        "id": 35,
        "name": "Ineco Drills"
    },
    "electricdriller": {
        "id": 38,
        "reviewCount": 100,
        "rating": 4,
        "shipping": 900,
        "name": "Electric driller",
        "imageUrl": "https://media.istockphoto.com/photos/electric-drilling-machine-picture-id985100106?k=20&m=985100106&s=612x612&w=0&h=IHnB-ov2OSHO49XYzuBEMFqS2VzIF51UvT4O7p2KFCU=",
        "price": 8000
    },
    "combidrill": {
        "name": "Combi Driver",
        "reviewCount": 75,
        "id": 37,
        "price": 11000,
        "shipping": 800,
        "rating": 3,
        "imageUrl": "https://media.istockphoto.com/photos/yellowblack-cordless-combi-drill-driver-hammer-drill-and-extra-on-picture-id1302946752?k=20&m=1302946752&s=612x612&w=0&h=WNnA36v63zP2Mxnd3CvSYwt4-MhtHPTjO-2Vkgvzmok="
    },
    "dpr_auto": {
        "id": 40,
        "rating": 4,
        "reviewCount": 159,
        "Brand": "MAXMECH",
        "price": 7800,
        "shipping": 1100,
        "name": "Maxmech Cordless Drill Screw Driver-24volts",
        "imageUrl": "https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/S/U/126972_1524134882.jpg"
    },
    "basezills": {
        "imageUrl": "https://media.istockphoto.com/photos/cordless-screwdriver-isolated-on-white-background-3d-illustration-picture-id696940658?k=20&m=696940658&s=612x612&w=0&h=ehfjdubytfBYitKlnUNhzGQ_gXTdEvCSkyLN9l7NzNM=",
        "price": 8000,
        "reviewCount": 89,
        "shipping": 1000,
        "name": "Base Zills",
        "id": 36,
        "rating": 4
    }
},
{
    "Soundprince": {
        "reviewCount": 57,
        "imageUrl": "https://media.istockphoto.com/photos/guitar-amplifier-picture-id182702861?k=20&m=182702861&s=612x612&w=0&h=nZdnXEDmbmSMkI-WAt2tYYAuycfXZYCdR375ObPtJeY=",
        "id": 13,
        "name": " Sound Prine",
        "rating": 5,
        "shipping": 1600,
        "price": 16000
    },
    "amdspeaker": {
        "price": 22000,
        "shipping": 1650,
        "imageUrl": "https://media.istockphoto.com/photos/speaker-on-white-background-picture-id182821899?k=20&m=182821899&s=612x612&w=0&h=jGYus8HVPdaqbnvFkpjV0UIwR438MKtnwYyKM_18JV8=",
        "name": "AMD Speaker",
        "reviewCount": 21,
        "rating": 3,
        "id": 10
    },
    "fullrange": {
        "imageUrl": "https://media.istockphoto.com/vectors/music-speaker-twisted-isolated-3d-realistic-icons-set-design-vector-vector-id665311940?k=20&m=665311940&s=612x612&w=0&h=Bgj9fPMAPzxGm-YoudMCKy_OeyYymMrkdAPJFOfKZ2k=",
        "name": "Full Range",
        "rating": 5,
        "shipping": 1900,
        "price": 18000,
        "id": 14,
        "reviewCount": 27
    },
    "soundfullset": {
        "id": 17,
        "reviewCount": 27,
        "shipping": 1500,
        "rating": 4.5,
        "imageUrl": "https://media.istockphoto.com/photos/group-of-speakers-picture-id177747450?k=20&m=177747450&s=612x612&w=0&h=dTcEWCIHLAaHB7UJ5aCFs6AgxGVv3lt0_dzpKF6BQnI=",
        "price": 42000,
        "name": "Sound Full Set"
    },
    "yeezydouble": {
        "imageUrl": "https://media.istockphoto.com/photos/two-huge-speakers-picture-id182883783?k=20&m=182883783&s=612x612&w=0&h=mmKBzhMZ1u1WxgS7QYM-_8KYEyNCm53ik9srapy8p_Y=",
        "shipping": 1800,
        "name": "Yeezy DOuble",
        "price": 28000,
        "rating": 4,
        "id": 11,
        "reviewCount": 27
    },
    "soundgod": {
        "rating": 5,
        "id": 16,
        "reviewCount": 27,
        "name": "Sound God",
        "shipping": 1600,
        "imageUrl": "https://media.istockphoto.com/photos/stereo-loudspeakers-wclipping-path-picture-id157591180?k=20&m=157591180&s=612x612&w=0&h=tOYN1M7cRo9aeX1YH73OJB3AEgppQTEn91k-zQv1fAY=",
        "price": 19000
    },
    "goldenblackconverse": {
        "name": "Golden black Converse",
        "price": 11000,
        "shipping": 1900,
        "imageUrl": "https://media.istockphoto.com/photos/single-golden-black-speaker-front-view-3d-picture-id1224049868?k=20&m=1224049868&s=612x612&w=0&h=5iJKdcIlU_uJL6ppOtAILeos_yFjkfnEeFQTdYaKyhI=",
        "rating": 4,
        "reviewCount": 36,
        "id": 12
    },
    "hifisound": {
        "rating": 4,
        "price": 16900,
        "name": "Hifi Sounds",
        "id": 15,
        "shipping": 1500,
        "imageUrl": "https://media.istockphoto.com/photos/hifi-black-loud-speaker-box-in-close-upprofessional-audio-equipment-picture-id1085903750?k=20&m=1085903750&s=612x612&w=0&h=an94PWadHgYtV0z7Ic76y2gPdsWqPFy1ykiJPXDxtB8=",
        "reviewCount": 27
    }
},
{
    "electricbassguitar": {
        "id": 31,
        "name": "Electric Bass Guitar",
        "reviewCount": 27,
        "price": 12500,
        "rating": 3,
        "shipping": 1600,
        "imageUrl": "https://media.istockphoto.com/photos/bass-guitar-on-white-background-picture-id123715735?k=20&m=123715735&s=612x612&w=0&h=045gNhNFz2JNHoN4pXzPTdCk_Sgt65dsbS4bfRuAwIo="
    },
    "acousticguitar": {
        "rating": 3,
        "price": 29000,
        "imageUrl": "https://media.istockphoto.com/photos/electric-guitar-isolated-on-white-background-picture-id471493238?k=20&m=471493238&s=612x612&w=0&h=aH924rxwbenNHdu3a6lS7OpbyVgOyxEHdDl2-rdgNd8=",
        "name": "Acoutic Guitar",
        "id": 29,
        "shipping": 1000,
        "reviewCount": 42
    },
    "electricguitar": {
        "reviewCount": 107,
        "name": "Electric Guitar",
        "imageUrl": "https://media.istockphoto.com/vectors/electric-guitar-icon-on-transparent-background-vector-id1284454546?k=20&m=1284454546&s=612x612&w=0&h=qaQRYPgLqXmIQkHLk26N7h21ezWMAt9edfbjlyGN0gk=",
        "price": 24500,
        "id": 28,
        "rating": 5,
        "shipping": 1200
    },
    "bass1": {
        "rating": 4,
        "imageUrl": "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/95/629349/1.jpg?2296",
        "id": 32,
        "price": 20000,
        "name": "V8s live sound",
        "reviewCount": 49,
        "shipping": 800
    },
    "bass2": {
        "name": "Acoustic box Guitar",
        "imageUrl": "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/98/105154/1.jpg?6838",
        "shipping": 850,
        "reviewCount": 55,
        "rating": 5,
        "price": 9000,
        "id": 33
    },
    "bassguitar": {
        "price": 5000,
        "reviewCount": 237,
        "rating": 5,
        "shipping": 900,
        "imageUrl": "https://media.istockphoto.com/photos/bass-guitar-and-amp-picture-id173198149?k=20&m=173198149&s=612x612&w=0&h=hzs-MGXshFlmHW-0ue3Tp5S5SzTlmSozMwQT4bODtqk=",
        "name": "Bass Guitar",
        "id": 30
    },
    "bass3": {
        "reviewCount": 79,
        "shipping": 1100,
        "name": "5 string bass guitar",
        "rating": 5,
        "price": 8000,
        "id": 34,
        "imageUrl": "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/22/715389/1.jpg?9806"
    }
},
{
    "slrfilm": {
        "shipping": 1270,
        "imageUrl": "https://media.istockphoto.com/photos/very-rare-old-35-mm-slr-film-camera-on-white-background-picture-id1357955437?k=20&m=1357955437&s=612x612&w=0&h=ko8n5OgtV2_u6DCS8sRd04H0Dgd3UyilNopZCC58bs0=",
        "price": 19000,
        "name": "old SLR film ",
        "reviewCount": 67,
        "id": 20,
        "rating": 3
    },
    "nikond90": {
        "name": "Nikon D90",
        "imageUrl": "https://media.istockphoto.com/photos/camera-with-mounted-50mm-f14-lens-on-white-background-picture-id174455805?k=20&m=174455805&s=612x612&w=0&h=rCwTiENnIIZaZPNq2UrAhiRnCWmRd57q53EWbOO4mgQ=",
        "reviewCount": 20,
        "id": 18,
        "price": 13500,
        "shipping": 1600,
        "rating": 5
    },
    "canon5d": {
        "imageUrl": "https://media.istockphoto.com/photos/vintage-looking-modern-mirrorless-camera-isolated-on-white-background-picture-id1324993565?k=20&m=1324993565&s=612x612&w=0&h=HOc9BBWgWPeq7vYMgD7Qhub_73meFW0tYXdipuL3AHI=",
        "id": 21,
        "shipping": 1700,
        "price": 11500,
        "reviewCount": 57,
        "rating": 5,
        "name": "Canon 5d"
    },
    "oldvintagefilm": {
        "imageUrl": "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/24/879317/1.jpg?6257",
        "shipping": 1500,
        "rating": 3,
        "name": "Old vintage film",
        "reviewCount": 42,
        "id": 22,
        "price": 25000
    },
    "nikond60": {
        "name": "Nikon D60",
        "reviewCount": 130,
        "rating": 4,
        "imageUrl": "https://media.istockphoto.com/photos/auto-focus-35mm-slr-camera-picture-id182179974?k=20&m=182179974&s=612x612&w=0&h=lIczSuJH-FIgMP_JtXnWSzWX457pbR53OTHsHxOvrbQ=",
        "shipping": 1500,
        "price": 13000,
        "id": 19
    }
},
{
    "sunpax5400DLX": {
        "id": "f004e4d5-6de9-4094-8bf6-5d2356536651",
        "imageUrl": "https://static.bhphoto.com/images/multiple_images/images500x500/1490959858_IMG_779717.jpg",
        "price": 3400,
        "reviewCount": 57,
        "rating": 3,
        "shipping": 900,
        "name": "Sunpak 5400DLX"
    },
    "kfConcept": {
        "rating": 3,
        "name": "K&F Concept SA254M2 DSLR",
        "imageUrl": "https://www.bhphotovideo.com/cdn-cgi/image/format=auto,fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/k_f_concept_kf09_089_sa254m2_dslr_camera_tripod_1646654761_1578206.jpg",
        "shipping": 900,
        "reviewCount": 57,
        "id": "8575460b-4643-462a-8f3e-e1a8d631472c",
        "price": 5500
    },
    "Manfrotto": {
        "id": "960aa5a4-dbab-4d82-aa31-903b0b4d41b8",
        "imageUrl": "https://www.bhphotovideo.com/cdn-cgi/image/format=auto,fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/manfrotto_mkpixiclamp_bk_pixi_mini_table_top_1549299439_1457442.jpg",
        "rating": 3,
        "price": 3500,
        "shipping": 700,
        "reviewCount": 57,
        "name": "Manfrotto PIXI Smart Mini Tripod"
    },
    "tripodforeign": {
        "rating": 5,
        "imageUrl": "https://media.istockphoto.com/photos/photoshoot-tripod-in-studio-photo-with-white-background-picture-id1176885942?k=20&m=1176885942&s=612x612&w=0&h=7Cs92ix4gE_XiEMgN9skR4pkNINwC0ntbDnZiO31DRc=",
        "name": "Tripod Foreign",
        "shipping": 700,
        "reviewCount": 127,
        "price": 6500,
        "id": 26
    },
    "tripodwithlens": {
        "rating": 3,
        "shipping": 900,
        "imageUrl": "https://media.istockphoto.com/photos/smartphone-and-mini-tripod-isolated-on-white-picture-id1355329741?k=20&m=1355329741&s=612x612&w=0&h=kt8Pkl4GeaJPWvl1hAK5ewXQ3T9waX5cLPr3eIC0rmg=",
        "reviewCount": 57,
        "name": "Tripod with lens",
        "price": 3500,
        "id": 27
    },
    "tripods1": {
        "shipping": 1000,
        "rating": 4,
        "price": 5000,
        "id": 23,
        "name": "Tripods 1",
        "reviewCount": 72,
        "imageUrl": "https://media.istockphoto.com/vectors/tripod-vector-illustration-isolated-on-white-background-vector-id1153991033?k=20&m=1153991033&s=612x612&w=0&h=p00BKYLZPBrODm3jgSuHLjRdNcVe-5IXInUV8bGldw8="
    },
    "tripodaluminium": {
        "imageUrl": "https://media.istockphoto.com/photos/tripod-picture-id159739353?k=20&m=159739353&s=612x612&w=0&h=NUzgWByEm5GPTc8t8id-zME1wXSKvl8lr2XadiAf4lI=",
        "price": 4000,
        "name": "Tripod Aluminium",
        "rating": 5,
        "shipping": 700,
        "id": 25,
        "reviewCount": 29
    },
    "tripodold35": {
        "rating": 3,
        "price": 6100,
        "imageUrl": "https://media.istockphoto.com/photos/old-wooden-camera-on-a-tripod-isolated-on-white-background-picture-id1153696361?k=20&m=1153696361&s=612x612&w=0&h=QkKXc_IJ8TiHiIRrXC8PXnaGe3_6EVrTpT-dYETmJgc=",
        "reviewCount": 47,
        "id": 24,
        "name": "Tripod old 35 mm SLR film",
        "shipping": 900
    }
},
{
    "greenbeanie": {
        "price": 25000,
        "imageUrl": "https://media.istockphoto.com/photos/hovering-drone-that-takes-pictures-picture-id511065858?k=20&m=511065858&s=612x612&w=0&h=6Xq1LXTnxKtauRNA_MqSFfCjMBl5XiI7DNIexywXfis=",
        "rating": 5,
        "name": "Green Beanie",
        "reviewCount": 31,
        "shipping": 1850,
        "id": 5,
        "routeName": "drones/greenbeanie"
    },
    "passengerdrone": {
        "shipping": 800,
        "name": "passenger drone",
        "imageUrl": "https://media.istockphoto.com/photos/front-view-of-selfdriving-passenger-drone-flying-in-the-sky-picture-id864542852?k=20&m=864542852&s=612x612&w=0&h=XWrka0zHcEvEcyKGRF30WkDBIfUBqYWurco0PI7ubf0=",
        "price": 24000,
        "rating": 3,
        "reviewCount": 43,
        "id": 6,
        "routeName": "drones/passengerdrone"
    },
    "helipad": {
        "routeName": "drones/helipad ",
        "imageUrl": "https://media.istockphoto.com/photos/orange-selfdriving-passenger-drone-takeoff-from-helipad-picture-id940926358?k=20&m=940926358&s=612x612&w=0&h=XapwQivdTthN0X-AfDMcOJo_qQNDEyNkSUPeFwT_xuY=",
        "price": 18000,
        "shipping": 1400,
        "id": 7,
        "name": "helipad",
        "rating": 2,
        "reviewCount": 30
    },
    "brownbrim": {
        "routeName": "drones/brownbrim",
        "name": "Brownbrim",
        "reviewCount": 45,
        "price": 20000,
        "rating": 3.9,
        "imageUrl": "https://images.unsplash.com/photo-1590513445309-502c810e463e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZHJvbnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        "shipping": 1800,
        "id": 1
    },
    "greybrim": {
        "id": 4,
        "name": "Grey Brim",
        "price": 22000,
        "reviewCount": 27,
        "imageUrl": "https://media.istockphoto.com/photos/quadcopter-drone-with-4k-video-camera-flying-in-the-air-picture-id911190112?k=20&m=911190112&s=612x612&w=0&h=6mkFfZ_h5OVzYH_b0DVaYMdMZd86Zn8MZH89gWPJN0w=",
        "rating": 3,
        "routeName": "drones/greybrim",
        "shipping": 1000
    },
    "browncowboy": {
        "name": "Brown Cowboy",
        "shipping": 1200,
        "price": 15000,
        "reviewCount": 41,
        "routeName": "drones/browncowboy",
        "id": 3,
        "rating": 4,
        "imageUrl": "https://media.istockphoto.com/photos/selfdriving-delivery-robot-concept-picture-id1160746084?k=20&m=1160746084&s=612x612&w=0&h=--G8qckmEC5Oa6DXrXFDYKMUvw2gCY953bD6fuduDak="
    },
    "dronesmeta": {
        "name": "Drones Meta",
        "id": 8,
        "reviewCount": 20,
        "shipping": 1700,
        "imageUrl": "https://media.istockphoto.com/photos/aerial-photography-by-drone-motion-in-the-air-in-motion-picture-id586731670?k=20&m=586731670&s=612x612&w=0&h=qQBypPLOnYW4l43P9djZUkbXDKg0rAWwR5gfn1-Z1WM=",
        "routeName": "drones/dronesmeta",
        "price": 21000,
        "rating": 3
    },
    "dronesnap": {
        "imageUrl": "https://media.istockphoto.com/photos/flying-drone-3d-illustration-picture-id883070010?k=20&m=883070010&s=612x612&w=0&h=HngwN6NcR6YEW5RZFYXVbDqCXVExI8ghozJkBsyVT4Y=",
        "reviewCount": 87,
        "rating": 4,
        "id": 9,
        "routeName": "drones/dronesnap",
        "name": "drone Snapback",
        "shipping": 1800,
        "price": 18000
    },
    "beanie": {
        "id": 2,
        "shipping": 800,
        "routeName": "drones/beanie",
        "imageUrl": "https://media.istockphoto.com/photos/drone-on-a-white-background-picture-id1226839668?k=20&m=1226839668&s=612x612&w=0&h=sx6jswa7XfyS5qOhhngfhmAWas86N3jvVW-uBWLBWKs=",
        "reviewCount": 30,
        "price": 10000,
        "name": "DJI FPV Drone",
        "rating": 4
    }
}
]);
  const [inputText, setInputText] = useState("");
  const [filteredProduct, setFilteredProduct] = useState([]);


  const inputHandler = (e) => {
    e.preventDefault();

    // collections.map(({ items }) => (
    //   setProduct(current => [...current, items])
    // ))

    if(inputText.trim()) {
      // navigate("/search");
      
      setFilteredProduct(
        product.filter(
          (products) =>
          products.toLowerCase().includes(inputText.toLowerCase())
        )
      );
    } else{
      setError(true)
    }

    setTimeout(() => {
      setError(false)
    }, 3000);
    
  };

  useEffect(() => {
    // console.log(filteredProduct)
        // console.log(product)
  }, [inputHandler])



  // const navigate = useNavigate();

  const onScrollTOp = () => {
  window.scrollY >= 35 ? setIsNavFixed(true) : setIsNavFixed(false)
  }
  
  window.addEventListener('scroll', onScrollTOp)



return(
    <div>
      <Banner/>
    <div className={`${ IsNavFixed ? "fixed w-full top-0 z-40 " : "relative " } transition-all ease-in-out duration-700`}>
      <div className=" bg-white lg:px-10 px-4 transition-all ease-in-out duration-700">
        <nav className='border-gray-200 py-10'>
          <div className=" flex flex-wrap justify-between items-center mx-auto">
          <Link to='/' className="flex items-center">
              <h2 className=" text-2xl sm:text-3xl font-semibold">Rentals</h2> 
          </Link>

          <form onSubmit={inputHandler} className="hidden md:max-w-xs w-full lg:max-w-lg md:block flex relative md:order-1 justify-center items-center">
                <input 
                  type="text" 
                  className={`${error ? "border-red-500" : ""} px-8 bg-white rounded-lg w-full lg:max-w-lg h-11 border focus:outline-none`}
                  placeholder="Search Products, categories ..."
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  />
                   <p className={`${error ? "opacity-1 transition-all ease-in-out duration-700" : "opacity-0"} text-center mt-2 text-xs flex text-red-600 absolute`}>
                    <span className="font-medium">Oh, snapp! </span> Please fill in.</p>
                  <button className="absolute outline-0 top-3.5 right-3">
                    <SearchIcon className=" z-50 cursor-pointer " />
                  </button>
          </form>
          <div className="md:w-auto md:order-1">
            <Hamburger className='cursor-pointer md:hidden' onClick={() => setIsDropDownFixed(!IsDropDownFixed)}/>
            <ul className={`md:relative fixed z-40 mt-8 md:right-0 flex md:flex-row flex-col p-4 md:p-0 items-start justify-center md:bg-transparent bg-white shadow md:shadow-none rounded md:space-y-0 space-y-4 md:mt-0 md:text-sm md:font-medium transition-all duration-700 ${IsDropDownFixed ? 'right-4 ' : '-right-80'}`}>
              {currentUser ?
               <div className='flex gap-3 flex-row space-x-3 items-center md:pr-0 pr-10 cursor-pointer' 
               onClick={
                 () => {
                   logout()
                   window.location.reload(true);
                 }}>
                 <ActionsUser/> 
                 Log Out
               </div>
               :
              <Link to="/signin" className='flex flex-row space-x-3 items-center md:pr-0 pr-10'>
                <ActionsUser/> 
                <span className=''>Log In</span>
              </Link>
              }
                <Link to="/shop" className="md:pl-6 ml-0 flex flex-row space-x-3 items-center md:pr-6 pr-10 ">
                  <Shop/>
                  <span className=''>Shop</span>
                </Link>
              <div className="cursor-pointer flex flex-row space-x-4 items-center md:pr-0 pr-10">
                <CartIcon/>
              </div>
            </ul>
          </div>

          <div className="mt-8 md:max-w-xs w-full lg:max-w-lg md:hidden flex relative md:order-1 justify-center items-center">
              <input 
              className={`${error ? "border-red-500" : ""} px-8 rounded-lg w-full lg:max-w-lg h-11 z-0 border bg-white focus:outline-none`} 
              placeholder="Search Products, categories..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value.toLowerCase())}
              />
                  <div className="absolute top-3.5 right-3">
                    <SearchIcon className="z-20 " onClick={inputHandler}/>
                  </div>
            </div>
          </div>
        </nav>
      </div>
    <Directory/>
    {hidden ? 
    null :
    <CartDropdown/>
    }
  </div>
</div>
)
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
  collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(Header);
