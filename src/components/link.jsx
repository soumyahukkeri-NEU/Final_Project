import React from 'react';
import { Link as RouterLink } from "react-router-dom";


const StartLink = ({ getstart }) => {
    return (
        <div class="mt-10 flex items-center gap-x-6">
                <RouterLink to="/destination" class="text-sm font-semibold leading-6 text-gray-900">
                    Get Started <span aria-hidden="true">→</span>
                </RouterLink>
        </div>
    );
}

export default StartLink;
