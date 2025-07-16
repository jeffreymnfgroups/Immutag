import { supportedDevicesItem } from "@/constants";
import { Heading, ProjectCard, RoundButton, Tags } from "@/components";

export default function Projects() {
	return (
		<section className="w-full rounded-t-[20px]">
			<Heading
				title="Supported Devices"
				className="padding-x padding-y pb-[50px] border-b border-[#21212155]"
			/>
			<div className="w-full flex justify-between gap-y-[50px] padding-x padding-y flex-wrap">
				{supportedDevicesItem.map((item) => (
					<div
						className="w-[49%] sm:w-full xm:w-full"
						key={item.id}>
						<div className="flex gap-[10px] items-center pb-[10px]">
							<span className="w-[10px] h-[10px] rounded-full bg-secondry" />
							<h1 className="small-text uppercase font-medium font-NeueMontreal text-secondry">
								{item.title}
							</h1>
						</div>
						<div className="bg-gray-100 rounded-[15px] p-[40px] h-[300px] flex flex-col items-center justify-center">
							<div className="w-[60px] h-[60px] bg-about rounded-full flex items-center justify-center mb-[20px]">
								<div className="w-[30px] h-[30px] bg-secondry rounded-full" />
							</div>
							<p className="paragraph font-NeueMontreal text-secondry text-center">
								{item.description}
							</p>
						</div>
					</div>
				))}
			</div>
			<div className="w-full flex justify-center">
				<div className="flex items-center justify-between bg-secondry cursor-pointer rounded-full group">
					<RoundButton
						href="/how-it-works"
						title="Learn How It Works"
						bgcolor="#000"
						className="bg-white text-black"
						style={{ color: "#fff" }}
					/>
				</div>
			</div>
		</section>
	);
}
