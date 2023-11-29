import React from 'react';

const Indeximage = ({ className, src, alt }) => {
    return (
           <div class="relative">
                <img className={className} src={src} alt={alt} class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"/>
                <div class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>
            </div>
    );
}

export default Indeximage;