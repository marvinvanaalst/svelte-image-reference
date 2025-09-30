<script lang="ts">
	import { asset, assets, base } from '$app/paths';

	// ./src/lib/assets folder
	// as direct import
	import imgImport from '$lib/assets/asset-path.jpg';
	let imgAssetFn = asset('/static-path.jpg');
	console.log(`asset fn: ${imgAssetFn}`);

	// using assets path
	let assetPath = `${assets}/asset-path.jpg`;
	console.log(`asset path: ${assetPath}`);

	// ./static folder
	let basePath = `${base}/static-path.jpg`;
	console.log(`static using base path: ${basePath}`);
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
	<img src={imgAssetFn} alt="asset fn" />
	<div
		class="background"
		style:background="url({imgAssetFn})"
		style:background-size="contain"
		style:background-repeat="no-repeat"
		style:background-position="center"
	></div>
</div>

<h2>Using assets path from src/lib/assets/</h2>
<div class="row">
	<img src={assetPath} alt="assets path" />
	<div
		class="background"
		style:background="url({assetPath})"
		style:background-size="contain"
		style:background-repeat="no-repeat"
		style:background-position="center"
	></div>
</div>

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
