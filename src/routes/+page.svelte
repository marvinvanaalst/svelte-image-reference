<script lang="ts">
	import { asset, base } from '$app/paths';
	/*
	./src/lib/assets folder
	 */
	// as direct import
	import imgImport from '$lib/assets/asset-path.jpg';

	// using assets path
	// This one is broken, dunno why
	// let assetPath = `${assets}/asset-path.jpg`;
	// console.log(`asset path: ${assetPath}`);

	/*
	static folder
	 */
	let imgStaticAssetFn = asset('/static-path.jpg');
	console.log(`asset fn: ${imgStaticAssetFn}`);

	let basePath = `${base}/static-path.jpg`;
	console.log(`static using base path: ${basePath}`);

	/*
	dynamic import
	 */
	let { data } = $props();

	// using import.meta
	let assetSlug = data.assetSlug;
	let staticSlug = data.staticSlug;
	const images = import.meta.glob(['$lib/assets/*'], { eager: true, as: 'url' });
	let imgDynamicMeta = images[`/src/lib/assets/${assetSlug}.jpg`];
	console.log(`dynamic import using import.meta: ${imgDynamicMeta}`);

	// using asset fn
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
