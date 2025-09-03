import Link from 'next/link';

import { ButtonDemo } from '@/components/button-demo';
import { AuroraText } from '@/components/magicui/aurora-text';
import { Button } from '@/registry/new-york-v4/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/registry/new-york-v4/ui/card';
import { Dialog } from '@/registry/new-york-v4/ui/dialog';

import { Check } from 'lucide-react';

export default function Pricing() {
    return (
        <section className='py-16 md:py-32'>
            <div className='mx-auto max-w-6xl px-6'>
                <div className='mx-auto mb-20 max-w-2xl space-y-6 text-center'>
                    <h1 className='text-center text-4xl font-semibold lg:text-5xl'>
                        Pricing {"that's"} <AuroraText> Ultra-Affordable </AuroraText>
                    </h1>
                    {/* <p>
                        Gemini is evolving to be more than just the models. It supports an entire to the APIs and
                        platforms helping developers and businesses innovate.
                    </p> */}
                </div>

                <div className='mt-8 grid gap-6 md:mt-20 md:grid-cols-3'>
                    <Card>
                        <CardHeader>
                            <CardTitle className='font-extrabold'>DeepCreative</CardTitle>

                            <span className='my-3 block text-2xl font-semibold'>
                                $1.09 <span className='opacity-60'> / mo </span>
                            </span>

                            <CardDescription className='text-sm'>Per user</CardDescription>
                            <Button asChild variant='outline' className='mt-4 w-full'>
                                <Link href='/contact'>Get Started</Link>
                            </Button>
                        </CardHeader>

                        <CardContent className='space-y-4'>
                            <hr className='border-dashed' />

                            <ul className='list-outside space-y-3 text-sm'>
                                {['DeepBoards', 'DeepPixels'].map((item, index) => (
                                    <li key={index} className='flex items-center gap-2 font-semibold'>
                                        <Check className='size-3' />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle className='font-extrabold'>DeepReach</CardTitle>

                            <span className='my-3 block text-2xl font-semibold'>
                                $1.09 <span className='opacity-60'> / mo </span>
                            </span>

                            <CardDescription className='text-sm'>Per user</CardDescription>
                            <Button asChild variant='outline' className='mt-4 w-full'>
                                <Link href='/contact'>Get Started</Link>
                            </Button>
                        </CardHeader>

                        <CardContent className='space-y-4'>
                            <hr className='border-dashed' />

                            <ul className='list-outside space-y-3 text-sm'>
                                {['DeepForms', 'DeepMails'].map((item, index) => (
                                    <li key={index} className='flex items-center gap-2 font-semibold'>
                                        <Check className='size-3' />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle className='font-extrabold'>DeepDev</CardTitle>

                            <span className='my-3 block text-2xl font-semibold'>
                                $1.09 <span className='opacity-60'> / mo </span>
                            </span>

                            <CardDescription className='text-sm'>Per user</CardDescription>
                            <Button asChild variant='outline' className='mt-4 w-full'>
                                <Link href='/contact'>Get Started</Link>
                            </Button>
                        </CardHeader>

                        <CardContent className='space-y-4'>
                            <hr className='border-dashed' />

                            <ul className='list-outside space-y-3 text-sm'>
                                {['DeepCodes', 'DeepDoubts'].map((item, index) => (
                                    <li key={index} className='flex items-center gap-2 font-semibold'>
                                        <Check className='size-3' />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle className='font-extrabold'>DeepManage</CardTitle>

                            <span className='my-3 block text-2xl font-semibold'>
                                $1.98 <span className='opacity-60'> / mo </span>
                            </span>

                            <CardDescription className='text-sm'>Per user</CardDescription>
                            <Button asChild variant='outline' className='mt-4 w-full'>
                                <Link href='/contact'>Get Started</Link>
                            </Button>
                        </CardHeader>

                        <CardContent className='space-y-4'>
                            <hr className='border-dashed' />

                            <ul className='list-outside space-y-3 text-sm'>
                                {['DeepEvents', 'DeepProjects', 'DeepTasks'].map((item, index) => (
                                    <li key={index} className='flex items-center gap-2 font-semibold'>
                                        <Check className='size-3' />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle className='font-extrabold'>DeepWork</CardTitle>

                            <span className='my-3 block text-2xl font-semibold'>
                                $2.28 <span className='opacity-60'> / mo </span>
                            </span>

                            <CardDescription className='text-sm'>Per user</CardDescription>
                            <Button asChild variant='outline' className='mt-4 w-full'>
                                <Link href='/contact'>Get Started</Link>
                            </Button>
                        </CardHeader>

                        <CardContent className='space-y-4'>
                            <hr className='border-dashed' />

                            <ul className='list-outside space-y-3 text-sm'>
                                {['DeepBoards', 'DeepDocs', 'DeepNotes', 'DeepNotebooks'].map((item, index) => (
                                    <li key={index} className='flex items-center gap-2 font-semibold'>
                                        <Check className='size-3' />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle className='font-extrabold'>DeepSocial</CardTitle>

                            <span className='my-3 block text-2xl font-semibold'>
                                $2.28 <span className='opacity-60'> / mo </span>
                            </span>

                            <CardDescription className='text-sm'>Per user</CardDescription>
                            <Button asChild variant='outline' className='mt-4 w-full'>
                                <Link href='/contact'>Get Started</Link>
                            </Button>
                        </CardHeader>

                        <CardContent className='space-y-4'>
                            <hr className='border-dashed' />

                            <ul className='list-outside space-y-3 text-sm'>
                                {['DeepConnects', 'DeepFeeds', 'DeepKarma', 'DeepSpaces'].map((item, index) => (
                                    <li key={index} className='flex items-center gap-2 font-semibold'>
                                        <Check className='size-3' />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>

                    <Card className='relative'>
                        <span className='absolute inset-x-0 -top-3 mx-auto flex h-6 w-fit items-center rounded-full bg-linear-to-br/increasing from-purple-400 to-amber-300 px-3 py-1 text-xs font-medium text-white/95 ring-1 ring-white/20 ring-offset-1 ring-offset-gray-950/5 ring-inset'>
                            Combo
                        </span>

                        <CardHeader>
                            <CardTitle className='font-extrabold'>DeepOps</CardTitle>

                            <span className='my-3 block text-2xl font-semibold'>
                                $6.68 <span className='opacity-60'> / mo </span>
                            </span>

                            <CardDescription className='text-sm'>Per user</CardDescription>

                            <Button asChild className='mt-4 w-full'>
                                <Link href='/contact'>Get Started</Link>
                            </Button>
                        </CardHeader>

                        <CardContent className='space-y-4'>
                            <hr className='border-dashed' />
                            <p className='font-bold'>Everything in DeepWork</p>

                            <ul className='list-outside space-y-3 text-sm'>
                                {['DeepBoards', 'DeepDocs', 'DeepNotes', 'DeepNotebooks'].map((item, index) => (
                                    <li key={index} className='flex items-center gap-2 font-semibold'>
                                        <Check className='size-3' />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <hr className='border-dashed' />
                            <p className='font-bold'>Everything in DeepManage</p>

                            <ul className='list-outside space-y-3 text-sm'>
                                {['DeepEvents', 'DeepProjects', 'DeepTasks'].map((item, index) => (
                                    <li key={index} className='flex items-center gap-2 font-semibold'>
                                        <Check className='size-3' />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <hr className='border-dashed' />
                            <p className='font-bold'>Additional</p>
                                         <ul className='list-outside space-y-3 text-sm'>
                                {['6x the limits of Basic Plans'].map((item, index) => (
                                    <li key={index} className='flex items-center gap-2 font-semibold'>
                                        <Check className='size-3' />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                    <Card className='relative'>
                        <span className='absolute inset-x-0 -top-3 mx-auto flex h-6 w-fit items-center rounded-full bg-linear-to-br/increasing from-purple-400 to-amber-300 px-3 py-1 text-xs font-medium text-white/95 ring-1 ring-white/20 ring-offset-1 ring-offset-gray-950/5 ring-inset'>
                            Combo
                        </span>

                        <CardHeader>
                            <CardTitle className='font-extrabold'>DeepStudio</CardTitle>

                            <span className='my-3 block text-2xl font-semibold'>
                                $6.68 <span className='opacity-60'> / mo </span>
                            </span>

                            <CardDescription className='text-sm'>Per user</CardDescription>

                            <Button asChild className='mt-4 w-full'>
                                <Link href='/contact'>Get Started</Link>
                            </Button>
                        </CardHeader>

                        <CardContent className='space-y-4'>
                            <hr className='border-dashed' />
                            <p className='font-bold'>Everything in DeepDev</p>

                            <ul className='list-outside space-y-3 text-sm'>
                                {['DeepCodes', 'DeepDoubts'].map((item, index) => (
                                    <li key={index} className='flex items-center gap-2 font-semibold'>
                                        <Check className='size-3' />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <hr className='border-dashed' />
                            <p className='font-bold'>Everything in DeepCreative</p>

                            <ul className='list-outside space-y-3 text-sm'>
                                {['DeepBoards', 'DeepPixels'].map((item, index) => (
                                    <li key={index} className='flex items-center gap-2 font-semibold'>
                                        <Check className='size-3' />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <hr className='border-dashed' />
                            <p className='font-bold'>Additional</p>
                                         <ul className='list-outside space-y-3 text-sm'>
                                {['6x the limits of Basic Plans'].map((item, index) => (
                                    <li key={index} className='flex items-center gap-2 font-semibold'>
                                        <Check className='size-3' />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                    <Card className='relative'>
                        <span className='absolute inset-x-0 -top-3 mx-auto flex h-6 w-fit items-center rounded-full bg-linear-to-br/increasing from-purple-400 to-amber-300 px-3 py-1 text-xs font-medium text-white/95 ring-1 ring-white/20 ring-offset-1 ring-offset-gray-950/5 ring-inset'>
                            Combo
                        </span>

                        <CardHeader>
                            <CardTitle className='font-extrabold'>DeepFlow</CardTitle>

                            <span className='my-3 block text-2xl font-semibold'>
                                $6.68 <span className='opacity-60'> / mo </span>
                            </span>

                            <CardDescription className='text-sm'>Per user</CardDescription>

                            <Button asChild className='mt-4 w-full'>
                                <Link href='/contact'>Get Started</Link>
                            </Button>
                        </CardHeader>

                        <CardContent className='space-y-4'>
                            <hr className='border-dashed' />
                            <p className='font-bold'>Everything in DeepSocial</p>

                            <ul className='list-outside space-y-3 text-sm'>
                                {['DeepConnects', 'DeepFeeds', 'DeepKarma', 'DeepSpaces'].map((item, index) => (
                                    <li key={index} className='flex items-center gap-2 font-semibold'>
                                        <Check className='size-3' />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <hr className='border-dashed' />
                            <p className='font-bold'>Everything in DeepReach</p>

                            <ul className='list-outside space-y-3 text-sm'>
                                {['DeepForms', 'DeepMails'].map((item, index) => (
                                    <li key={index} className='flex items-center gap-2 font-semibold'>
                                        <Check className='size-3' />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <hr className='border-dashed' />
                            <p className='font-bold'>Additional</p>
                                         <ul className='list-outside space-y-3 text-sm'>
                                {['6x the limits of Basic Plans'].map((item, index) => (
                                    <li key={index} className='flex items-center gap-2 font-semibold'>
                                        <Check className='size-3' />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                    <Card className='relative'>
                        <span className='absolute inset-x-0 -top-3 mx-auto flex h-6 w-fit items-center rounded-md bg-linear-to-br/increasing from-cyan-400 to-blue-700 px-3 py-1 text-xs font-medium text-white/95 ring-1 ring-white/20 ring-offset-1 ring-offset-gray-950/5 ring-inset'>
                            Unlimited
                        </span>

                        <CardHeader>
                            <CardTitle className='font-extrabold'>DeepInfinity</CardTitle>

                            <span className='my-3 block text-2xl font-semibold'>
                                $19.98 <span className='opacity-60'> / mo </span>
                            </span>

                            <CardDescription className='text-sm'>Per user</CardDescription>

                            <Button asChild className='mt-4 w-full'>
                                <Link href='/contact'>Get Started</Link>
                            </Button>
                        </CardHeader>

                        <CardContent className='space-y-4'>
                            <hr className='border-dashed' />

                            <p className='font-bold'>Everything in DeepCreative</p>

                            <ul className='list-outside space-y-3 text-sm'>
                                {['DeepBoards', 'DeepPixels'].map((item, index) => (
                                    <li key={index} className='flex items-center gap-2 font-semibold'>
                                        <Check className='size-3' />
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <hr className='border-dashed' />
                            <p className='font-bold'>Everything in DeepReach</p>

                            <ul className='list-outside space-y-3 text-sm'>
                                {['DeepForms', 'DeepMails'].map((item, index) => (
                                    <li key={index} className='flex items-center gap-2 font-semibold'>
                                        <Check className='size-3' />
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <hr className='border-dashed' />
                            <p className='font-bold'>Everything in DeepDev</p>

                            <ul className='list-outside space-y-3 text-sm'>
                                {['DeepCodes', 'DeepDoubts'].map((item, index) => (
                                    <li key={index} className='flex items-center gap-2 font-semibold'>
                                        <Check className='size-3' />
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <hr className='border-dashed' />
                            <p className='font-bold'>Everything in DeepManage</p>

                            <ul className='list-outside space-y-3 text-sm'>
                                {['DeepEvents', 'DeepProjects', 'DeepTasks'].map((item, index) => (
                                    <li key={index} className='flex items-center gap-2 font-semibold'>
                                        <Check className='size-3' />
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <hr className='border-dashed' />
                            <p className='font-bold'>Everything in DeepWork</p>

                            <ul className='list-outside space-y-3 text-sm'>
                                {['DeepBoards', 'DeepDocs', 'DeepNotes', 'DeepNotebooks'].map((item, index) => (
                                    <li key={index} className='flex items-center gap-2 font-semibold'>
                                        <Check className='size-3' />
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <hr className='border-dashed' />
                            <p className='font-bold'>Everything in DeepSocial</p>

                            <ul className='list-outside space-y-3 text-sm'>
                                {['DeepConnects', 'DeepFeeds', 'DeepKarma', 'DeepSpaces'].map((item, index) => (
                                    <li key={index} className='flex items-center gap-2 font-semibold'>
                                        <Check className='size-3' />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <hr className='border-dashed' />
                            <p className='font-bold'>Additional</p>
                                         <ul className='list-outside space-y-3 text-sm'>
                                {['No limits'].map((item, index) => (
                                    <li key={index} className='flex items-center gap-2 font-semibold'>
                                        <Check className='size-3' />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                    <Card className='relative'>
                        <span className='absolute inset-x-0 -top-3 mx-auto flex h-6 w-fit items-center rounded-full bg-linear-to-br/increasing from-green-400 to-cyan-400 px-3 py-1 text-xs font-medium text-white/95 ring-1 ring-white/20 ring-offset-1 ring-offset-gray-950/5 ring-inset'>
                            Custom
                        </span>

                        <CardHeader>
                            <CardTitle className='font-extrabold'>DeepPurpose</CardTitle>

                            <span className='my-3 block text-2xl font-semibold'>
                                $??.?? <span className='opacity-60'> / mo </span>
                            </span>

                            <CardDescription className='text-sm'>Per user</CardDescription>

                            <Button asChild className='mt-4 w-full'>
                                <Link href='/contact'>Get Started</Link>
                            </Button>
                        </CardHeader>

                        <CardContent className='space-y-4'>
                            <hr className='border-dashed' />
                            <p className='font-bold'>Everything as per your needs</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}

