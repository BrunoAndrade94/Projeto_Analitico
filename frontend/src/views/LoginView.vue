<template>
	<div class="login">
		<div class="login-usuario">
			<i
				class="pi pi-user"
				style="margin-right: 5px; font-size: 1rem"
			></i>
			<InputText
				type="text"
				v-model="login_usuario"
				placeholder="Usuário"
			/>
		</div>
		<div class="login-senha">
			<i class="pi pi-key" style="margin-right: 5px; font-size: 1rem"></i>
			<InputText
				type="password"
				v-model="login_senha"
				placeholder="Senha"
			/>
		</div>
		<div class="botao-login">
			<router-link to="home">
				<Button label="Acessar" :disabled="desabilitar_botao" />
			</router-link>
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
	watch: {
		login_usuario() {
			if (this.login_usuario.length > 0 && this.login_senha.length > 0) {
				this.desabilitar_botao = false;
			} else this.desabilitar_botao = true;
		},
		login_senha() {
			if (this.login_usuario.length > 0 && this.login_senha.length > 0) {
				this.desabilitar_botao = false;
			} else this.desabilitar_botao = true;
		},
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
