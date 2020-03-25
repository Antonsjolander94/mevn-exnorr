import axios from "axios";
const URL = "/api/persons/";

const state = {
    persons: [],
    birthdayPersons: null
};
const getters = {
    allPersons: state => state.persons,
    allbirthdayPersons: state => state.birthdayPersons,
};
const actions = {
    async fetchPersons({ commit }) {
        const { data } = await axios.get(URL);
        if (Array.isArray(data)) {
            const birthdays = data.filter(person => person.daysLeft == 0);
            if (birthdays && birthdays.length > 0) {
                console.log("birthdays", birthdays)
                commit("SET_BIRTHDAY_PERSONS", birthdays);
            } else {
                console.log("no birthdays")
                commit("SET_BIRTHDAY_PERSONS", null)
            }
            commit("SET_PERSONS", data);
        }

    },
    async fetchPersonById({ commit }, id) {
        const { data } = await axios.get(URL + id);
        console.log(commit)
        return data;
    },
    async addPerson({ commit }, payload) {

        try {
            const { name, month, day, year, image } = payload;
            console.log({ submitting: payload })
            if (image) {
                var bodyFormData = new FormData();
                bodyFormData.set('name', name);
                bodyFormData.set('month', month);
                bodyFormData.set('day', day);
                bodyFormData.set('year', year);
                bodyFormData.set('image', image);

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
                    name,
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
            console.log({ payload: payload })
            const { _id, name, month, day, year } = payload;
            const { data } = await axios.put(URL + _id, {
                name,
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
    SET_BIRTHDAY_PERSONS: (state, persons) => (state.birthdayPersons = persons),
    SPLICE_PERSON: (state, personId) => (state.persons = state.persons.filter(person => person._id !== personId))
};

export default {
    state,
    getters,
    actions,
    mutations
};
