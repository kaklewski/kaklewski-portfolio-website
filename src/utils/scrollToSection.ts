import { RefObject } from 'react';

function scrollToSection(ref: RefObject<HTMLDivElement | null>, offset = 0) {
    if (!ref.current) return;

    const topPosition =
        ref.current.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: topPosition, behavior: 'smooth' });
}

export default scrollToSection;
