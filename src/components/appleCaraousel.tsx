'use client';

import React from 'react';

import { Card, Carousel } from '@/components/ui/apple-cards-carousel';

import ShimmerText from './kokonutui/shimmer-text';

export function AppleCardsCarouselDemo() {
    const cards = data.map((card, index) => <Card key={card.src} card={card} index={index} layout={true} />);

    return (
        <div className='h-full w-full px-8 py-20'>
            <p className='text-3xl font-black'> Productivity</p>
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
                A digital note-taking app that provides a single, organized place to capture your notes, ideas, plans,
                sketches, and information—whether for work, school, or personal use.{' '}
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
                A comprehensive all-in-one productivity and collaboration platform, enabling users to create, organize,
                and manage notes, documents, tasks, and wikis within a unified workspace.
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
                A robust project and issue tracking platform, designed for agile teams to plan, manage, and collaborate
                on tasks and projects.{' '}
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
                A powerful and intuitive task management app designed to help individuals and teams organize,
                prioritize, and complete their work efficiently.{' '}
            </p>
        </>
    );
};

const data = [
    {
        category: 'DeepServices_PTY',
        title: 'DeepNotebooks',
        src: '/deepservices.jpg',
        content: <DummyContent />
    },
    {
        category: 'DeepServices_PTY',
        title: 'DeepNotes',
        src: '/deepservices.jpg',
        content: <DummyContent2 />
    },
    {
        category: 'DeepServices_PTY',
        title: 'DeepProjects',
        src: '/deepservices.jpg',
        content: <DummyContent3 />
    },
    {
        category: 'DeepServices_PTY',
        title: 'DeepTasks',
        src: '/deepservices.jpg',
        content: <DummyContent4 />
    }
];
