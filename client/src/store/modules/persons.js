import axios from "axios";

const URL = "http://localhost:5000/api/persons/";

const state = {
  persons: []
};
const getters = {
  allPersons: state => state.persons
};
const actions = {
  async fetchPersons({ commit }) {
    const { data } = await axios.get(URL);

    commit("SET_PERSONS", data);
  },
  async addPerson({ commit }, payload) {

    try {
      const { forename, surname, month, day, year, file } = payload;
      console.log({ submitting: payload })
      if (file) {
        var bodyFormData = new FormData();
        bodyFormData.set('forename', forename);
        bodyFormData.set('surname', surname);
        bodyFormData.set('month', month);
        bodyFormData.set('day', day);
        bodyFormData.set('year', year);
        bodyFormData.set('image', file);

        console.log({ bodyFormData: bodyFormData })
        const response = await axios({
          method: 'post',
          url: URL,
          data: bodyFormData,
          headers: { 'Content-Type': 'multipart/form-data' }
        })
          .then(function (response) {
            //handle success
            console.log(response);
          })
          .catch(function (response) {
            //handle error
            console.log(response);
          });
        console.log(response)
      } else {
        const { data } = await axios.post(URL, {
          forename,
          surname,
          month,
          day,
          year,
        });
        console.log({ response: data })
      }

    } catch (error) {
      console.log(error)
    }
    console.log(commit)
  },
  async deleteThePerson({ commit }, payload) {
    try {
      console.log("deleting", payload)
      await axios.delete(URL + payload);
      commit("SPLICE_PERSON", payload)
    } catch (error) {
      console.log(error)
    }
    console.log(commit)
  },
  async updatePerson({ commit }, payload) {
    try {
      const { id, forename, surname, month, day, year } = payload;
      const { data } = await axios.put(URL + id, {
        forename,
        surname,
        month,
        day,
        year
      });
      console.log({ response: data })
    } catch (error) {
      console.log(error)
    }
    console.log(commit)
  }
};
const mutations = {
  SET_PERSONS: (state, persons) => (state.persons = persons),
  SPLICE_PERSON: (state, personId) => (state.persons = state.persons.filter(person => person._id !== personId))
};

export default {
  state,
  getters,
  actions,
  mutations
};
