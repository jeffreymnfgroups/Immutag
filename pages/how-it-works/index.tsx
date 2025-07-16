"use client";
import { useEffect } from "react";
import { Curve, Ready } from "@/components";

export default function HowItWorks() {
	useEffect(() => {
		(async () => {
			const LocomotiveScroll = (await import("locomotive-scroll")).default;
			const locomotiveScroll = new LocomotiveScroll();
		})();
	}, []);

	return (
		<>
			<Curve backgroundColor={"#f1f1f1"}>
				<section className="w-full min-h-screen">
					<div className="w-full flex flex-col justify-between">
						<div className="w-full flex flex-col">
							<div className="w-full margin padding-x">
								<div>
									<h1 className="heading tracking-[-1.3px] text-[#212121] font-semibold font-FoundersGrotesk uppercase">
										How It Works
									</h1>
								</div>
							</div>
							<div className="w-full border-t border-[#21212155] pt-[20px]">
								<div className="w-full flex sm:flex-col xm:flex-col justify-between gap-[30px] padding-x">
									<div className="w-[50%] sm:w-full xm:w-full">
										<h3 className="paragraph font-medium text-secondry font-NeueMontreal">
											Simple 3-Step Process:
										</h3>
									</div>
									<div className="w-[50%] sm:w-full xm:w-full">
										<p className="sub-heading font-normal font-NeueMontreal text-secondry">
											Immutag links a tamper-proof tag on your device with a unique digital identity stored on the blockchain. Once tagged, your item becomes verifiable, transferable, and harder to steal or resell.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="w-full padding-y bg-background">
					<div className="padding-x">
						<div className="w-full flex flex-col gap-[80px]">
							{/* Step 1 */}
							<div className="w-full flex sm:flex-col xm:flex-col justify-between gap-[40px]">
								<div className="w-[40%] sm:w-full xm:w-full">
									<div className="flex items-center gap-[20px] mb-[30px]">
										<div className="w-[60px] h-[60px] bg-about rounded-full flex items-center justify-center">
											<span className="text-[24px] font-bold text-secondry">1</span>
										</div>
										<h2 className="sub-heading font-medium font-NeueMontreal text-secondry">
											Tag Your Device
										</h2>
									</div>
									<p className="paragraph font-NeueMontreal text-secondry">
										Every item registered with Immutag receives a secure, tamper-proof physical tag containing a unique identifier. This tag links directly to an encrypted NFT on our blockchain network, creating a permanent digital record of ownership.
									</p>
								</div>
								<div className="w-[50%] sm:w-full xm:w-full bg-gray-100 rounded-[20px] h-[300px] flex items-center justify-center">
									<div className="text-[80px]">🏷️</div>
								</div>
							</div>

							{/* Step 2 */}
							<div className="w-full flex sm:flex-col xm:flex-col justify-between gap-[40px]">
								<div className="w-[50%] sm:w-full xm:w-full bg-gray-100 rounded-[20px] h-[300px] flex items-center justify-center sm:order-2 xm:order-2">
									<div className="text-[80px]">📱</div>
								</div>
								<div className="w-[40%] sm:w-full xm:w-full sm:order-1 xm:order-1">
									<div className="flex items-center gap-[20px] mb-[30px]">
										<div className="w-[60px] h-[60px] bg-about rounded-full flex items-center justify-center">
											<span className="text-[24px] font-bold text-secondry">2</span>
										</div>
										<h2 className="sub-heading font-medium font-NeueMontreal text-secondry">
											Register Ownership
										</h2>
									</div>
									<p className="paragraph font-NeueMontreal text-secondry">
										Using our platform (app coming soon), you'll securely register your tagged item, instantly verifying and confirming your ownership in a publicly verifiable but privacy-focused manner.
									</p>
								</div>
							</div>

							{/* Step 3 */}
							<div className="w-full flex sm:flex-col xm:flex-col justify-between gap-[40px]">
								<div className="w-[40%] sm:w-full xm:w-full">
									<div className="flex items-center gap-[20px] mb-[30px]">
										<div className="w-[60px] h-[60px] bg-about rounded-full flex items-center justify-center">
											<span className="text-[24px] font-bold text-secondry">3</span>
										</div>
										<h2 className="sub-heading font-medium font-NeueMontreal text-secondry">
											Manage and Protect
										</h2>
									</div>
									<p className="paragraph font-NeueMontreal text-secondry">
										Your tagged item becomes secure against theft or unauthorised resale. Easily transfer ownership when you sell or gift an item, or swiftly report it as lost or stolen, alerting our global network instantly.
									</p>
								</div>
								<div className="w-[50%] sm:w-full xm:w-full bg-gray-100 rounded-[20px] h-[300px] flex items-center justify-center">
									<div className="text-[80px]">🛡️</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="w-full padding-y bg-about">
					<div className="padding-x">
						<h2 className="sub-heading font-medium font-NeueMontreal text-secondry mb-[50px]">
							Technology Behind Immutag
						</h2>
						<div className="w-full flex sm:flex-col xm:flex-col justify-between gap-[40px]">
							<div className="w-[60%] sm:w-full xm:w-full">
								<p className="paragraph font-NeueMontreal text-secondry mb-[30px]">
									Immutag utilises advanced blockchain technology, specifically NFTs, ensuring all ownership data is immutable, transparent, yet completely secure. Our infrastructure is built on robust cryptographic standards, offering unparalleled security.
								</p>
								<div className="flex flex-wrap gap-[15px]">
									<div className="bg-white rounded-[30px] px-[20px] py-[10px]">
										<span className="small-text font-NeueMontreal text-secondry">Blockchain Verified</span>
									</div>
									<div className="bg-white rounded-[30px] px-[20px] py-[10px]">
										<span className="small-text font-NeueMontreal text-secondry">NFT Technology</span>
									</div>
									<div className="bg-white rounded-[30px] px-[20px] py-[10px]">
										<span className="small-text font-NeueMontreal text-secondry">Tamper-Proof</span>
									</div>
									<div className="bg-white rounded-[30px] px-[20px] py-[10px]">
										<span className="small-text font-NeueMontreal text-secondry">Encrypted</span>
									</div>
								</div>
							</div>
							<div className="w-[30%] sm:w-full xm:w-full bg-white rounded-[20px] h-[200px] flex items-center justify-center">
								<div className="text-[60px]">⛓️</div>
							</div>
						</div>
					</div>
				</section>

				<Ready />
			</Curve>
		</>
	);
}