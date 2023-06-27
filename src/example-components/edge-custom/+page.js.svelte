<script>
	import { Edge } from 'svelvet';
</script>

<Edge
	let:path
	let:destroy
	on:hover
	enableHover
	enableDestroyOnClick
	edgeClick={(e) => {
		console.log('edgeClickasd');
	}}
	><!---->
	<path class="edge" d={path} />
	<button on:click={destroy} slot="label">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
			><path
				class="edge-button-svg"
				fill="currentColor"
				d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6v12Z"
			/></svg
		>
	</button>
</Edge>

<style>
	:global(.target),
	.edge,
	button > svg > path {
		transition: opacity 0.1s ease-out;
	}

	:global(.edges-wrapper):hover {
		z-index: 1 !important;
	}

	:global(.edges-wrapper):hover .edge {
		stroke: #ff2e2e;
	}

	:global(.edges-wrapper):hover :global(.target) {
		opacity: 60% !important;
		--prop-target-edge-color: black !important;
	}

	:global(.edges-wrapper):hover button path {
		opacity: 80%;
	}

	.edge {
		stroke: white;
		stroke-width: 2px;
	}

	:global(.target) {
		stroke-width: 5px !important;
	}

	button > svg > path {
		opacity: 0;
		color: white;
		stroke: white !important;
		stroke-width: 0;
	}

	button {
		cursor: pointer;
		height: 2em;
		width: 2em;
	}
</style>
