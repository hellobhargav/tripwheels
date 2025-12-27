import React, { Component } from 'react';
import MobileEx from './MobileEx';

export default class Mobiles extends Component {
    render() {
        const mobiles = [
            {
                title: "iPhone 15 Pro",
                // Apple Newsroom has official images — you may need to browse and pick needed variant
                path: "https://www.apple.com/newsroom/2023/09/apple-unveils-iphone-15-pro-and-iphone-15-pro-max/",
                price: 134900  // as per Apple Newsroom :contentReference[oaicite:1]{index=1}
            },
            {
                title: "Samsung Galaxy S24 Ultra",
                path: "https://www.samsungmobilepress.com/media-assets/galaxy-s24-ultra?tab=images&type=product",
                price: 129999 // approximate / placeholder
            },
            {
                title: "OnePlus 12",
                // OnePlus press release / design page
                path: "https://www.oneplus.in/12",
                price: 64999 // example price
            },
            {
                title: "OnePlus 12 (press release)",
                path: "https://www.oneplus.in/press/press-release/oneplus-unveils-oneplus-12-oneplus-12r-and-oneplus-buds-3-at-smooth-beyond-belief-launch-event",
                price: 65000 // approximate
            },
            {
                title: "iPhone 15 Pro - Spatial Video Feature",
                path: "https://www.apple.com/in/newsroom/2023/12/apple-introduces-spatial-video-capture-on-iphone-15-pro/",
                price: 134900
            }
        ];

        return (
            <div className='mobiles'>
                <h2>Latest Mobiles</h2>
                {
                    mobiles.map((mobile, index) => {
                        return <MobileEx key={index} title={mobile.title} price={mobile.price} path={mobile.path} />
                    })
                }
            </div>
        )
    }
}

