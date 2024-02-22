import React, { ReactNode } from 'react';
import { HashLink } from 'react-router-hash-link';
import { Link as RouterLink } from 'react-router-dom';

interface LinkProps {
    url: string;
    onClick?: () => void;
    children?: ReactNode;
    className?: string;
}

function Link(props: LinkProps) {

    const isHashLink = props.url.startsWith('#') || props.url.startsWith('/#');
    return (
        isHashLink ?
            <HashLink
                to={props.url}
                className={props.className}
                onClick={props.onClick}>
                {props.children}
            </HashLink>
            :
            <RouterLink
                {...props}
                className={props.className}
                to={props.url}
                onClick={props.onClick}
                target="_blank"
                rel="noopener noreferrer">
                {props.children}
            </RouterLink>
    )
}

export default Link;