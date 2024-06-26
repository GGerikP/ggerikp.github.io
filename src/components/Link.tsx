import React, { ReactNode } from 'react';
import { HashLink } from 'react-router-hash-link';
import { Link as RouterLink } from 'react-router-dom';

type LinkProps = {
    url: string;
    onClick?: () => void;
    children?: ReactNode;
    className?: string;
    target?: '_self'|'_blank'|'_parent'|'_top';
}

function Link (props: LinkProps) {

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
        target={props.target ? props.target : '_blank'}
        rel="noopener noreferrer">
        {props.children}
      </RouterLink>
  );
}

export default Link;