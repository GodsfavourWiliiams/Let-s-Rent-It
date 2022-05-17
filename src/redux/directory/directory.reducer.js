const INITIAL_STATE = {
    sections: [{
            title: 'Drones',
            id: 1,
            linkUrl: '/drones'
        },
        {
            title: 'Photography Equipment',
            id: 2,
            linkUrl: '/photographyequipment'
        },
        {
            title: 'Speakers',
            id: 3,
            linkUrl: '/speakers'
        },
        {
            title: 'Musical Instrument',
            id: 4,
            linkUrl: '/musicalInstrument'
        },
        {
            title: 'Tools',
            id: 5,
            linkUrl: '/tools'
        }
    ]
}

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default: return state;
    }
}


export default directoryReducer;