'use client';

import React from 'react';

import { Card, Carousel } from '@/components/ui/apple-cards-carousel';

import ShimmerText from './kokonutui/shimmer-text';

export function AppleCardsCarouselDemo3() {
    const cards = data.map((card, index) => <Card key={card.src} card={card} index={index} layout={true} />);

    return (
        <div className='h-full w-full px-8 py-20'>
            <p className='text-3xl font-black'> Professional</p>
            <Carousel items={cards} />
        </div>
    );
}

const DummyContent1 = () => {
    return (
        <>
            <p className='mx-auto max-w-3xl font-sans text-base text-neutral-600 md:text-2xl'>
                {/* <span className='font-bold text-neutral-700'>
                    The first rule of Apple club is that you boast about Apple club.
                </span>{' '} */}
                Helps design and development teams build great products, together.{' '}
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
                Code, compile, and, run over 16 languages and more online from your browser.{' '}
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
                Free online word processor that allows users to create, and, edit documents in real time through a web
                browser.{' '}
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
                An online scheduling and appointment automation platform designed to simplify the process of booking
                meetings.{' '}
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
                Free online tool that lets users create, share, and manage customizable forms for surveys, quizzes,
                registrations, and other data collection needs.{' '}
            </p>
        </>
    );
};
const DummyContent6 = () => {
    return (
        <>
            <p className='mx-auto max-w-3xl font-sans text-base text-neutral-600 md:text-2xl'>
                {/* <span className='font-bold text-neutral-700'>
                    The first rule of Apple club is that you boast about Apple club.
                </span>{' '} */}
                Designed to efficiently manage and send email newsletters, this platform offers enhanced security
                measures against spam and provides tools for creating beautiful email templates.{' '}
            </p>
        </>
    );
};
const DummyContent7 = () => {
    return (
        <>
            <p className='mx-auto max-w-3xl font-sans text-base text-neutral-600 md:text-2xl'>
                {/* <span className='font-bold text-neutral-700'>
                    The first rule of Apple club is that you boast about Apple club.
                </span>{' '} */}
                Web-based tool that leverages techniques to automate and enhance photo editing tasks, offering easy and
                powerful features for users.{' '}
            </p>
        </>
    );
};

const data = [
    {
        category: 'DeepServices_PRO',
        title: 'DeepBoards',
        src: '/deepservices.jpg',
        content: <DummyContent1 />
    },
    {
        category: 'DeepServices_PRO',
        title: 'DeepCodes',
        src: '/deepservices.jpg',
        content: <DummyContent2 />
    },
    {
        category: 'DeepServices_PRO',
        title: 'DeepDocs',
        src: '/deepservices.jpg',
        content: <DummyContent3 />
    },
    {
        category: 'DeepServices_PRO',
        title: 'DeepEvents',
        src: '/deepevents.png',
        content: <DummyContent4 />
    },
    {
        category: 'DeepServices_SOC',
        title: 'DeepForms',
        src: '/deepforms.png',
        content: <DummyContent5 />
    },
    {
        category: 'DeepServices_PRO',
        title: 'DeepMails',
        src: '/deepmails.png',
        content: <DummyContent6 />
    },
    {
        category: 'DeepServices_PRO',
        title: 'DeepPixels',
        src: '/deeppixels.png',
        content: <DummyContent7 />
    }
];
