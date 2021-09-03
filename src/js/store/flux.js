import axios from "axios";
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: "",
			usuario: {},
			link: "http://10.0.2.15:5000",
			perrosAdoptados: 0,
			perrosUsuario: [],
			perrosCuidado: 0
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
				await axios
					.get(`${getStore().link}/usuario/profile`, {
						headers: {
							"token-acceso": getStore().token
						}
					})
					.then(res => setStore({ usuario: res.data }));
			},
			crearPerro: async perro => {
				await axios.post(`${getStore().link}/perro/crear`, perro).then(res => {
					console.log(res);
				});
			},
			getImagenes: async id => {
				await axios.get(`${getStore().link}/perro/imagen/${id}`).then(res => console.log(res));
			},
			getPerros: async () => {
				await axios
					.get(`${getStore().link}/usuario/perros`, {
						headers: {
							"token-acceso": getStore().token
						}
					})
					.then(res => {
						console.log(res);
						setStore({ perrosUsuario: [...res.data.perrosUsuario] });
					});
			}
		}
	};
};

export default getState;
