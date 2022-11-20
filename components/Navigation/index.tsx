import React from "react";
import Image from "next/image";
import Link from 'next/link'


const elementStyle = 'flex justift-center align-center flex-grow h-16';

const Navigation: React.FC = () => {
    return (
        <nav className="fixed bottom-0 h-16 flex flex-nowrap w-full bg-[#fafafa] justify-center align-center">
            <Link href="/addWaste" className="flex-grow">
                <div className={elementStyle}>
                    <Image
                        className="m-auto rounded-sm"
                        src="/jedne.svg"
                        alt="Compost Logo"
                        width={32}
                        height={32}
                        priority
                    />
                </div>
            </Link>
            <Link href="/CanIComposeIt" className="flex-grow">
            <div className={elementStyle}>
                <Image
                        className="m-auto rounded-sm"
                        src="/lupa.svg"
                        alt="Compost Logo"
                        width={32}
                        height={32}
                        priority
                />
            </div>
            </Link>
            <Link href="/" className="flex-grow">
                <div className={elementStyle}>
                        <Image
                                className="m-auto rounded-sm"
                                src="/compost_nav.svg"
                                alt="Compost Logo"
                                width={32}
                                height={32}
                                priority
                        />
                    
                </div>
            </Link>
            <Link href="/" className="flex-grow">
                <div className={elementStyle}>
                <Image
                        className="m-auto rounded-sm"
                        src="/map.svg"
                        alt="Compost Logo"
                        width={32}
                        height={32}
                        priority
                    />
                </div>
            </Link>
            <Link href="/" className="flex-grow">
                <div className={elementStyle}>
                    <Image
                            className="m-auto rounded-sm"
                            src="/user.svg"
                            alt="Compost Logo"
                            width={32}
                            height={32}
                            priority
                    />
                </div>
            </Link>
        </nav>
    );
};

export default Navigation;