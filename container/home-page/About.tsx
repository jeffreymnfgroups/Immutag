"use client";
import Image from "next/image";
import { useState } from "react";
import { aboutImg } from "@/public";
import { LinkHover } from "@/animation";
import { footerItems } from "@/constants";
import { Heading, RoundButton } from "@/components";

export default function About() {
	const [hovered, setHovered] = useState(false);

	return (
		<section className="w-full bg-about padding-y rounded-t-[20px] z-20 relative mt-[-15px]">
			<div className="pl-[50px] sm:px-[20px] xm:px-[20px]">
				<h2 className="sub-heading font-medium font-NeueMontreal text-secondry">
					Immutag is building a new standard in asset protection — combining
					<br className="sm:hidden xm:hidden" /> blockchain technology with&nbsp;
					<span className="sub-heading font-medium font-NeueMontreal link-flash cursor-pointer">
						physical tagging
					</span>
					&nbsp;to give you irrefutable <br className="sm:hidden xm:hidden" />
					<span className="sub-heading font-medium font-NeueMontreal link-flash cursor-pointer">
						proof of ownership
					</span>
					&nbsp;for your most valuable devices.
				</h2>
			</div>
			<div className="w-full border-y border-[#21212155] my-[50px] py-[20px]">
				<div className="padding-x pb-[50px] w-full flex sm:flex-col xm:flex-col gap-[30px] justify-between">
					<div className="w-[50%] sm:w-full xm:w-full">
						<h3 className="sub-paragraph font-medium text-secondry font-NeueMontreal">
							How It Works
						</h3>
						<ul className="list-disc ml-6 mt-4 text-secondry font-NeueMontreal">
							<li>Tag your device</li>
							<li>Register it securely</li>
							<li>Prove, transfer, or recover ownership anytime</li>
						</ul>
					</div>
					<div className="w-[50%] sm:w-full xm:w-full">
						<div className="w-full flex gap-[30px] h-full items-end sm:items-start sm:flex-col xm:items-start xm:flex-col">
							<div className="w-[40%] sm:w-[60%] xm:w-[60%]">
								<p className="sub-paragraph font-medium font-NeueMontreal text-secondry tracking-wide">
									Immutag links a tamper-proof tag on your device with a unique digital identity stored on the blockchain. Once tagged, your item becomes verifiable, transferable, and harder to steal or resell. Reduce theft, streamline transfers, and gain peace of mind.
								</p>
							</div>
							<div className="w-[60%] flex justify-end flex-col  sm:w-full xm:w-full">
								<h1 className="sub-paragraph font-medium font-NeueMontreal text-secondry pb-[20px]">
									Follow Us:
								</h1>
								<div className="flex flex-col">
									{footerItems.map((item) => (
										<LinkHover
											key={item.id}
											className="w-fit sub-paragraph font-medium capitalize before:h-[1px] after:h-[1px] before:bottom-[1px] after:bottom-[1px]"
											title={item.title}
											href={item.href}
										/>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="w-full flex justify-between padding-x sm:flex-col xm:flex-col gap-[30px]">
				<div className="flex flex-col gap-[30px]">
					<Heading title="Learn More:" />
					<div
						className="w-fit flex items-center justify-between bg-secondry cursor-pointer rounded-full group"
						onMouseEnter={() => setHovered(true)}
						onMouseLeave={() => setHovered(false)}>
						<RoundButton
							href="/how-it-works"
							title="How It Works"
							bgcolor="#000"
							className="bg-white text-black"
							style={{ color: "#fff" }}
						/>
					</div>
				</div>
				<div
					className={`w-[50%] sm:w-full xm:w-full transition transform duration-[1.5s] ease-[.215,.61,.355,1] rounded-[15px] overflow-hidden ${
						hovered && "scale-[0.96]"
					}`}>
					<Image
						src={aboutImg}
						alt="about-img"
						className={`w-full h-full transition transform duration-[2s] ease-[.215,.61,.355,1] ${
							hovered && "scale-[1.09]"
						}`}
					/>
				</div>
			</div>
		</section>
	);
}
