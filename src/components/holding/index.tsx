import {FC} from "react";
import Image from "next/image";
import {holdingImg, holdings} from "@/constants";
import {useMatchMedia} from "@/hooks/use-media";

export const Holding: FC = () => {
  const isMD = useMatchMedia(768);

  return (
    <div className="relative w-full pt-10 h-96 md:h-[670px] flex justify-center items-center">
      <Image src={holdingImg} alt='holding' className="w-36 h-40 md:w-60 md:h-64 hexagon bg-blue-500 shadow-lg z-10"/>
      <div className="absolute w-full h-full flex justify-center items-center spin">
        {holdings.map((img, idx) => (
          <div
            key={idx + '-item'}
            className="absolute"
            style={{
              transform: `rotate(${(idx * 360) / 8}deg) translate(${isMD ? 16 : 10}rem) rotate(-${(idx * 360) / 8}deg)`,
            }}
          >
            <Image src={img} alt={idx + '-photo'}
                   className="hexagon object-cover w-24 md:w-40 h-28 md:h-44 negative-spin"/>
          </div>
        ))}
      </div>
    </div>
  )
}