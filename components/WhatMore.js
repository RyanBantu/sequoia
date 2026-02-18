import Link from 'next/link';
import React from 'react';

const WhatMore = () => {
	return (
		<div className='what__more'>
			<h1>What more are you waiting for?</h1>
			<p>Contact us and let's get started working!</p>
			<a className='button__red' href='/contact'>
				Contact Us
			</a>
            <style jsx>{`
                .what__more {
                    margin-top: 2rem;
                    padding-top: 1rem;
                }
                @media (max-width: 768px) {
                    .what__more {
                        margin-top: 15rem;
						padding:20px;
						text-align: center;
                    }
                }
            `}</style>
		</div>
	);
};

export default WhatMore;
