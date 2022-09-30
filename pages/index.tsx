import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div>
      <h2>This is a test</h2>
      <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />

    </div>
  )
}

export default Home
