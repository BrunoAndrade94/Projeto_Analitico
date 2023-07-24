<template>
	<div class="login">
		<div class="login-usuario">
			<InputText
				type="text"
				v-model="login_usuario"
				placeholder="Usuário"
			/>
		</div>
		<div class="login-senha">
			<InputText
				type="password"
				v-model="login_senha"
				placeholder="Senha"
			/>
		</div>
		<div class="botao-login">
			<Button label="Acessar" :disabled="desabilitar_botao" />
		</div>
		<h3 class="clique-aqui">
			Problemas no acesso?
			<router-link to="/login-problema-no-acesso"
				>Clique aqui!</router-link
			>
		</h3>
	</div>
</template>

<script>
export default {
	name: "Login",
	data() {
		return {
			login_usuario: null,
			login_senha: null,
			desabilitar_botao: true,
		};
	},
};
</script>

<style>
.login {
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 100px;
}
.login-senha {
	margin-top: 10px;
}
.botao-login {
	margin-top: 25px;
}
.clique-aqui {
	margin-top: 16px;
}
</style>
