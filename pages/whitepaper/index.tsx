"use client";
import { useEffect } from "react";
import { Curve, Ready, RoundButton } from "@/components";

export default function Whitepaper() {
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
										Whitepaper
									</h1>
								</div>
							</div>
							<div className="w-full border-t border-[#21212155] pt-[20px]">
								<div className="w-full flex sm:flex-col xm:flex-col justify-between gap-[30px] padding-x">
									<div className="w-[50%] sm:w-full xm:w-full">
										<h3 className="paragraph font-medium text-secondry font-NeueMontreal">
											About the Whitepaper:
										</h3>
									</div>
									<div className="w-[50%] sm:w-full xm:w-full">
										<p className="sub-heading font-normal font-NeueMontreal text-secondry">
											Our whitepaper provides an in-depth look into Immutag's technology, tokenomics, business model, and strategic roadmap.
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
							<div className="w-[50%] sm:w-full xm:w-full">
								<h2 className="sub-heading font-medium font-NeueMontreal text-secondry mb-[40px]">
									What You'll Discover
								</h2>
								<div className="space-y-[30px]">
									<div className="flex items-start gap-[20px]">
										<div className="w-[40px] h-[40px] bg-about rounded-full flex items-center justify-center flex-shrink-0">
											<div className="w-[20px] h-[20px] bg-secondry rounded-full" />
										</div>
										<div>
											<h3 className="paragraph font-medium font-NeueMontreal text-secondry mb-[10px]">
												Technical Overview
											</h3>
											<p className="small-text font-NeueMontreal text-secondry">
												Understand our blockchain-based verification system and infrastructure.
											</p>
										</div>
									</div>
									<div className="flex items-start gap-[20px]">
										<div className="w-[40px] h-[40px] bg-about rounded-full flex items-center justify-center flex-shrink-0">
											<div className="w-[20px] h-[20px] bg-secondry rounded-full" />
										</div>
										<div>
											<h3 className="paragraph font-medium font-NeueMontreal text-secondry mb-[10px]">
												Token Economics
											</h3>
											<p className="small-text font-NeueMontreal text-secondry">
												Detailed insights into the TAGX/IMTG token ecosystem and utility.
											</p>
										</div>
									</div>
									<div className="flex items-start gap-[20px]">
										<div className="w-[40px] h-[40px] bg-about rounded-full flex items-center justify-center flex-shrink-0">
											<div className="w-[20px] h-[20px] bg-secondry rounded-full" />
										</div>
										<div>
											<h3 className="paragraph font-medium font-NeueMontreal text-secondry mb-[10px]">
												Use Cases
											</h3>
											<p className="small-text font-NeueMontreal text-secondry">
												Real-world scenarios demonstrating the Immutag solution in action.
											</p>
										</div>
									</div>
									<div className="flex items-start gap-[20px]">
										<div className="w-[40px] h-[40px] bg-about rounded-full flex items-center justify-center flex-shrink-0">
											<div className="w-[20px] h-[20px] bg-secondry rounded-full" />
										</div>
										<div>
											<h3 className="paragraph font-medium font-NeueMontreal text-secondry mb-[10px]">
												Strategic Roadmap
											</h3>
											<p className="small-text font-NeueMontreal text-secondry">
												Milestones, future development, and expansion plans.
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="w-[40%] sm:w-full xm:w-full bg-white rounded-[20px] p-[40px] flex flex-col items-center justify-center">
								<div className="w-[80px] h-[80px] bg-about rounded-full flex items-center justify-center mb-[30px]">
									<div className="w-[40px] h-[40px] bg-secondry rounded-full" />
								</div>
								<h3 className="paragraph font-medium font-NeueMontreal text-secondry mb-[20px] text-center">
									Download the Latest Version
								</h3>
								<p className="small-text font-NeueMontreal text-secondry text-center mb-[30px]">
									Get comprehensive insights into Immutag's technology and vision
								</p>
								<div className="flex items-center justify-between bg-secondry cursor-pointer rounded-full group">
									<RoundButton
										href="#"
										title="Download Whitepaper"
										bgcolor="#000"
										className="bg-white text-black"
										style={{ color: "#fff" }}
									/>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="w-full padding-y bg-about">
					<div className="padding-x">
						<div className="text-center">
							<h2 className="sub-heading font-medium font-NeueMontreal text-secondry mb-[30px]">
								Stay Updated
							</h2>
							<p className="paragraph font-NeueMontreal text-secondry mb-[40px]">
								Join our community to receive updates on new whitepaper versions and important announcements.
							</p>
							<div className="flex justify-center">
								<div className="flex items-center justify-between bg-secondry cursor-pointer rounded-full group">
									<RoundButton
										href="/contact"
										title="Join Community"
										bgcolor="#000"
										className="bg-white text-black"
										style={{ color: "#fff" }}
									/>
								</div>
							</div>
						</div>
					</div>
				</section>

				<Ready />
			</Curve>
		</>
	);
}