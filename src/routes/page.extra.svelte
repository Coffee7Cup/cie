<script>
	import Canvas from "$lib/canvas/Canvas.svelte";

	/* ---- DATA: define your canvases once ---- */
	const items = [
		{
			name: "pen.glb",
			color: "#fb923c",
			spin: 0.005,
			scale: 1,
			posDesktop: "-top-2 left-[12vw]",
			posTablet: "top-[10vh] left-[10vw]",
			posMobile: "top-[55vh] left-1/2 -translate-x-1/2"
		},
		{
			name: "glasses.glb",
			color: "#4ade80",
			spin: 0.004,
			scale: 1,
			posDesktop: "top-12 right-[28vw]",
			posTablet: "top-[40vh] left-1/2 -translate-x-1/2",
			posMobile: "hidden"
		},
		{
			name: "file.glb",
			color: "#22d3ee",
			spin: 0.005,
			scale: 1.3,
			posDesktop: "bottom-0 left-1/2 -translate-x-1/2",
			posTablet: "bottom-[10vh] right-[10vw]",
			posMobile: "hidden"
		},
		{
			name: "cam.glb",
			color: "#a78bfa",
			spin: 0.008,
			scale: 0.7,
			posDesktop: "bottom-[10vh] left-[8vw]",
			posTablet: "hidden",
			posMobile: "hidden"
		},
		{
			name: "phone.glb",
			color: "#facc15",
			spin: 0.01,
			scale: 5,
			posDesktop: "top-[22vh] right-[10vw]",
			posTablet: "hidden",
			posMobile: "hidden"
		}
	];

	const base = {
		rotateX: 0,
		rotateY: 0,
		rotateZ: 0,
		spinSpeed: 0.006,
		scale: 1,
		wireframe: false
	};
</script>

<!-- Floating animation -->
<style>
	.float-anim {
		animation: float 4s ease-in-out infinite;
	}
	@keyframes float {
		0% { transform: translateY(0); }
		50% { transform: translateY(-12px); }
		100% { transform: translateY(0); }
	}
	.gradient-ring {
		position: absolute;
		width: 160%;
		height: 160%;
		border-radius: 50%;
		filter: blur(70px);
		opacity: 0.75;
		left: -30%;
		top: -30%;
		z-index: -1;
	}
</style>

<!-- HERO SECTION -->
<div class="relative w-screen h-screen overflow-hidden flex justify-center items-center p-11">

	<!-- CENTER TEXT -->
	<div class="absolute text-center drop-shadow-xl z-20 
			text-[2.6rem] sm:text-[4rem] lg:text-[5.7rem] font-extrabold tracking-tight leading-snug
			px-6 max-w-[900px]">
		Center of Innovation <br class="hidden sm:block" />
		and Entrepreneurship
	</div>

	<!-- AUTO-RENDER OBJECTS -->
	{#each items as item}
		
		<!-- DESKTOP -->
		<div class={`hidden lg:block absolute w-[260px] h-[260px] ${item.posDesktop} float-anim`}>
			<div class="gradient-ring" style={`background: radial-gradient(circle, ${item.color}, transparent)`}></div>
			<Canvas name={item.name} settings={{ ...base, color: item.color, scale: item.scale, spinSpeed: item.spin }} />
		</div>

		<!-- TABLET -->
		<div class={`hidden sm:block lg:hidden absolute w-[220px] h-[220px] ${item.posTablet} float-anim`}>
			{#if item.posTablet !== "hidden"}
				<div class="gradient-ring" style={`background: radial-gradient(circle, ${item.color}, transparent)`}></div>
				<Canvas name={item.name} settings={{ ...base, color: item.color, scale: item.scale * 0.9, spinSpeed: item.spin * 0.9 }} />
			{/if}
		</div>

		<!-- MOBILE -->
		<div class={`block sm:hidden absolute w-[200px] h-[200px] ${item.posMobile} float-anim`}>
			{#if item.posMobile !== "hidden"}
				<div class="gradient-ring" style={`background: radial-gradient(circle, ${item.color}, transparent)`}></div>
				<Canvas name={item.name} settings={{ ...base, color: item.color, scale: item.scale * 0.8, spinSpeed: item.spin }} />
			{/if}
		</div>

	{/each}
</div>
