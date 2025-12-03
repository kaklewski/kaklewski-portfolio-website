import { RefObject } from 'react';

export function scrollToSection(ref: RefObject<HTMLElement>, offset = 0) {
    if (!ref.current) return;

    const topPosition =
        ref.current.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: topPosition, behavior: 'smooth' });
}
