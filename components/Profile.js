import Image from "next/image";

export default function ProfileImage() {
  return (
    <Image
      src="/images/profile.jpg"
      width={140}
      height={140}
      alt="profile"
    />
  )
}