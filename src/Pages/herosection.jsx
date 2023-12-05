import React from 'react';

const HeroSection = () => {
    return (
        <>
            <div className="bg-white">
                <main>
                    <div className="relative isolate">
                        <div className="overflow-hidden">
                            <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-4 lg:pt-32"> {/* Decreased lg:px-8 to lg:px-4 */}
                                <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center justify-center"> {/* Added justify-center */}
                                    <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                                        {/* Your existing content */}
                                    </div>
                                    <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                                        <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                                            {/* Image components */}
                                        </div>
                                        <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                                            {/* Image components */}
                                        </div>
                                        <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                                            {/* Image components */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            <a id="jump">
                <div className="mx-auto mt-32 max-w-7xl sm:mt-10 sm:px-6 lg:px-8">
                    {/* Content after jumping */}
                </div>
            </a>
            <div className="relative bg-gray-50 px-6 pb-20 pt-16 lg:px-8 lg:pb-28 lg:pt-24">
                {/* Content */}
            </div>
        </>
    );
};

export default HeroSection;
