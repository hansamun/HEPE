import Image from "next/image"

interface PepeMascotProps {
  size?: "sm" | "md" | "lg" | "xl"
  className?: string
}

export function PepeMascot({ size = "md", className = "" }: PepeMascotProps) {
  const sizeClasses = {
    sm: 64,
    md: 128,
    lg: 256,
    xl: 320,
  }

  const sizeValue = sizeClasses[size]

  return (
    <div className={`${className} relative`}>
      <Image
        src="/images/father-pepe-mascot.png"
        alt="Father Pepe Mascot"
        width={sizeValue}
        height={sizeValue}
        className="object-contain"
        priority
      />
    </div>
  )
}
