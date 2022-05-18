const INITIAL_STATE = {
    sections: [{
            title: 'Drones',
            id: 1,
            linkUrl: 'shop/drones'
        },
        {
            title: 'Cameras',
            id: 2,
            linkUrl: 'shop/cameras'
        },
        {
            title: ' Tripods',
            id: 3,
            linkUrl: 'shop/tripods'
        },
        {
            title: 'Speakers',
            id: 4,
            linkUrl: 'shop/speakers'
        },
        {
            title: 'Musical Instrument',
            id: 5,
            linkUrl: 'shop/musicalInstrument'
        },
        {
            title: 'Tools',
            id: 6,
            linkUrl: 'shop/tools'
        }
    ]
}

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default: return state;
    }
}


export default directoryReducer;