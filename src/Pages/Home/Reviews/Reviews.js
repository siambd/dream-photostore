import React from 'react';

import user1 from '../../../images/user1.png'
import user2 from '../../../images/user2.png'
import user3 from '../../../images/user3.jpg'
import Review from '../Review/Review';

const reviews =[
    {id:1, name:'will farado', img: user1, rating: '4 out of 5', ureview:'Ok guys, here is a completely unbiased, 100% honest review. '},

    {id:2, name:'samsu farado', img: user2, rating: '5 out of 5', ureview: 'I do not know why there are so many bad reviews. '},

    {id:3, name:'nonte farado', img: user3, rating: '4.5 out of 5', ureview: 'Ive bought these because my Kickstarter purchase has been delayed for so long.'}
]

const Reviews = () => {
    return (
        <div className='container'>
            <h2 className='text-center text-primary'> My user review: </h2>
            <div className='row'>
                {
                   reviews.map( review => <Review
                   key={review.id}
                   review={review}
                   ></Review> ) 
                }

            </div>
        </div>
    );
};

export default Reviews;