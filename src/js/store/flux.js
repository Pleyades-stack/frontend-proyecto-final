import axios from "axios";
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: "",
			usuario: "",
			link: "http://10.0.2.15:5000"
		},
		actions: {
			register: async usuario => {
				await axios.post(`${getStore().link}/usuario/crear`, usuario).then(res => {
					if (res.status === 200) {
						console.log("aqui");
						getActions().login(usuario);
					}
				});
			},
			login: async usuario => {
				await axios
					.post(`${getStore().link}/usuario/login`, {
						correo: usuario.correo,
						clave: usuario.clave
					})
					.then(res => {
						if (res.status === 200) {
							setStore({ token: res.data.token });
						}
					});
			}
		}
	};
};

export default getState;
