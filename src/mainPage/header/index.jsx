import React from 'react'
import { Button, HeaderWrapper,Text, Text1 } from './styled'

function Header() {
    return (
        <>
            <HeaderWrapper>
                <div>
                 <Text>
                 Select Your New Perfect Style
                 </Text>
                 <Text1>
                 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat is aute irure.
                 </Text1>
                 <Button>
                     SHOP NOW
                 </Button>
                </div>
                <div>
                    <img src="https://tmb-01.github.io/timezone/assets/img/hero/watch.png" alt="" />
                </div>
            </HeaderWrapper>
        </>
    )
}

export default Header
