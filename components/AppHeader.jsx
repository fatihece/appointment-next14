import Image from "next/image";

function AppHeader() {
	return (
		<header className="bg-neutral-50 border-b border-neutral-100 py-4 ">
			<div className="container">
				<div className="relative flex justify-center">
					<Image src='/logo.png' width='300' height='100' alt='Logo' />
				</div>
			</div>
		</header>
	);
}

export default AppHeader;
