import React from 'react';

import { Button } from '@/registry/new-york-v4/ui/button';

import { HighlighterText } from './magicui/highlighter';
import { PulsatingButton } from './magicui/pulsating-button';
import { SparklesText } from './magicui/sparkles-text';

function ServicesHeader() {
    return (
        <div className='mt-20 flex flex-col items-center justify-center gap-5'>
            <div className='text-center'>
                <SparklesText sparklesCount={8}>DeepServices</SparklesText>
            </div>
            <div className='flex gap-3'>
                <Button variant={'outline'} className='font-semibold text-gray-600 dark:text-white/60'>
                    Beta
                </Button>
                <Button variant={'outline'} className='font-bold text-gray-800 dark:text-white/80'>
                    
                    Early Access starts 12 Sep
                </Button>
            </div>
            {/* <PulsatingButton>HI</PulsatingButton> */}
            <div className='mt-8 px-16'>
                <p className='mx-auto max-w-3xl font-sans text-base text-neutral-600 md:text-2xl'>
                    Experience the future of productivity with DeepServices, an all-in-one platform giving total control
                    over 15 categorized platforms. Effortlessly manage and upgrade apps in a unified workspace built for
                    creators, collaborators, organizers, and designers. <br />
                    <br /> Switch seamlessly between productivity, collaboration, and social apps no barriers, pure
                    flow. With upcoming AI-powered services, DeepServices expands support to over 20 app categories,
                    unlocking smarter workflows.
                </p>
            </div>
        </div>
    );
}

export default ServicesHeader;

