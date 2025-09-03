'use client';

import React from 'react';

import { Card, Carousel } from '@/components/ui/apple-cards-carousel';

import ShimmerText from './kokonutui/shimmer-text';

export function AppleCardsCarouselDemo2() {
    const cards = data.map((card, index) => <Card key={card.src} card={card} index={index} layout={true} />);

    return (
        <div className='h-full w-full px-8 py-20'>
            <p className='text-3xl font-black'> Communities</p>
            <Carousel items={cards} />
        </div>
    );
}

const DummyContent = () => {
    return (
        <>
            <p className='mx-auto max-w-3xl font-sans text-base text-neutral-600 md:text-2xl'>
                {/* <span className='font-bold text-neutral-700'>
                                The first rule of Apple club is that you boast about Apple club.
                            </span>{' '} */}
                A modern social media platform for sharing photos and videos, designed for simplicity and focused
                connection.
            </p>
        </>
    );
};
const DummyContent2 = () => {
    return (
        <>
            <p className='mx-auto max-w-3xl font-sans text-base text-neutral-600 md:text-2xl'>
                {/* <span className='font-bold text-neutral-700'>
                                The first rule of Apple club is that you boast about Apple club.
                            </span>{' '} */}
                A full-featured social networking platform, designed to help users share, and engage.
            </p>
        </>
    );
};
const DummyContent3 = () => {
    return (
        <>
            <p className='mx-auto max-w-3xl font-sans text-base text-neutral-600 md:text-2xl'>
                {/* <span className='font-bold text-neutral-700'>
                                The first rule of Apple club is that you boast about Apple club.
                            </span>{' '} */}
                A community-driven discussion platform, where users can create, join, and participate in topic-based
                communities.{' '}
            </p>
        </>
    );
};
const DummyContent4 = () => {
    return (
        <>
            <p className='mx-auto max-w-3xl font-sans text-base text-neutral-600 md:text-2xl'>
                {/* <span className='font-bold text-neutral-700'>
                                The first rule of Apple club is that you boast about Apple club.
                            </span>{' '} */}
                An all-in-one real-time communication platform, enabling users to create customizable servers for
                community-wide or private group interaction.{' '}
            </p>
        </>
    );
};
const DummyContent5 = () => {
    return (
        <>
            <p className='mx-auto max-w-3xl font-sans text-base text-neutral-600 md:text-2xl'>
                {/* <span className='font-bold text-neutral-700'>
                                The first rule of Apple club is that you boast about Apple club.
                            </span>{' '} */}
                A collaborative Q&A platform, where users can post questions, share answers, and upvote helpful content
                to build a trusted knowledge base.{' '}
            </p>
        </>
    );
};

const data = [
    {
        category: 'DeepServices_CMT',
        title: 'DeepConnects',
        src: '/deepconnects.png',
        content: <DummyContent />
    },
    {
        category: 'DeepServices_CMT',
        title: 'DeepFeeds',
        src: '/deepservices.jpg',
        content: <DummyContent2 />
    },

    {
        category: 'DeepServices_CMT',
        title: 'DeepKarma',
        src: '/deepservices.jpg',
        content: <DummyContent3 />
    },
    {
        category: 'DeepServices_CMT',
        title: 'DeepSpaces',
        src: '/deepservices.jpg',
        content: <DummyContent4 />
    },
    {
        category: 'DeepServices_CMT',
        title: 'DeepDoubts',
        src: '/deepservices.jpg',
        content: <DummyContent5 />
    }
];
