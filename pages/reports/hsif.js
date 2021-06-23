import Link from 'next/link'
import Image from 'next/image'


export default function hsif() {
  return (
    <Image
    src="/images/profile.jpg" // Route of the image file
    height={144} // Desired size with correct aspect ratio
    width={144} // Desired size with correct aspect ratio
    alt="my ex"
  />
  )
}
