import axios from "axios";
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: "",
			usuario: "",
			link: "http://10.0.2.15:5000",
			perros: [],
			perroActual: {},
			imagenes: []
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
			},
			getPerros: async () => {
				await axios.get(`${getStore().link}/perros`).then(res => setStore({ perros: res.data.perros }));
			},

			getPerro: async id => {
				setStore({ perroActual: {} });

				await axios.get(`${getStore().link}/perro/${id}`).then(res => {
					setStore({ perroActual: res.data });
				});
			},
			getImagenes: async id => {
				setStore({ imagenes: [] });
				await axios
					.get(`${getStore().link}/perro/imagen/${id}`)
					.then(res => setStore({ imagenes: res.data.imagenes }));
			}
		}
	};
};

export default getState;
