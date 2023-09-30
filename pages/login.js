import React from 'react'
import tw from 'tailwind-styled-components'

const Login = () => {
  return (
    <Wrapper>
        <UberLogo src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/800px-Uber_logo_2018.svg.png' />
        <Title>Log in to access your account</Title>
        <HeadImage src='https://i.ibb.co/CsV9RYZ/login-image.png' />
        <SignInButton>Sign in with Google</SignInButton>
        
    </Wrapper>
  )
}

export default Login

const Wrapper = tw.div`
    flex flex-col h-screen w-screen bg-gray-200 p-4
`

const SignInButton = tw.div`
    bg-black text-white text-center py-4 mt-8
`

const UberLogo = tw.img`
    h-8 w-auto object-contain self-start
`

const Title = tw.div`
    text-5xl pt-4 text-gray-500
`

const HeadImage = tw.img`
    object-contain w-full h-auto
`