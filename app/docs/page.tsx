import { subtitle, title } from "@/components/primitives";
import Link from "next/link";

export default function DocsPage() {
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<div className="inline-block max-w-lg text-center justify-center">
				<h1 className={title({ color: "foreground" })}>Make&nbsp;</h1>
				<h1 className={title({ color: "foreground" })}>beautiful&nbsp;</h1>
				<br />
				<h1 className={title()}>
					websites regardless of your design experience.
				</h1>
				<h2 className={subtitle({ class: "mt-4" })}>
					Beautiful, fast and modern React UI library.
				</h2>
			</div>

			<div className="flex gap-3">
			
			</div>

			<div className="mt-8">
				
			</div>
		</section>
	);
}
