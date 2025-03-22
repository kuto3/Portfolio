import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="flex flex-col justify-center items-center">
      <div className="flex h-24 justify-center items-center ">
        Enzo Rolandin Portfolio
        </div>
        <div className="flex w-full">
          
        <div className="w-1/12"></div>
        <div className="flex flex-col items-center  h-auto w-full rounded-xl border-2 border-white p-5 space-y-5">
          <div className="my-5 font-bold ">Durandall - 2024</div>
          certifiyou.org was a complete working website, a easy solution to build smart contract for 100% secure diplomas, and certificates, with a whitelist solution. The creator was able to design with picture text an NFT, and let someone mint it as a diploma or other things. Now the database is down but i will be able to relaunch it.
          <Image
      src="/CertiFi 1.png"
      width={1500}
      height={1500}
      alt="Picture of the author"
      className="mt-6"
    />
        </div>
    
        <div className="w-1/12"></div>
        </div>
        <div className="flex w-full">
          
          <div className="w-1/12"></div>
          <div className="flex flex-col items-center  h-auto w-full rounded-xl border-2 border-t-0 border-white p-5 space-y-5">
            <div className="my-5 font-bold ">CertiFi - 2023</div>
            certifiyou.org was a complete working website, a easy solution to build smart contract for 100% secure diplomas, and certificates, with a whitelist solution. The creator was able to design with picture text an NFT, and let someone mint it as a diploma or other things. Now the database is down but i will be able to relaunch it.
            <Image
        src="/CertiFi 1.png"
        width={1500}
        height={1500}
        alt="Picture of the author"
        className="mt-6"
      />
          </div>
      
          <div className="w-1/12"></div>
          </div>
    </div>

  
    </>
  );
}
