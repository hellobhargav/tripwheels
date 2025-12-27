import { BUY_MOBILE } from "./MobileType";


//State
const initialStock = {
    mobiles: 10
}

export const MobileReducer = (state = initialStock, action) => {
    switch (action.type) {
        case BUY_MOBILE:
            return {
                mobiles: state.mobiles - 1
            }
        default:
            return state
    }
}