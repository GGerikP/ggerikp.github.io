import React, { ReactNode } from 'react';
import { HashLink } from 'react-router-hash-link';
import { Link as RouterLink } from 'react-router-dom';

interface LinkProps {
    url: string;
    onClick?: () => void;
    children?: ReactNode;
    className?: string;
    isHashLink?: boolean;
    style?: React.CSSProperties;
}

function Link(props: LinkProps) {

    const isHashLink = props.isHashLink || props.url.startsWith('#') || props.url.startsWith('/#');
    return (
        isHashLink ?
            <HashLink
                to={props.url}
                className={props.className}
                onClick={props.onClick}
                style={props.style}>
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