<template>
	<div id="App">
		<Header title="Projeto Analítico"></Header>
		<Content></Content>
		<Footer></Footer>
	</div>
</template>

<script>
import Header from "./components/templates/Header.vue";
import Content from "./components/templates/Content.vue";
import Footer from "./components/templates/Footer.vue";

export default {
	name: "App",
	components: { Header, Content, Footer },
};
</script>

<style></style>
