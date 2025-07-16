"use client";
import { useEffect } from "react";
import { Curve, Ready } from "@/components";
import { roadmapItems } from "@/constants";

export default function Roadmap() {
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
										Roadmap
									</h1>
								</div>
							</div>
							<div className="w-full border-t border-[#21212155] pt-[20px]">
								<div className="w-full flex sm:flex-col xm:flex-col justify-between gap-[30px] padding-x">
									<div className="w-[50%] sm:w-full xm:w-full">
										<h3 className="paragraph font-medium text-secondry font-NeueMontreal">
											Our Journey:
										</h3>
									</div>
									<div className="w-[50%] sm:w-full xm:w-full">
										<p className="sub-heading font-normal font-NeueMontreal text-secondry">
											From LOX Network to Immutag — building the future of secure asset ownership.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="w-full padding-y bg-background">
					<div className="padding-x">
						<div className="w-full flex flex-col gap-[60px]">
							{roadmapItems.map((item, index) => (
								<div key={item.id} className="w-full flex sm:flex-col xm:flex-col justify-between gap-[40px]">
									<div className="w-[30%] sm:w-full xm:w-full">
										<div className="flex items-center gap-[20px] mb-[20px]">
											<div className={`w-[60px] h-[60px] rounded-full flex items-center justify-center ${
												item.phase === "Completed" ? "bg-green-500" : 
												item.phase.includes("2025") ? "bg-blue-500" :
												item.phase.includes("2026") ? "bg-orange-500" : "bg-gray-400"
											}`}>
												<span className="text-[20px] font-bold text-white">
													{item.phase === "Completed" ? "✓" : 
													 item.phase.includes("2025") ? "⏳" :
													 item.phase.includes("2026") ? "🚀" : "🔮"}
												</span>
											</div>
											<div>
												<h3 className="paragraph font-medium font-NeueMontreal text-secondry">
													{item.phase}
												</h3>
												<h2 className="sub-heading font-medium font-NeueMontreal text-secondry">
													{item.title}
												</h2>
											</div>
										</div>
									</div>
									<div className="w-[65%] sm:w-full xm:w-full">
										<div className="bg-white rounded-[20px] p-[30px]">
											<ul className="space-y-[15px]">
												{item.items.map((milestone, idx) => (
													<li key={idx} className="flex items-start gap-[15px]">
														<div className="w-[8px] h-[8px] bg-secondry rounded-full mt-[8px] flex-shrink-0" />
														<p className="paragraph font-NeueMontreal text-secondry">
															{milestone}
														</p>
													</li>
												))}
											</ul>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</section>

				<Ready />
			</Curve>
		</>
	);
}