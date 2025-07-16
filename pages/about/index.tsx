"use client";
import { useEffect } from "react";
import { Curve, Ready } from "@/components";

export default function About() {
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
										About Us
									</h1>
								</div>
							</div>
							<div className="w-full border-t border-[#21212155] pt-[20px]">
								<div className="w-full flex sm:flex-col xm:flex-col justify-between gap-[30px] padding-x">
									<div className="w-[50%] sm:w-full xm:w-full">
										<h3 className="paragraph font-medium text-secondry font-NeueMontreal">
											Our Mission:
										</h3>
									</div>
									<div className="w-[50%] sm:w-full xm:w-full">
										<p className="sub-heading font-normal font-NeueMontreal text-secondry">
											At Immutag, our mission is to empower individuals and businesses by providing clear, secure, and indisputable proof of ownership for valuable items.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="w-full padding-y bg-background">
					<div className="padding-x">
						<div className="w-full flex sm:flex-col xm:flex-col justify-between gap-[60px]">
							<div className="w-[45%] sm:w-full xm:w-full">
								<h2 className="sub-heading font-medium font-NeueMontreal text-secondry mb-[30px]">
									Our Vision
								</h2>
								<p className="paragraph font-NeueMontreal text-secondry">
									A world where every valuable asset is protected, verifiable, and effortlessly transferable, reducing theft, fraud, and disputes over ownership.
								</p>
							</div>
							<div className="w-[45%] sm:w-full xm:w-full">
								<h2 className="sub-heading font-medium font-NeueMontreal text-secondry mb-[30px]">
									Who We Are
								</h2>
								<p className="paragraph font-NeueMontreal text-secondry">
									Immutag began as LOX Network, evolving into a leading provider of blockchain-based verification solutions. We collaborate closely with manufacturers, insurance providers, network operators, and law enforcement to ensure every device or asset registered on our platform is securely protected.
								</p>
							</div>
						</div>
					</div>
				</section>

				<section className="w-full padding-y bg-about">
					<div className="padding-x">
						<div className="w-full flex sm:flex-col xm:flex-col justify-between gap-[60px] items-center">
							<div className="w-[50%] sm:w-full xm:w-full">
								<h2 className="sub-heading font-medium font-NeueMontreal text-secondry mb-[30px]">
									Our Team
								</h2>
								<p className="paragraph font-NeueMontreal text-secondry">
									Led by blockchain experts, security specialists, and technology entrepreneurs, our experienced team is dedicated to creating robust, user-friendly solutions that safeguard your assets and peace of mind.
								</p>
							</div>
							<div className="w-[40%] sm:w-full xm:w-full bg-white rounded-[20px] h-[300px] flex items-center justify-center">
								<div className="w-[80px] h-[80px] bg-about rounded-full flex items-center justify-center">
									<div className="w-[40px] h-[40px] bg-secondry rounded-full" />
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="w-full padding-y bg-background">
					<div className="padding-x">
						<h2 className="sub-heading font-medium font-NeueMontreal text-secondry mb-[50px] text-center">
							Why Choose Immutag?
						</h2>
						<div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
							<div className="bg-white rounded-[20px] p-[30px] text-center">
								<div className="w-[40px] h-[40px] bg-about rounded-full flex items-center justify-center mb-[20px] mx-auto">
									<div className="w-[20px] h-[20px] bg-secondry rounded-full" />
								</div>
								<h3 className="paragraph font-medium font-NeueMontreal text-secondry mb-[15px]">
									Security First
								</h3>
								<p className="small-text font-NeueMontreal text-secondry">
									Built with transparency, security, and compliance at the core
								</p>
							</div>
							<div className="bg-white rounded-[20px] p-[30px] text-center">
								<div className="w-[40px] h-[40px] bg-about rounded-full flex items-center justify-center mb-[20px] mx-auto">
									<div className="w-[20px] h-[20px] bg-secondry rounded-full" />
								</div>
								<h3 className="paragraph font-medium font-NeueMontreal text-secondry mb-[15px]">
									Blockchain Powered
								</h3>
								<p className="small-text font-NeueMontreal text-secondry">
									Your ownership record is encrypted, immutable, and verifiable
								</p>
							</div>
							<div className="bg-white rounded-[20px] p-[30px] text-center">
								<div className="w-[40px] h-[40px] bg-about rounded-full flex items-center justify-center mb-[20px] mx-auto">
									<div className="w-[20px] h-[20px] bg-secondry rounded-full" />
								</div>
								<h3 className="paragraph font-medium font-NeueMontreal text-secondry mb-[15px]">
									Global Network
								</h3>
								<p className="small-text font-NeueMontreal text-secondry">
									Accessible anytime, anywhere with worldwide partnerships
								</p>
							</div>
						</div>
					</div>
				</section>

				<Ready />
			</Curve>
		</>
	);
}