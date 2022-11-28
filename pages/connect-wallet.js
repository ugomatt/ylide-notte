import Head from "next/head";
import Image from "next/image";
import EverScaleLogo from "../components/EverScaleLogo";

const ConnectWallet = () => {
  return (
    <>
      <Head>
        <title>Connect Wallet</title>
      </Head>
      <div className="connect-wallet p-4 min-h-[calc(100vh-20rem)]">
        <div className="wrapper max-w-2xl m-auto">
          <div className="connect-wallet-cont">
            <h1>Connect Wallet</h1>
            <p>Connect your wallet to start using Ylide Nottes</p>
            <div className="connect-wallet-btns flex flex-col gap-4 p-4 mt-4 bg-white rounded-lg">
              <button className="connect-wallet-btn cta flex gap-2 items-center justify-center hover:scale-100">
                <Image
                  src="https://docs.metamask.io/metamask-fox.svg"
                  alt="Metamask"
                  width={24}
                  height={24}
                />
                <span>Metamask</span>
              </button>
              <button className="connect-wallet-btn cta flex gap-2 items-center justify-center hover:scale-100">
                <EverScaleLogo />
                <span>EverWallet</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConnectWallet;
