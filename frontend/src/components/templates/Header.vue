<template>
	<header class="header">
		<h1 class="title">
			<router-link to="/login"> {{ title }}</router-link>
		</h1>
	</header>
</template>

<script>
export default {
	name: "Header",
	props: { title: String },
};
</script>

<style>
.header {
	grid-area: header;
	background: linear-gradient(to right, #1e469a, #49a7c1);

	color: #fff;
	display: flex;
	align-items: center;
	text-align: center;
	justify-content: center;
}
.title {
	margin-left: 20px;
	font-size: 1.2rem;
	color: #fff;
	font-weight: 100;
	flex-grow: 1;
}

.title a {
	color: #fff;
	text-decoration: none;
}

.title a:hover {
	color: burlywood;
	text-decoration: none;
}
</style>
