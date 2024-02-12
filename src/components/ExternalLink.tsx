import React, { ReactNode } from 'react';

interface ExternalLinkProps {
    url: string;
    children: ReactNode;
}

function ExternalLink(props: ExternalLinkProps) {

    return (
        <a
            href={props.url}
            target="_blank"
            rel="noopener noreferrer">
                {props.children}
        </a>
    )
}

export default ExternalLink;