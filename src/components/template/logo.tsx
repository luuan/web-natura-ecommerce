import { IconBrandAmazon } from "@tabler/icons-react";
import Link from "next/link";
import {NaturaLogo} from '../../components/svgs';


export default function Logo() {
    return (
        <Link href="/">
            <NaturaLogo className='w-[208px] h-[44px]' />
        </Link>
    )
}