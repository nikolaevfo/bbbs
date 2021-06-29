import calendarCardsList from './calendarCardsList';
import questionsCardsList from './questionsCardsList';
import questionsTagsList from './questionsTagsList';
import whereToGoCardsList from './whereToGoCardsList';
import whereToGoTagsList from './whereToGoTagsList';
import profileNarrativesCards from './profileNarrativesCards';
import MockedMainPageData from './mocks';

const axios = require('axios');

const MockAdapter = require('axios-mock-adapter');

const mock = new MockAdapter(axios);

class Api {
  constructor({ baseUrl }) {
    this.baseUrl = baseUrl;
  }

  static checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(new Error(`Ошибка: ${res.status}`));
  }

  login(userData) {
    mock.onPost(`${this.baseUrl}/token`).reply(200, {
      username: userData.login,
      password: userData.password,
      refresh:
        'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTYyMDU4NTM1NSwianRpIjoiNGY5YTc5ZmZmNDEzNDM5NmJlNjhlZTVhNjk4MWNjMDgiLCJ1c2VyX2lkIjoxfQ.9pi-sEjkVsU7yxnP26Xvf-E98CVp9HgRvE_sHI7Mi_E',
      access:
        'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjIwNDk5MjU1LCJqdGkiOiI3N2Q1MWNmNWM1ZGU0YzBmYjE3MDVlMDgzYjU4YjYyMSIsInVzZXJfaWQiOjF9.jPP3p030SSA4H72m1JpElYh-R-bF20CBcLwnxI7Lxjs',
    });
    return axios
      .post(`${this.baseUrl}/token`, {
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: userData.login, password: userData.password }),
      })
      .then(this.checkResponse);
  }

  // calendar =======================================================
  getCalendarCardsLoggedIn(access) {
    mock.onGet(`${this.baseUrl}/afisha/events/`).reply(200, {
      calendarCards: calendarCardsList,
    });
    return axios
      .get(`${this.baseUrl}/afisha/events/`, {
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${access}`,
        },
      })
      .then(this.checkResponse);
  }

  getCalendarCardsLoggedOut(access, guestCity) {
    mock.onGet(`${this.baseUrl}/afisha/events/`).reply(200, {
      calendarCards: calendarCardsList,
    });
    return axios
      .get(`${this.baseUrl}/afisha/events/`, {
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${access}`,
        },
        data: { city: guestCity },
      })
      .then(this.checkResponse);
  }

  appointToEvent(access, eventId) {
    mock.onPost(`${this.baseUrl}/afisha/event-participants/`).reply(200, {
      event: eventId,
    });
    return axios
      .post(`${this.baseUrl}/afisha/event-participants/`, {
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${access}`,
        },
        data: { event: eventId },
      })
      .then(this.checkResponse);
  }

  deleteAppointToEvent(access, eventId) {
    mock.onDelete(`${this.baseUrl}/afisha/event-participants/`).reply(200, {
      event: eventId,
    });
    return axios
      .delete(`${this.baseUrl}/afisha/event-participants/`, {
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${access}`,
        },
        data: { event: eventId },
      })
      .then(this.checkResponse);
  }

  // mainPage =============================================================
  getMainPageInfo(access) {
    mock
      .onGet(`${this.baseUrl}/users/`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${access}`,
        },
      })
      .reply(200, MockedMainPageData);

    return axios
      .get(`${this.baseUrl}/users/`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${access}`,
        },
      })
      .then(this.checkResponse);
  }

  // questions ============================================================
  getQuestionsCards() {
    mock.onGet(`${this.baseUrl}/questions/`).reply(200, {
      questionsCards: questionsCardsList,
    });
    return axios
      .get(`${this.baseUrl}/questions/`, {
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(this.checkResponse);
  }

  getQuestionsTags() {
    mock.onGet(`${this.baseUrl}/questions/tags/`).reply(200, {
      questionsTags: questionsTagsList,
    });
    return axios
      .get(`${this.baseUrl}/questions/tags/`, {
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(this.checkResponse);
  }

  // whereToGo ========================================================
  whereToGoCards() {
    mock.onGet(`${this.baseUrl}/places/`).reply(200, {
      whereToGoCards: whereToGoCardsList,
    });
    return axios
      .get(`${this.baseUrl}/places/`, {
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(this.checkResponse);
  }

  whereToGoTags() {
    mock.onGet(`${this.baseUrl}/places/tags/`).reply(200, {
      whereToGoTags: whereToGoTagsList,
    });
    return axios
      .get(`${this.baseUrl}/places/tags/`, {
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(this.checkResponse);
  }

  // profile =============================================================
  getProfileNarratives(access) {
    mock
      .onGet(`${this.baseUrl}/profile/narratives/`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${access}`,
        },
      })
      .reply(200, profileNarrativesCards);

    return axios
      .get(`${this.baseUrl}/profile/narratives/`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${access}`,
        },
      })
      .then(this.checkResponse);
  }
}

const api = new Api({
  baseUrl: 'http://127.0.0.1:8000/api/v1',
});

export default api;
