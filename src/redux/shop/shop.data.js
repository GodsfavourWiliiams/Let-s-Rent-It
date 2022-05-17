const SHOP_DATA = [{
        id: 1,
        title: 'Drones',
        routeName: 'drones',
        items: [{
                id: 1,
                name: 'Brown Brim',
                imageUrl: 'https://images.unsplash.com/photo-1590513445309-502c810e463e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZHJvbnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
                price: 25,
                rating: 3.9,
                reviewCount: 45,
                shipping: 8.00
            },
            {
                id: 2,
                name: 'Blue Beanie',
                imageUrl: 'https://media.istockphoto.com/photos/drone-on-a-white-background-picture-id1226839668?k=20&m=1226839668&s=612x612&w=0&h=sx6jswa7XfyS5qOhhngfhmAWas86N3jvVW-uBWLBWKs=',
                price: 18,
                rating: 4,
                reviewCount: 30,
            },
            {
                id: 3,
                name: 'Brown Cowboy',
                imageUrl: 'https://media.istockphoto.com/photos/selfdriving-delivery-robot-concept-picture-id1160746084?k=20&m=1160746084&s=612x612&w=0&h=--G8qckmEC5Oa6DXrXFDYKMUvw2gCY953bD6fuduDak=',
                price: 35,
                rating: 4,
                reviewCount: 41,
                shipping: 8.00
            },
            {
                id: 4,
                name: 'Grey Brim',
                imageUrl: 'https://media.istockphoto.com/photos/quadcopter-drone-with-4k-video-camera-flying-in-the-air-picture-id911190112?k=20&m=911190112&s=612x612&w=0&h=6mkFfZ_h5OVzYH_b0DVaYMdMZd86Zn8MZH89gWPJN0w=',
                price: 25,
                rating: 3,
                reviewCount: 27,
                shipping: 10.00
            },
            {
                id: 5,
                name: 'Green Beanie',
                imageUrl: 'https://media.istockphoto.com/photos/hovering-drone-that-takes-pictures-picture-id511065858?k=20&m=511065858&s=612x612&w=0&h=6Xq1LXTnxKtauRNA_MqSFfCjMBl5XiI7DNIexywXfis=',
                price: 18,
                rating: 5,
                reviewCount: 31,
                shipping: 18.00
            },
            {
                id: 6,
                name: 'Palm Tree Cap',
                imageUrl: 'https://media.istockphoto.com/photos/front-view-of-selfdriving-passenger-drone-flying-in-the-sky-picture-id864542852?k=20&m=864542852&s=612x612&w=0&h=XWrka0zHcEvEcyKGRF30WkDBIfUBqYWurco0PI7ubf0=',
                price: 14,
                rating: 3,
                reviewCount: 43,
                shipping: 8.00
            },
            {
                id: 7,
                name: 'Red Beanie',
                imageUrl: 'https://media.istockphoto.com/photos/orange-selfdriving-passenger-drone-takeoff-from-helipad-picture-id940926358?k=20&m=940926358&s=612x612&w=0&h=XapwQivdTthN0X-AfDMcOJo_qQNDEyNkSUPeFwT_xuY=',
                price: 18,
                rating: 2,
                reviewCount: 30,
                shipping: 4.00
            },
            {
                id: 8,
                name: 'Drons Meta',
                imageUrl: 'https://media.istockphoto.com/photos/aerial-photography-by-drone-motion-in-the-air-in-motion-picture-id586731670?k=20&m=586731670&s=612x612&w=0&h=qQBypPLOnYW4l43P9djZUkbXDKg0rAWwR5gfn1-Z1WM=',
                price: 14,
                rating: 3,
                reviewCount: 20,
                shipping: 7.00
            },
            {
                id: 9,
                name: 'Blue Snapback',
                imageUrl: 'https://media.istockphoto.com/photos/flying-drone-3d-illustration-picture-id883070010?k=20&m=883070010&s=612x612&w=0&h=HngwN6NcR6YEW5RZFYXVbDqCXVExI8ghozJkBsyVT4Y=',
                price: 16,
                rating: 4,
                reviewCount: 87,
                shipping: 8.00
            }
        ]
    },
    {
        id: 2,
        title: 'Speakers',
        routeName: 'speakers',
        items: [{
                id: 10,
                name: 'Adidas NMD',
                imageUrl: 'https://media.istockphoto.com/photos/speaker-on-white-background-picture-id182821899?k=20&m=182821899&s=612x612&w=0&h=jGYus8HVPdaqbnvFkpjV0UIwR438MKtnwYyKM_18JV8=',
                price: 220,
                rating: 3,
                reviewCount: 21,
                shipping: 5.00
            },
            {
                id: 11,
                name: 'Adidas Yeezy',
                imageUrl: 'https://media.istockphoto.com/photos/two-huge-speakers-picture-id182883783?k=20&m=182883783&s=612x612&w=0&h=mmKBzhMZ1u1WxgS7QYM-_8KYEyNCm53ik9srapy8p_Y=',
                price: 280,
                rating: 4,
                reviewCount: 27,
                shipping: 8.00
            },
            {
                id: 12,
                name: 'Black Converse',
                imageUrl: 'https://media.istockphoto.com/photos/single-golden-black-speaker-front-view-3d-picture-id1224049868?k=20&m=1224049868&s=612x612&w=0&h=5iJKdcIlU_uJL6ppOtAILeos_yFjkfnEeFQTdYaKyhI=',
                price: 110,
                rating: 5,
                reviewCount: 36,
                shipping: 9.00
            },
            {
                id: 13,
                name: 'Nike White AirForce',
                imageUrl: 'https://media.istockphoto.com/photos/guitar-amplifier-picture-id182702861?k=20&m=182702861&s=612x612&w=0&h=nZdnXEDmbmSMkI-WAt2tYYAuycfXZYCdR375ObPtJeY=',
                price: 160,
                rating: 5,
                reviewCount: 57,
                shipping: 6.00
            },
            {
                id: 14,
                name: 'Nike Red High Tops',
                imageUrl: 'https://media.istockphoto.com/vectors/music-speaker-twisted-isolated-3d-realistic-icons-set-design-vector-vector-id665311940?k=20&m=665311940&s=612x612&w=0&h=Bgj9fPMAPzxGm-YoudMCKy_OeyYymMrkdAPJFOfKZ2k=',
                price: 160,
                rating: 5,
                reviewCount: 27,
                shipping: 6.00

            },
            {
                id: 15,
                name: 'Nike Brown High Tops',
                imageUrl: 'https://media.istockphoto.com/photos/hifi-black-loud-speaker-box-in-close-upprofessional-audio-equipment-picture-id1085903750?k=20&m=1085903750&s=612x612&w=0&h=an94PWadHgYtV0z7Ic76y2gPdsWqPFy1ykiJPXDxtB8=',
                price: 160,
                rating: 5,
                reviewCount: 27,
                shipping: 10.00

            },
            {
                id: 16,
                name: 'Air Jordan Limited',
                imageUrl: 'https://media.istockphoto.com/photos/stereo-loudspeakers-wclipping-path-picture-id157591180?k=20&m=157591180&s=612x612&w=0&h=tOYN1M7cRo9aeX1YH73OJB3AEgppQTEn91k-zQv1fAY=',
                price: 190,
                rating: 4,
                reviewCount: 27,
                shipping: 16.00

            },
            {
                id: 17,
                name: 'Timberlands',
                imageUrl: 'https://media.istockphoto.com/photos/group-of-speakers-picture-id177747450?k=20&m=177747450&s=612x612&w=0&h=dTcEWCIHLAaHB7UJ5aCFs6AgxGVv3lt0_dzpKF6BQnI=',
                price: 1200,
                rating: 4,
                reviewCount: 27,
                shipping: 12.00

            }
        ]
    },
    {
        id: 3,
        title: 'Cameras',
        routeName: 'cameras',
        items: [{
                id: 18,
                name: 'Black Jean Shearling',
                imageUrl: 'https://media.istockphoto.com/photos/camera-with-mounted-50mm-f14-lens-on-white-background-picture-id174455805?k=20&m=174455805&s=612x612&w=0&h=rCwTiENnIIZaZPNq2UrAhiRnCWmRd57q53EWbOO4mgQ=',
                price: 130,
                rating: 5,
                reviewCount: 20,
                shipping: 6.00

            },
            {
                id: 19,
                name: 'Auto-focus 35mm single lens reflex',
                imageUrl: 'https://media.istockphoto.com/photos/auto-focus-35mm-slr-camera-picture-id182179974?k=20&m=182179974&s=612x612&w=0&h=lIczSuJH-FIgMP_JtXnWSzWX457pbR53OTHsHxOvrbQ=',
                price: 130,
                rating: 4,
                reviewCount: 130,
                shipping: 5.00

            },
            {
                id: 20,
                name: 'Very rare old 35 mm SLR film ',
                imageUrl: 'https://media.istockphoto.com/photos/very-rare-old-35-mm-slr-film-camera-on-white-background-picture-id1357955437?k=20&m=1357955437&s=612x612&w=0&h=ko8n5OgtV2_u6DCS8sRd04H0Dgd3UyilNopZCC58bs0=',
                price: 90,
                rating: 3,
                reviewCount: 67,
                shipping: 7.00

            },
            {
                id: 21,
                name: 'Canon 5d',
                imageUrl: 'https://media.istockphoto.com/photos/vintage-looking-modern-mirrorless-camera-isolated-on-white-background-picture-id1324993565?k=20&m=1324993565&s=612x612&w=0&h=HOc9BBWgWPeq7vYMgD7Qhub_73meFW0tYXdipuL3AHI=',
                price: 115,
                rating: 5,
                reviewCount: 57,
            },
            {
                id: 22,
                name: 'Old vintage film camera with lens',
                imageUrl: 'https://i.ibb.co/M6hHc3F/brown-trench.png',
                price: 52,
                rating: 3,
                reviewCount: 42,
                shipping: 6.00

            }
        ]
    },
    {
        id: 4,
        title: 'Tripods',
        routeName: 'tripods',
        items: [{
                id: 23,
                name: 'Tripods 1',
                imageUrl: 'https://media.istockphoto.com/vectors/tripod-vector-illustration-isolated-on-white-background-vector-id1153991033?k=20&m=1153991033&s=612x612&w=0&h=p00BKYLZPBrODm3jgSuHLjRdNcVe-5IXInUV8bGldw8=',
                price: 50,
                rating: 4,
                reviewCount: 72,
                shipping: 10.00

            },
            {
                id: 24,
                name: 'Tripod old 35 mm SLR film',
                imageUrl: 'https://media.istockphoto.com/photos/old-wooden-camera-on-a-tripod-isolated-on-white-background-picture-id1153696361?k=20&m=1153696361&s=612x612&w=0&h=QkKXc_IJ8TiHiIRrXC8PXnaGe3_6EVrTpT-dYETmJgc=',
                price: 61,
                rating: 3,
                reviewCount: 47,
                shipping: 9.00

            },
            {
                id: 25,
                name: 'Tripod Aluminium',
                imageUrl: 'https://media.istockphoto.com/photos/tripod-picture-id159739353?k=20&m=159739353&s=612x612&w=0&h=NUzgWByEm5GPTc8t8id-zME1wXSKvl8lr2XadiAf4lI=',
                price: 90,
                rating: 5,
                reviewCount: 29,
                shipping: 7.00

            },
            {
                id: 26,
                name: 'Tripod Foreign',
                imageUrl: 'https://media.istockphoto.com/photos/photoshoot-tripod-in-studio-photo-with-white-background-picture-id1176885942?k=20&m=1176885942&s=612x612&w=0&h=7Cs92ix4gE_XiEMgN9skR4pkNINwC0ntbDnZiO31DRc=',
                price: 65,
                rating: 5,
                reviewCount: 127,
                shipping: 7.00

            },
            {
                id: 27,
                name: 'Tripod with lens',
                imageUrl: 'https://media.istockphoto.com/photos/smartphone-and-mini-tripod-isolated-on-white-picture-id1355329741?k=20&m=1355329741&s=612x612&w=0&h=kt8Pkl4GeaJPWvl1hAK5ewXQ3T9waX5cLPr3eIC0rmg=',
                price: 85,
                rating: 3,
                reviewCount: 57,
                shipping: 9.00

            }
        ]
    },

    {
        id: 5,
        title: 'Musical Instrument',
        routeName: 'musicalInstrument',
        items: [{
                id: 28,
                name: 'Electric Guitar',
                imageUrl: 'https://media.istockphoto.com/vectors/electric-guitar-icon-on-transparent-background-vector-id1284454546?k=20&m=1284454546&s=612x612&w=0&h=qaQRYPgLqXmIQkHLk26N7h21ezWMAt9edfbjlyGN0gk=',
                price: 245,
                rating: 5,
                reviewCount: 107,
                shipping: 12.00

            },
            {
                id: 29,
                name: 'Acoutic Guitar',
                imageUrl: 'https://media.istockphoto.com/photos/electric-guitar-isolated-on-white-background-picture-id471493238?k=20&m=471493238&s=612x612&w=0&h=aH924rxwbenNHdu3a6lS7OpbyVgOyxEHdDl2-rdgNd8=',
                price: 29,
                rating: 3,
                reviewCount: 42,
                shipping: 10.00

            },
            {
                id: 30,
                name: 'Bass Guitar',
                imageUrl: 'https://media.istockphoto.com/photos/bass-guitar-and-amp-picture-id173198149?k=20&m=173198149&s=612x612&w=0&h=hzs-MGXshFlmHW-0ue3Tp5S5SzTlmSozMwQT4bODtqk=',
                price: 50,
                rating: 5,
                reviewCount: 237,
                shipping: 20.00

            },
            {
                id: 31,
                name: 'Electric Bass Guitar',
                imageUrl: 'https://media.istockphoto.com/photos/bass-guitar-on-white-background-picture-id123715735?k=20&m=123715735&s=612x612&w=0&h=045gNhNFz2JNHoN4pXzPTdCk_Sgt65dsbS4bfRuAwIo=',
                price: 70,
                rating: 3,
                reviewCount: 27,
                shipping: 16.00

            },
            {
                id: 32,
                name: 'Sweater',
                imageUrl: 'https://i.ibb.co/KmSkMbH/striped-sweater.png',
                price: 45,
                rating: 4,
                reviewCount: 49,
                shipping: 6.00

            },
            {
                id: 33,
                name: 'Track Suit',
                imageUrl: 'https://i.ibb.co/v1cvwNf/yellow-track-suit.png',
                price: 65,
                rating: 5,
                reviewCount: 55,
                shipping: 8.00

            },
            {
                id: 34,
                name: 'Blouse',
                imageUrl: 'https://i.ibb.co/qBcrsJg/white-vest.png',
                price: 50,
                rating: 5,
                reviewCount: 79,
                shipping: 7.00
            }
        ]
    },
    {
        id: 6,
        title: 'Power Drils',
        routeName: 'powerDrills',
        items: [{
                id: 35,
                name: 'Down Vest',
                imageUrl: 'https://media.istockphoto.com/photos/cordless-yellow-power-drill-isolated-on-a-white-background-picture-id184294297?k=20&m=184294297&s=612x612&w=0&h=uGQE4GpwpKeJWo1HstIVsnZhH303z5ncpKQiWvHVEdc=',
                price: 25,
                rating: 5,
                reviewCount: 50,
                shipping: 9.00

            },
            {
                id: 36,
                name: 'T-shirt',
                imageUrl: 'https://media.istockphoto.com/photos/cordless-screwdriver-isolated-on-white-background-3d-illustration-picture-id696940658?k=20&m=696940658&s=612x612&w=0&h=ehfjdubytfBYitKlnUNhzGQ_gXTdEvCSkyLN9l7NzNM=',
                price: 38,
                rating: 4,
                reviewCount: 89,
                shipping: 10.00

            },
            {
                id: 37,
                name: 'Black & White Longsleeve',
                imageUrl: 'https://media.istockphoto.com/photos/yellowblack-cordless-combi-drill-driver-hammer-drill-and-extra-on-picture-id1302946752?k=20&m=1302946752&s=612x612&w=0&h=WNnA36v63zP2Mxnd3CvSYwt4-MhtHPTjO-2Vkgvzmok=',
                price: 41,
                rating: 3,
                reviewCount: 75,
                shipping: 8.00

            },
            {
                id: 38,
                name: 'Pink T-shirt',
                imageUrl: 'https://media.istockphoto.com/photos/electric-drilling-machine-picture-id985100106?k=20&m=985100106&s=612x612&w=0&h=IHnB-ov2OSHO49XYzuBEMFqS2VzIF51UvT4O7p2KFCU=',
                price: 59,
                rating: 4,
                reviewCount: 100,
                shipping: 9.00

            },
            {
                id: 39,
                name: 'Jean Long Sleeve',
                imageUrl: 'https://media.istockphoto.com/photos/screwdriver-cordless-drill-picture-id496406386?k=20&m=496406386&s=612x612&w=0&h=2KjKjcfdasj6uSuJg-AQa_Nrxdt404KR7_4kFAlfjW8=',
                price: 40,
                rating: 5,
                reviewCount: 130,
                shipping: 6.00

            },
            {
                id: 40,
                name: 'Burgundy T-shirt',
                imageUrl: 'https://i.ibb.co/mh3VM1f/polka-dot-shirt.png',
                price: 35,
                rating: 5,
                reviewCount: 159,
                shipping: 6.00

            }
        ]
    }
];

export default SHOP_DATA;