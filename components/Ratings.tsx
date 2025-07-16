import Link from "next/link";
import { Rounded } from "@/components";

export default function Ratings() {
	return (
		<div className="w-full flex justify-between sm:flex-col xm:flex-col gap-[20px]">
			<div className="w-[49.5%] sm:w-full xm:w-full justify-between h-[60vh] sm:h-[50vh] xm:h-[50vh] gap-[10px]">
				<div className="w-full h-full flex items-center justify-center rounded-[10px] bg-marquee relative">
					<h1 className="text-[48px] xl:text-[60px] font-bold text-about uppercase font-NeueMontreal tracking-wider">
						IMMUTAG
					</h1>
					<div className="absolute bottom-[35px] left-[25px] flex items-center justify-center border border-about px-[12px] py-[8px] cursor-pointer rounded-full">
						<Link
							className="xl:text-[18px] xl:leading-[18px] text-[14px] leading-[14px] text-about uppercase font-normal font-NeueMontreal tracking-wider"
							href={"/"}>
							&copy;2025 immutag
						</Link>
					</div>
				</div>
			</div>
			<div className="w-[50%] sm:w-full xm:w-full sm:flex-col xm:flex-col flex gap-[15px]">
				<div className="w-full flex items-center justify-center rounded-[10px] bg-secondry relative h-[60vh] sm:h-[50vh] xm:h-[50vh]">
					<h1 className="text-[48px] xl:text-[60px] font-bold text-white uppercase font-NeueMontreal tracking-wider">
						IMMUTAG
					</h1>
					<div className="absolute left-[25px] bottom-[35px] w-fit rounded-[50px] border border-white cursor-pointer">
						<Link
							className="xl:text-[18px] xl:leading-[18px] text-[14px] leading-[14px] font-NeueMontreal text-white uppercase tracking-wider"
							href="/services">
							<Rounded
								backgroundColor="#fff"
								className="">
								<p className="z-10 px-[12px] py-[8px] hover:text-black">
									rating 5.0 for immutag
								</p>
							</Rounded>
						</Link>
					</div>
				</div>
				<div className="w-full flex items-center justify-center rounded-[10px] bg-secondry relative h-[60vh] sm:h-[50vh] xm:h-[50vh]">
					<h1 className="text-[48px] xl:text-[60px] font-bold text-white uppercase font-NeueMontreal tracking-wider">
						IMMUTAG
					</h1>
					<div className="absolute left-[25px] bottom-[35px] w-fit rounded-[50px] border border-white cursor-pointer">
						<Link
							className="xl:text-[18px] xl:leading-[18px] text-[14px] leading-[14px] font-NeueMontreal text-white uppercase tracking-wider"
							href="/services">
							<Rounded
								backgroundColor="#fff"
								className="">
								<p className="z-10 px-[12px] py-[8px] hover:text-black">
									immutag business
								</p>
							</Rounded>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}