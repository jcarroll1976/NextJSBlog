import Link from 'next/link';
import React from 'react'
import "./Button.css"

type Props = {
    text: string;
    url: string;
}

function Button({text,url}: Props) {
  return (
    <Link href={url}>
    <button className="button-container">{text}</button>
  </Link>
  )
}

export default Button