import React, { PureComponent, useState,useEffect } from 'react';
import {BiArrowFromBottom} from 'react-icons/bi'
import {classNames} from '../utils/classNames'



export const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if(window.pageYOffset > 300)
        {
            setIsVisible(true);
        }
        else
        {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }
    );

    return (
        <div className="">
            <button type='button' onClick={scrollToTop} className={classNames(
                isVisible ? "opacity-100" : "opacity-0",
                "scrolltotopbtn MobDnoneImg btn btn-primary btn-lg rounded-circle"
            )} >
                <BiArrowFromBottom aria-hidden="true" />
            </button>
        </div>

    );

}