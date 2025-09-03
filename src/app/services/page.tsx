import React from 'react';

import Link from 'next/link';

import { AppleCardsCarouselDemo } from '@/components/appleCaraousel';
import { AppleCardsCarouselDemo2 } from '@/components/appleCaraousel2';
import { AppleCardsCarouselDemo3 } from '@/components/appleCaraousel3';
import { HighlighterText } from '@/components/magicui/highlighter';
import { RainbowButton } from '@/components/magicui/rainbow-button';
import ServicesHeader from '@/components/servicesHeader';
import { LoaderFive } from '@/components/ui/loader';

function Services() {
    return (
        <main className='min-h-screen w-full'>
            <ServicesHeader />
            <AppleCardsCarouselDemo3 />
            <AppleCardsCarouselDemo />
            <AppleCardsCarouselDemo2 />
            <div className='mb-16 flex items-center justify-center px-16 font-semibold'>
                <Link href={'/services/pricing'}>
                    <RainbowButton className='' variant={'outline'}>
                        <LoaderFive text='Pricing' />
                    </RainbowButton>
                </Link>
            </div>
        </main>
    );
}

export default Services;
