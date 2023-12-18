import Link from 'next/link';
import { FC, PropsWithChildren, ReactNode } from 'react';

type ButtonProps = PropsWithChildren<{
    link: string,
    className?: string
    [ key: string ]: string | undefined | ReactNode
    
}>
export const Button: FC<ButtonProps> = ({link,children,...props}) => {
    return <Link href={link} {...props}>{children}</Link>
    
}