"use client";
import Image from "next/image";
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
							<div className="w-[40%] sm:w-full xm:w-full flex items-center justify-center h-[300px] relative">
								<Image
									src="/team.webp"
									alt="Our Team"
									fill
									className="object-cover w-full h-full"
									sizes="(max-width: 768px) 100vw, 40vw"
									priority
								/>
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
			<div className="bg-white p-[30px] text-center flex flex-col items-center">
				{/* Security Shield SVG */}
				<svg className="w-[40px] h-[40px] mb-[20px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M12 2L3 7V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V7L12 2Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
					<path d="M9 12L11 14L15 10" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
				</svg>
				<h3 className="paragraph font-medium font-NeueMontreal text-secondry mb-[15px]">
					Security First
				</h3>
				<p className="small-text font-NeueMontreal text-secondry">
					Built with transparency, security, and compliance at the core
				</p>
			</div>
			<div className="bg-white p-[30px] text-center flex flex-col items-center">
				{/* Blockchain Cubes SVG */}
				<svg className="w-[40px] h-[40px] mb-[20px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
					<path d="M2 17L12 22L22 17" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
					<path d="M2 12L12 17L22 12" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
				</svg>
				<h3 className="paragraph font-medium font-NeueMontreal text-secondry mb-[15px]">
					Blockchain Powered
				</h3>
				<p className="small-text font-NeueMontreal text-secondry">
					Your ownership record is encrypted, immutable, and verifiable
				</p>
			</div>
			<div className="bg-white p-[30px] text-center flex flex-col items-center">
				{/* Global Network SVG */}
				<svg className="w-[40px] h-[40px] mb-[20px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<circle cx="12" cy="12" r="10" stroke="black" strokeWidth="2"/>
					<path d="M2 12H22" stroke="black" strokeWidth="2"/>
					<path d="M12 2A15.3 15.3 0 0 1 16 12A15.3 15.3 0 0 1 12 22A15.3 15.3 0 0 1 8 12A15.3 15.3 0 0 1 12 2Z" stroke="black" strokeWidth="2"/>
					<circle cx="12" cy="12" r="2" fill="black"/>
					<circle cx="6" cy="8" r="1" fill="black"/>
					<circle cx="18" cy="8" r="1" fill="black"/>
					<circle cx="6" cy="16" r="1" fill="black"/>
					<circle cx="18" cy="16" r="1" fill="black"/>
				</svg>
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