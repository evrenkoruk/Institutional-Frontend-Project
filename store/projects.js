export const state = () => ({
  type: "all",
  status: -1,
  list: [
    {
      name: "Sultan",
      img: require("@/assets/img/ProjectsPhotos/OK_Projects/Otel/Sultan.jpg"),
      type: "otel",
      status: true,
    },
    {
      name: "Grida",
      img: require("@/assets/img/ProjectsPhotos/OK_Projects/Otel/Grida.jpg"),
      type: "otel",
      status: true,
    },
    {
      name: "Marbel",
      img: require("@/assets/img/ProjectsPhotos/OK_Projects/Otel/Marbel.jpg"),
      type: "otel",
      status: true,
    },
    {
      name: "Perissia",
      img: require("@/assets/img/ProjectsPhotos/OK_Projects/Otel/Perissia.jpg"),
      type: "otel",
      status: true,
      
    },
    {
      name: "Batıhan",
      img: require("@/assets/img/ProjectsPhotos/OK_Projects/Otel/Batıhan.jpg"),
      type: "otel",
      status: true,
    },
    {
      name: "Filiz Sitesi",
      img: require("@/assets/img/ProjectsPhotos/OK_Projects/Housing/Filiz.jpg"),
      type: "konut",
      status: true,
    },
    {
      name: "Akyar Konakları",
      img: require("@/assets/img/ProjectsPhotos/OK_Projects/Housing/Akyar.jpg"),
      type: "konut",
      status: true,
    },
    {
      name: "Ağa Konakları",
      img: require("@/assets/img/ProjectsPhotos/OK_Projects/Housing/Aga.jpg"),
      type: "konut",
      status: true,
    },
    {
      name: "Belvü",
      img: require("@/assets/img/ProjectsPhotos/OK_Projects/Housing/Belvu.jpg"),
      type: "konut",
      status: true,
    },
    {
      name: "Çamkoru",
      img: require("@/assets/img/ProjectsPhotos/OK_Projects/Housing/Camkoru.jpg"),
      type: "konut",
      status: true,
    },
    {
      name: "Çelik Sitesi",
      img: require("@/assets/img/ProjectsPhotos/OK_Projects/Housing/Celik.jpg"),
      type: "konut",
      status: true,
    },
    {
      name: "Fesci Sitesi",
      img: require("@/assets/img/ProjectsPhotos/OK_Projects/Housing/Fesci.jpg"),
      type: "konut",
      status: true,
    },
    {
      name: "Narlıbahçe",
      img: require("@/assets/img/ProjectsPhotos/OK_Projects/Housing/Nar.jpg"),
      type: "konut",
      status: true,
    },
    {
      name: "Sargın Sitesi",
      img: require("@/assets/img/ProjectsPhotos/OK_Projects/Housing/Sargın.jpg"),
      type: "konut",
      status: true,
    },
    {
      name: "Terme Sitesi",
      img: require("@/assets/img/ProjectsPhotos/OK_Projects/Housing/Terme.jpg"),
      type: "konut",
      status: true,
    },
    {
      name: "Ekim Koop",
      img: require("@/assets/img/ProjectsPhotos/OK_Projects/Housing/Ekim.jpg"),
      type: "konut",
      status: true,
    },
    {
      name: "Alında",
      img: require("@/assets/img/ProjectsPhotos/OK_Projects/Housing/Alinda.jpg"),
      type: "konut",
      status: true,
    },
    {
      name: "Angora",
      img: require("@/assets/img/ProjectsPhotos/OK_Projects/Housing/Angora.jpg"),
      type: "konut",
      status: true,
    },
    {
      name: "Kuşadası İş Merkezi",
      img: require("@/assets/img/ProjectsPhotos/OK_Projects/BusinessCenter/Kusadasi.jpg"),
      type: "ismerkezi",
      status: true,
    },
    {
      name: "Kutucu İş Hanı",
      img: require("@/assets/img/ProjectsPhotos/OK_Projects/BusinessCenter/Kutucu.jpg"),
      type: "ismerkezi",
      status: true,
    },
    {
      name: "Tofaş",
      img: require("@/assets/img/ProjectsPhotos/OK_Projects/BusinessCenter/Tofas.jpg"),
      type: "ismerkezi",
      status: true,
    },
    {
      name: "Kuşadası Ticaret Odası",
      img: require("@/assets/img/ProjectsPhotos/OK_Projects/BusinessCenter/Ticaret.jpg"),
      type: "ismerkezi",
      status: true,
    },



  ],
  filters: [
    {
      title: "TÜM PROJELER",
      type: "all",
    },{
      title: "KONUT",
      type: "konut",
    },
    {
      title: "OTEL",
      type: "otel",
    },
    {
      title: "İŞ MERKEZİ",
      type: "ismerkezi",
    },
    {
      title: "İÇ DİZAYN",
      type: "icdizayn",
    },
  ],
});

export const mutations = {
  updateStatus(state, payload) {
    state.status = !!payload.status;
    state.type = "all";
  },
  updateType(state, payload) {
    state.type = payload.type;
    state.status = -1;
  },
};

export const getters = {
  getFilteredProjects: (state) => (limit = 0) => {
    const results = state.list.filter((project) => {
      return (
        (state.type === "all" && state.status === -1) ||
        (project.type === state.type && state.status === -1) ||
        (state.type === "all" && project.status === state.status)
      );
    });

    return results.filter(
      (project, index) => (!!limit && limit > index) || !limit
    );
  },
};
