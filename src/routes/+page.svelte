<script lang="ts">
	import { asset, assets, base } from '$app/paths';

	// Static import from ./src/lib/assets folder
	//// as direct import
	import imgImport from '$lib/assets/asset-path.jpg';
	console.log(`asset import: ${imgImport}`);

	//// using assets path (DEPRECATED)
	//// This one is broken, probably config issue by me in svelte.config.js
	let assetPath = `${assets}/asset-path.jpg`;
	console.log(`asset path: ${assetPath}`);

	// Static import from ./static folder
	//// using the asset function
	let imgStaticAssetFn = asset('/static-path.jpg');
	console.log(`asset fn: ${imgStaticAssetFn}`);

	//// Using base path directly (DEPRECATED)
	let basePath = `${base}/static-path.jpg`;
	console.log(`static using base path: ${basePath}`);

	let { data } = $props();

	// dynamic import from ./src/lib/assets folder
	//// using import.meta
	let assetSlug = data.assetSlug;
	let staticSlug = data.staticSlug;
	const images = import.meta.glob(['$lib/assets/*'], { eager: true, as: 'url' });
	let imgDynamicMeta = images[`/src/lib/assets/${assetSlug}.jpg`];
	console.log(`dynamic import using import.meta: ${imgDynamicMeta}`);

	// dynamic import from ./static folder
	//// using asset fn
	let imgDynamicAsset = asset(`/${staticSlug}.jpg`);
	console.log(`dynamic import using asset fn: ${imgDynamicAsset}`);
</script>

<h1>Svelte image reference</h1>

<h2>Direct import from src/lib/assets/</h2>
<div class="row">
	<img src={imgImport} alt="direct asset import" />
	<div
		class="background"
		style:background="url({imgImport})"
		style:background-size="contain"
		style:background-repeat="no-repeat"
		style:background-position="center"
	></div>
</div>

<h2>Using asset fn from src/lib/assets/</h2>
<div class="row">
	<img src={imgStaticAssetFn} alt="asset fn" />
	<div
		class="background"
		style:background="url({imgStaticAssetFn})"
		style:background-size="contain"
		style:background-repeat="no-repeat"
		style:background-position="center"
	></div>
</div>

<!-- Disabled for now as it breaks build -->
<!-- <h2>Using assets path from src/lib/assets/</h2>
<div class="row">
	<img src={assetPath} alt="assets path" />
	<div
		class="background"
		style:background="url({assetPath})"
		style:background-size="contain"
		style:background-repeat="no-repeat"
		style:background-position="center"
	></div>
</div> -->

<h2>Using base path from /static</h2>
<div class="row">
	<img src={basePath} alt="base path" />
	<div
		class="background"
		style:background="url({basePath})"
		style:background-size="contain"
		style:background-repeat="no-repeat"
		style:background-position="center"
	></div>
</div>

<h2>Dynamic import using import.meta</h2>
<div class="row">
	<img src={imgDynamicMeta} alt="base path" />
	<div
		class="background"
		style:background="url({imgDynamicMeta})"
		style:background-size="contain"
		style:background-repeat="no-repeat"
		style:background-position="center"
	></div>
</div>

<h2>Dynamic import using asset fn</h2>
<div class="row">
	<img src={imgDynamicAsset} alt="img dynamic asset fn" />
	<div
		class="background"
		style:background="url({imgDynamicAsset})"
		style:background-size="contain"
		style:background-repeat="no-repeat"
		style:background-position="center"
	></div>
</div>

<style>
	img {
		width: 300px;
		height: 200px;
		border: 1px solid blue;
	}

	.background {
		width: 300px;
		height: 200px;
		border: 1px solid red;
	}

	.row {
		display: flex;
		gap: 1rem;
	}
</style>
